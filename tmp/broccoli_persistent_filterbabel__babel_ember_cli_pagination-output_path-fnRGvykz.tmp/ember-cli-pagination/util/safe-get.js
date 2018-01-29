define('ember-cli-pagination/util/safe-get', ['exports', 'ember-cli-pagination/validate', 'ember-cli-pagination/util'], function (exports, _validate, _util) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Mixin.create({
    getInt: function getInt(prop) {
      var raw = this.get(prop);
      if (raw === 0 || raw === "0") {
        // do nothing
      } else if (_util.default.isBlank(raw)) {
        _validate.default.internalError("no int for " + prop + " val is " + raw);
      }
      return parseInt(raw);
    }
  });
});