define('smart-contrats/serializers/empresas', ['exports', 'ember-data'], function (exports, _emberData) {
      'use strict';

      Object.defineProperty(exports, "__esModule", {
            value: true
      });
      exports.default = _emberData.default.JSONAPISerializer.extend({
            normalizeResponse: function normalizeResponse(store, primaryModelClass, payload, id, requestType) {
                  payload = { empresas: payload };

                  return this._super(store, primaryModelClass, payload, id, requestType);
            }
      });
});