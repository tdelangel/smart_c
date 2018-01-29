define('smart-contrats/models/empresa', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  exports.default = _emberData.default.Model.extend(_defineProperty({
    rfc: _emberData.default.attr('string'),
    razon_social: _emberData.default.attr('string'),
    pagina_web: _emberData.default.attr('string'),
    telefono: _emberData.default.attr('string')
  }, 'razon_social', _emberData.default.attr('string')));
});