define('smart-contrats/router', ['exports', 'smart-contrats/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var Router = Ember.Router.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });

  Router.map(function () {
    this.route('login');
    this.route('home');

    /*this.resource('empresas', function() {
       this.route('new');
       this.route('show', { path: '/show/:id_empresa' });
       this.route('edit', { path: '/edit/:id_empresa' });
       this.route('puntos', { path: '/puntos/:id_empresa' });
     });*/
    this.route('users', function () {});
    this.route('empresas');
    this.route('planeacion');
  });
  exports.default = Router;
});