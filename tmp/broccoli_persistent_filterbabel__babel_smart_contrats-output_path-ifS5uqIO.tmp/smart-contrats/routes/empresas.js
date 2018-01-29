define('smart-contrats/routes/empresas', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    model: function model(params) {
      return this.store.query('empresa', { page: {
          number: params.page,
          size: params.size
        }
      });
    },


    queryParams: {
      page: {
        refreshModel: true
      },
      size: {
        refreshModel: true
      }
    }

  });
});