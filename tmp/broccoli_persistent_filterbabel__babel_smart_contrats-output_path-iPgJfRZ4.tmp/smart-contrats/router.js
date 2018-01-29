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

    this.route('users', function () {});
    this.route('empresas');
    this.route('planeacion');
    this.route('licitacion');
    this.route('adjudicacion', function () {
      this.route('new');
      this.route('edit', { path: '/edit/:id_empresa' });
    });
  });
  exports.default = Router;
});