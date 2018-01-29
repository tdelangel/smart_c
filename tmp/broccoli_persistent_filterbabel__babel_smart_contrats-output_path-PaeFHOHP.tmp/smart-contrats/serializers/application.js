define('smart-contrats/serializers/application', ['exports', 'ember-data'], function (exports, _emberData) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = _emberData.default.RESTSerializer.extend({
        normalizeResponse: function normalizeResponse(store, primaryModelClass, payload, id, requestType) {
            console.log(payload);
            payload = { empresas: payload };

            return this._super(store, primaryModelClass, payload, id, requestType);
        }
    });
});