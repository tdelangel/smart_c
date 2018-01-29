define('smart-contrats/adapters/application', ['exports', 'ember-data/adapters/json-api', 'ember-data', 'smart-contrats/config/environment'], function (exports, _jsonApi, _emberData, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var _Ember$String = Ember.String,
      pluralize = _Ember$String.pluralize,
      underscore = _Ember$String.underscore;
  exports.default = _emberData.default.JSONAPIAdapter.extend({
    // host: 'http://api-for-simplest-ember-data-crud.com', 
    headers: {
      'Accept': 'application/json',
      'Content-type': 'application/json'
    },
    host: 'http://10.20.58.23:3002',
    namespace: 'api',
    defaultSerializer: 'JSONSerializer',
    pathForType: function pathForType(type) {
      return pluralize(underscore(type));
    }
  });
});