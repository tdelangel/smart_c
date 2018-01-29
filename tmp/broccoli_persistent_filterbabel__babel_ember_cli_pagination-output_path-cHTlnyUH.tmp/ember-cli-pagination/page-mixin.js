define('ember-cli-pagination/page-mixin', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Mixin.create({
    getPage: function getPage() {
      return parseInt(this.get('page') || 1);
    },

    getPerPage: function getPerPage() {
      return parseInt(this.get('perPage'));
    }
  });
});