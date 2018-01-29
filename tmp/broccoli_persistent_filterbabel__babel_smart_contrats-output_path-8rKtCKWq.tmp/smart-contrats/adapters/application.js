define('smart-contrats/adapters/application', ['exports', 'ember-data/adapters/json-api', 'smart-contrats/config/environment'], function (exports, _jsonApi, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var _Ember$String = Ember.String,
      pluralize = _Ember$String.pluralize,
      underscore = _Ember$String.underscore;
  exports.default = DS.JSONAPIAdapter.extend({
    // host: 'http://api-for-simplest-ember-data-crud.com',
    //  host: 'http://10.20.58.23:3002',
    namespace: 'api' // a way for me to use http-mock
    // http://10.20.58.23:3002/api/empresas
    // ^^^^ this is where you put the URL to your API.
    // This is not a real API endpoint so I am leaving it commented out.
    // Requests will hit my fake server instead, using http-mock.
    // You can see the requests by looking at the Chrome console's Network tab.

  });
});