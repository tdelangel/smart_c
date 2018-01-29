define('ember-cli-pagination/remote/route-mixin', ['exports', 'ember-cli-pagination/remote/paged-remote-array', 'ember-cli-pagination/util'], function (exports, _pagedRemoteArray, _util) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Mixin.create({
    perPage: 10,
    startingPage: 1,

    model: function model(params) {
      return this.findPaged(this._findModelName(this.get('routeName')), params);
    },

    _findModelName: function _findModelName(routeName) {
      return Ember.String.singularize(Ember.String.camelize(routeName));
    },

    findPaged: function findPaged(name, params, options, callback) {
      var opt = options || {};
      var mainOps = {
        page: params.page || this.get('startingPage'),
        perPage: params.perPage || this.get('perPage'),
        modelName: name,
        zeroBasedIndex: opt.zeroBasedIndex || false,
        store: this.get('store')
      };

      if (params.paramMapping) {
        mainOps.paramMapping = params.paramMapping;
      }

      var otherOps = _util.default.paramsOtherThan(params, ["page", "perPage", "paramMapping", "zeroBasedIndex"]);
      mainOps.otherParams = otherOps;

      mainOps.initCallback = callback;

      return _pagedRemoteArray.default.create(mainOps);
    }
  });
});