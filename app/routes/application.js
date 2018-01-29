import Ember from 'ember';
import config from '../config/environment';

export default Ember.Route.extend({

	beforeModel: function() {
		var isAuthenticated = null;
		var controller = this;
		if( localStorage !== null ) {
			isAuthenticated = localStorage.getItem(config.APP.LS);
		}
		if(!!isAuthenticated) {
			
			controller.set('isLogged', true);
			var localItem = JSON.parse(localStorage[config.APP.LS]);
			var userid = localItem.json.user_id;
			var token = localItem.json.access_token;
			var query = "user_id="+userid+"&token="+token;
			Ember.$.ajax({
				url: config.APP.REST_WSPREFIX+ "/"+config.APP.WSSUFIX+"/"+ 'sessions/validate_session?' + query,
				type: 'POST'
			}).then(function(apikey) {
			//	console.log('apikey --> ' + JSON.stringify(apikey));

				if( apikey.status === 201) {
					window.localStorage.setItem('isLogeado',true);
					controller.transitionTo('/home');
					//econsole.log('router application');
					controller.controllerFor('application').set('isLogged', true);
					

				} else {
					window.localStorage.setItem('isLogeado',false);
					Ember.$('.submenu').addClass('hidden');
					delete window.localStorage[config.APP.LS];
					controller.transitionTo('/login');
					controller.controllerFor('application').set('isLogged', true);
				}
			});
			
		} else {
			window.localStorage.setItem('isLogeado',false);
			this.transitionTo('/login');
		}
	},
	setupController: function(controller, model) {
		this._super(controller, model);
		if( localStorage.getItem(config.APP.LS) !== null ) {
			var localItem = JSON.parse(localStorage[config.APP.LS]);
			var userid = localItem.json.user_id;
			
			//controller.set('user', this.store.find('user', userid));
			this.store.find('user', userid).then(function(user) {
				controller.set('user',user);
			});
		}
	}
});
