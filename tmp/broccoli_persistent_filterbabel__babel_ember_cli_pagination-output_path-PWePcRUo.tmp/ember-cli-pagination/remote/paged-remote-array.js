define('ember-cli-pagination/remote/paged-remote-array', ['exports', 'ember-cli-pagination/util', 'ember-cli-pagination/watch/lock-to-range', 'ember-cli-pagination/remote/mapping', 'ember-cli-pagination/page-mixin'], function (exports, _util, _lockToRange, _mapping, _pageMixin) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var ArrayProxyPromiseMixin = Ember.Mixin.create(Ember.PromiseProxyMixin, {
    then: function then(success, failure) {
      var promise = this.get('promise');
      var me = this;

      return promise.then(function () {
        success(me);
      }, failure);
    }
  });

  exports.default = Ember.ArrayProxy.extend(_pageMixin.default, Ember.Evented, ArrayProxyPromiseMixin, {
    page: 1,
    paramMapping: Ember.computed(function () {
      return {};
    }),
    contentUpdated: 0,

    init: function init() {
      var initCallback = this.get('initCallback');
      if (initCallback) {
        initCallback(this);
      }

      this.addArrayObserver({
        arrayWillChange: function arrayWillChange(me) {
          me.trigger('contentWillChange');
        },
        arrayDidChange: function arrayDidChange(me) {
          me.incrementProperty('contentUpdated');
          me.trigger('contentUpdated');
        }
      });

      try {
        this.get('promise');
      } catch (e) {
        this.set('promise', this.fetchContent());
      }
    },

    addParamMapping: function addParamMapping(key, mappedKey, mappingFunc) {
      var paramMapping = this.get('paramMapping') || {};
      if (mappingFunc) {
        paramMapping[key] = [mappedKey, mappingFunc];
      } else {
        paramMapping[key] = mappedKey;
      }
      this.set('paramMapping', paramMapping);
      this.incrementProperty('paramsForBackendCounter');
      //this.pageChanged();
    },

    addQueryParamMapping: function addQueryParamMapping(key, mappedKey, mappingFunc) {
      return this.addParamMapping(key, mappedKey, mappingFunc);
    },

    addMetaResponseMapping: function addMetaResponseMapping(key, mappedKey, mappingFunc) {
      return this.addParamMapping(key, mappedKey, mappingFunc);
    },

    paramsForBackend: Ember.computed('page', 'perPage', 'paramMapping', 'paramsForBackendCounter', 'zeroBasedIndex', function () {
      var page = this.getPage();
      if (this.get('zeroBasedIndex')) {
        page--;
      }

      var paramsObj = _mapping.QueryParamsForBackend.create({ page: page,
        perPage: this.getPerPage(),
        paramMapping: this.get('paramMapping') });
      var ops = paramsObj.make();

      // take the otherParams hash and add the values at the same level as page/perPage
      ops = _util.default.mergeHashes(ops, this.get('otherParams') || {});

      return ops;
    }),

    rawFindFromStore: function rawFindFromStore() {
      var store = this.get('store');
      var modelName = this.get('modelName');

      var ops = this.get('paramsForBackend');
      var res = store.query(modelName, ops);

      return res;
    },

    fetchContent: function fetchContent() {
      this.set("loading", true);
      var res = this.rawFindFromStore();
      this.incrementProperty("numRemoteCalls");
      var me = this;

      res.then(function (rows) {
        var metaObj = _mapping.ChangeMeta.create({ paramMapping: me.get('paramMapping'),
          meta: rows.meta,
          page: me.getPage(),
          perPage: me.getPerPage() });

        me.set("loading", false);
        return me.set("meta", metaObj.make());
      }, function (error) {
        _util.default.log("PagedRemoteArray#fetchContent error " + error);
        me.set("loading", false);
      });

      return res;
    },

    totalPages: Ember.computed.alias("meta.total_pages"),

    lastPage: null,

    pageChanged: Ember.observer("page", "perPage", function () {
      var page = this.get('page');
      var lastPage = this.get('lastPage');
      if (lastPage != page) {
        this.set('lastPage', page);
        this.set("promise", this.fetchContent());
      }
    }),

    lockToRange: function lockToRange() {
      _lockToRange.default.watch(this);
    },

    watchPage: Ember.observer('page', 'totalPages', function () {
      var page = this.get('page');
      var totalPages = this.get('totalPages');
      if (parseInt(totalPages) <= 0) {
        return;
      }

      this.trigger('pageChanged', page);

      if (page < 1 || page > totalPages) {
        this.trigger('invalidPage', { page: page, totalPages: totalPages, array: this });
      }
    }),

    setOtherParam: function setOtherParam(k, v) {
      if (!this.get('otherParams')) {
        this.set('otherParams', {});
      }

      this.get('otherParams')[k] = v;
      this.incrementProperty('paramsForBackendCounter');
      Ember.run.once(this, "pageChanged");
    }
  });
});