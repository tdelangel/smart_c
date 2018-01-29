define('ember-cli-pagination/validate', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var Validate = Ember.Object.extend();

  Validate.reopenClass({
    internalErrors: [],

    internalError: function internalError(str, obj) {
      this.internalErrors.push(str);
      Ember.Logger.warn(str);
      if (obj) {
        Ember.Logger.warn(obj);
      }
    },

    getLastInternalError: function getLastInternalError() {
      return this.internalErrors[this.internalErrors.length - 1];
    }
  });

  exports.default = Validate;
});