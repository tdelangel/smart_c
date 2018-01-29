define('@ember/test-helpers/dom/wait-for', ['exports', '@ember/test-helpers/wait-until', '@ember/test-helpers/dom/get-root-element', '@ember/test-helpers/dom/-get-element', '@ember/test-helpers/-utils'], function (exports, _waitUntil, _getRootElement, _getElement, _utils) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = waitFor;


  /**
    @private
    @param {NodeList} nodelist the nodelist to convert to an array
    @returns {Array} an array
  */
  function toArray(nodelist) {
    var array = new Array(nodelist.length);
    for (var i = 0; i < nodelist.length; i++) {
      array[i] = nodelist[i];
    }

    return array;
  }

  /**
    Used to wait for a particular selector to appear in the DOM. Due to the fact
    that it does not wait for general settledness, this is quite useful for testing
    interim DOM states (e.g. loading states, pending promises, etc).
  
    @param {string} selector the selector to wait for
    @param {Object} [options] the options to be used
    @param {number} [options.timeout=1000] the time to wait (in ms) for a match
    @param {number} [options.count=1] the number of elements that should match the provided selector
    @returns {Element|Array<Element>} the element (or array of elements) that were being waited upon
  */
  function waitFor(selector) {
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref$timeout = _ref.timeout,
        timeout = _ref$timeout === undefined ? 1000 : _ref$timeout,
        _ref$count = _ref.count,
        count = _ref$count === undefined ? null : _ref$count;

    return (0, _utils.nextTickPromise)().then(function () {
      if (!selector) {
        throw new Error('Must pass a selector to `waitFor`.');
      }

      var callback = void 0;
      if (count !== null) {
        callback = function callback() {
          var rootElement = (0, _getRootElement.default)();
          var elements = rootElement.querySelectorAll(selector);
          if (elements.length === count) {
            return toArray(elements);
          }
        };
      } else {
        callback = function callback() {
          return (0, _getElement.default)(selector);
        };
      }
      return (0, _waitUntil.default)(callback, { timeout: timeout });
    });
  }
});