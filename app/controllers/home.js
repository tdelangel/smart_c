import Ember from 'ember';
export default Ember.Controller.extend({
  actions:{
       goToEmpresas: function() {
        this.transitionToRoute('/empresas');
      },goToUsers: function() {
       this.transitionToRoute('/users');
     },goToPlaneacion: function() {

      this.transitionToRoute('/planeacion');
    }
  }
});
