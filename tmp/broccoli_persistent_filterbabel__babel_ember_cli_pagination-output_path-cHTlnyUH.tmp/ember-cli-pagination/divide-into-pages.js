define('ember-cli-pagination/divide-into-pages', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Object.extend({
    objsForPage: function objsForPage(page) {
      var range = this.range(page);
      var all = Ember.A(this.get('all'));
      return Ember.A(all.slice(range.start, range.end + 1));
    },

    totalPages: function totalPages() {
      var allLength = parseInt(this.get('all.length'));
      var perPage = parseInt(this.get('perPage'));
      return Math.ceil(allLength / perPage);
    },

    range: function range(page) {
      var perPage = parseInt(this.get('perPage'));
      var s = (parseInt(page) - 1) * perPage;
      var e = s + perPage - 1;

      return { start: s, end: e };
    }
  });
});