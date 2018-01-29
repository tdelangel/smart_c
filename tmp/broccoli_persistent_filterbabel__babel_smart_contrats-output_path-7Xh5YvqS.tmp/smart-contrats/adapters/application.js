define('smart-contrats/adapters/application', ['exports', 'ember-data', 'smart-contrats/config/environment'], function (exports, _emberData, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var _Ember$String = Ember.String,
      pluralize = _Ember$String.pluralize,
      underscore = _Ember$String.underscore;
  exports.default = _emberData.default.JSONAPIAdapter.extend({
    headers: {
      'Accept': 'application/json',
      'Content-type': 'application/json'
    },
    host: _environment.default.APP.REST_WSPREFIX,
    namespace: 'api',
    defaultSerializer: 'JSONSerializer',
    pathForType: function pathForType(type) {
      return pluralize(underscore(type));
    }
  });
});