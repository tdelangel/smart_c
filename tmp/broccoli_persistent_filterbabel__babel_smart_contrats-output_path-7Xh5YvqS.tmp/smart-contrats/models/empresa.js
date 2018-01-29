define('smart-contrats/models/empresa', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.Model.extend({
    rfc: _emberData.default.attr('string'),
    razon_social: _emberData.default.attr('string'),
    pagina_web: _emberData.default.attr('string'),
    telefono: _emberData.default.attr('string')
  });
});