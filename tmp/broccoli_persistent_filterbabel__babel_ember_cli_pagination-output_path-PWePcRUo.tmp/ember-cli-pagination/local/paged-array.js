define('ember-cli-pagination/local/paged-array', ['exports', 'ember-cli-pagination/util', 'ember-cli-pagination/divide-into-pages', 'ember-cli-pagination/watch/lock-to-range'], function (exports, _util, _divideIntoPages, _lockToRange) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.ArrayProxy.extend(Ember.Evented, {
    page: 1,
    perPage: 10,

    divideObj: function divideObj() {
      return _divideIntoPages.default.create({
        perPage: this.get('perPage'),
        all: this.get('content')
      });
    },

    arrangedContent: Ember.computed("content.[]", "page", "perPage", function () {
      return this.divideObj().objsForPage(this.get('page'));
    }),

    totalPages: Ember.computed("content.[]", "perPage", function () {
      return this.divideObj().totalPages();
    }),

    setPage: function setPage(page) {
      _util.default.log("setPage " + page);
      return this.set('page', page);
    },

    watchPage: Ember.observer('page', 'totalPages', function () {
      var page = this.get('page');
      var totalPages = this.get('totalPages');

      this.trigger('pageChanged', page);

      if (page < 1 || page > totalPages) {
        this.trigger('invalidPage', { page: page, totalPages: totalPages, array: this });
      }
    }),

    then: function then(success, failure) {
      var content = Ember.A(this.get('content'));
      var me = this;
      var promise;

      if (content.then) {
        promise = content.then(function () {
          success(me);
        }, failure);
      } else {
        promise = new Ember.RSVP.Promise(function (resolve) {
          resolve(success(me));
        });
      }

      return promise;
    },

    lockToRange: function lockToRange() {
      _lockToRange.default.watch(this);
    }
  });
});