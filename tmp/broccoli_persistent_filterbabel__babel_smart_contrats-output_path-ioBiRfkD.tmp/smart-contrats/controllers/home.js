define('smart-contrats/controllers/home', ['exports'], function (exports) {
   'use strict';

   Object.defineProperty(exports, "__esModule", {
      value: true
   });
   exports.default = Ember.Controller.extend({

      actions: {
         goToEmpresas: function goToEmpresas() {
            this.transitionToRoute('/empresas');
         }, goToUsers: function goToUsers() {
            this.transitionToRoute('/users');
         }, goToPlaneacion: function goToPlaneacion() {

            this.transitionToRoute('/planeacion');
         }
      }
   });
});