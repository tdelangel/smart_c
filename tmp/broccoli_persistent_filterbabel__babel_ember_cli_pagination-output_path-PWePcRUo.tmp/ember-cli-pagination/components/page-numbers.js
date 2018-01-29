define('ember-cli-pagination/components/page-numbers', ['exports', 'ember-cli-pagination/util', 'ember-cli-pagination/lib/page-items', 'ember-cli-pagination/validate', 'ember-cli-pagination/templates/components/page-numbers'], function (exports, _util, _pageItems, _validate, _pageNumbers) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    layout: _pageNumbers.default,
    currentPage: Ember.computed.alias("content.page"),
    totalPages: Ember.computed.alias("content.totalPages"),

    hasPages: Ember.computed.gt('totalPages', 1),

    watchInvalidPage: Ember.observer("content", function () {
      var _this = this;

      var c = this.get('content');
      if (c && c.on) {
        c.on('invalidPage', function (e) {
          _this.sendAction('invalidPageAction', e);
        });
      }
    }),

    truncatePages: true,
    numPagesToShow: 10,

    validate: function validate() {
      if (_util.default.isBlank(this.get('currentPage'))) {
        _validate.default.internalError("no currentPage for page-numbers");
      }
      if (_util.default.isBlank(this.get('totalPages'))) {
        _validate.default.internalError('no totalPages for page-numbers');
      }
    },

    pageItemsObj: Ember.computed(function () {
      return _pageItems.default.create({
        parent: this,
        currentPage: Ember.computed.alias("parent.currentPage"),
        totalPages: Ember.computed.alias("parent.totalPages"),
        truncatePages: Ember.computed.alias("parent.truncatePages"),
        numPagesToShow: Ember.computed.alias("parent.numPagesToShow"),
        showFL: Ember.computed.alias("parent.showFL")
      });
    }),

    pageItems: Ember.computed("pageItemsObj.pageItems", "pageItemsObj", function () {
      this.validate();
      return this.get("pageItemsObj.pageItems");
    }),

    canStepForward: Ember.computed("currentPage", "totalPages", function () {
      var page = Number(this.get("currentPage"));
      var totalPages = Number(this.get("totalPages"));
      return page < totalPages;
    }),

    canStepBackward: Ember.computed("currentPage", function () {
      var page = Number(this.get("currentPage"));
      return page > 1;
    }),

    actions: {
      pageClicked: function pageClicked(number) {
        _util.default.log("PageNumbers#pageClicked number " + number);
        this.set("currentPage", number);
        this.sendAction('action', number);
      },
      incrementPage: function incrementPage(num) {
        var currentPage = Number(this.get("currentPage")),
            totalPages = Number(this.get("totalPages"));

        if (currentPage === totalPages && num === 1) {
          return false;
        }
        if (currentPage <= 1 && num === -1) {
          return false;
        }
        this.incrementProperty('currentPage', num);

        var newPage = this.get('currentPage');
        this.sendAction('action', newPage);
      }
    }
  });
});