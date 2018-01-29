define('ember-cli-pagination/lib/page-items', ['exports', 'ember-cli-pagination/util', 'ember-cli-pagination/lib/truncate-pages', 'ember-cli-pagination/util/safe-get'], function (exports, _util, _truncatePages, _safeGet) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Object.extend(_safeGet.default, {
    pageItemsAll: Ember.computed("currentPage", "totalPages", function () {
      var currentPage = this.getInt("currentPage");
      var totalPages = this.getInt("totalPages");
      _util.default.log('PageNumbers#pageItems, currentPage ' + currentPage + ', totalPages ' + totalPages);

      var res = Ember.A([]);

      for (var i = 1; i <= totalPages; i++) {
        res.push({
          page: i,
          current: currentPage === i,
          dots: false
        });
      }
      return res;
    }),
    // 

    pageItemsTruncated: Ember.computed('currentPage', 'totalPages', 'numPagesToShow', 'showFL', function () {
      var currentPage = this.getInt('currentPage');
      var totalPages = this.getInt("totalPages");
      var toShow = this.getInt('numPagesToShow');
      var showFL = this.get('showFL');

      var t = _truncatePages.default.create({ currentPage: currentPage, totalPages: totalPages,
        numPagesToShow: toShow,
        showFL: showFL });
      var pages = t.get('pagesToShow');
      var next = pages[0];

      return pages.map(function (page) {
        var h = {
          page: page,
          current: currentPage === page,
          dots: next !== page
        };
        next = page + 1;
        return h;
      });
    }),

    pageItems: Ember.computed('currentPage', 'totalPages', 'truncatePages', 'numPagesToShow', function () {
      if (this.get('truncatePages')) {
        return this.get('pageItemsTruncated');
      } else {
        return this.get('pageItemsAll');
      }
    })
  });
});