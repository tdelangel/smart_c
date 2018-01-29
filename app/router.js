import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('login');
  this.route('home');


  this.route('users', function() {
  });
  this.route('empresas');
  this.route('planeacion');
  this.route('licitacion');
  this.route('adjudicacion', function() {
    this.route('new');
    this.route('edit', { path: '/edit/:id_empresa' });
  });
});
export default Router;
