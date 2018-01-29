define('ember-cli-pagination/local/route-local-mixin', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Mixin.create({
    findPaged: function findPaged(name) {
      return this.get('store').find(name);
    }
  });
});