define('smart-contrats/routes/login', ['exports'], function (exports) {
   'use strict';

   Object.defineProperty(exports, "__esModule", {
      value: true
   });
   exports.default = Ember.Route.extend({
      resetController: function resetController(controller, isExiting, transition) {
         if (isExiting) {}
      }
   });
});