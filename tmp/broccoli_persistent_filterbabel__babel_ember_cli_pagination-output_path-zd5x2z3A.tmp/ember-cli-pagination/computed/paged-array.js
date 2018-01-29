define('ember-cli-pagination/computed/paged-array', ['exports', 'ember-cli-pagination/local/paged-array', 'ember-cli-pagination/infinite/paged-infinite-array'], function (exports, _pagedArray, _pagedInfiniteArray) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function (contentProperty, ops) {
    ops = ops || {};

    if (ops.infinite === true) {
      return makeInfiniteWithPagedSource(contentProperty, ops);
    } else if (ops.infinite) {
      return makeInfiniteWithUnpagedSource(contentProperty, ops);
    } else {
      return makeLocal(contentProperty, ops);
    }
  };

  function makeLocal(contentProperty, ops) {
    return Ember.computed("", function () {
      var pagedOps = {
        parent: this,
        content: Ember.computed.alias('parent.' + contentProperty)
      };

      // update the old binding method to the new alias method
      // converts {pageBinding: 'page'} to {page: Ember.computed.alias('parent.page')}
      for (var key in ops) {
        if (ops.hasOwnProperty(key)) {
          var alias = key.replace(/Binding$/, '');
          var value = ops[key];
          if (alias !== key) {
            pagedOps[alias] = Ember.computed.alias('parent.' + value);
            Ember.deprecate('Using Binding is deprecated, use Ember.computed.alias or Ember.computed.oneWay instead', false, {
              id: 'addon.ember-cli-pagination.paged-array',
              until: '3.0.0',
              url: 'http://emberjs.com/deprecations/v2.x#toc_ember-binding' // @TODO change this to our changelog entry
            });
            // ^ deprecation warning based off of https://github.com/emberjs/ember.js/pull/13920/files
          } else {
            pagedOps[key] = value;
          }
        }
      }

      var paged = _pagedArray.default.create(pagedOps);

      // paged.lockToRange();
      return paged;
    });
  }

  function makeInfiniteWithPagedSource(contentProperty /*, ops */) {
    return Ember.computed(contentProperty, function () {
      return _pagedInfiniteArray.default.create({ all: this.get(contentProperty) });
    });
  }

  function makeInfiniteWithUnpagedSource(contentProperty, ops) {
    return Ember.computed(contentProperty, function () {
      var all = this.get(contentProperty);
      if (all) {
        all = Ember.A(all);
      }
      ops.all = all;
      return _pagedInfiniteArray.default.createFromUnpaged(ops);
    });
  }
});