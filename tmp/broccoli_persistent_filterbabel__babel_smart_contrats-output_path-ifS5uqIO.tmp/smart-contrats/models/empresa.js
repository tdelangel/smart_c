define('smart-contrats/models/empresa', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.Model.extend({
    title: _emberData.default.attr('string'),
    namelegal: _emberData.default.attr('string')

  });
});