define('smart-contrats/routes/application', ['exports', 'smart-contrats/config/environment'], function (exports, _environment) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = Ember.Route.extend({

		beforeModel: function beforeModel() {
			var isAuthenticated = null;
			var controller = this;
			if (localStorage !== null) {
				isAuthenticated = localStorage.getItem(_environment.default.APP.LS);
			}
			if (!!isAuthenticated) {

				controller.set('isLogged', true);
				var localItem = JSON.parse(localStorage[_environment.default.APP.LS]);
				var userid = localItem.json.user_id;
				var token = localItem.json.access_token;

				var query = "user_id=" + userid + "&token=" + token;
				Ember.$.ajax({
					url: _environment.default.APP.REST_WSPREFIX + "/" + _environment.default.APP.WSSUFIX + "/" + 'sessions/validate_session?' + query,
					type: 'POST'
				}).then(function (apikey) {
					console.log('apikey --> ' + JSON.stringify(apikey));

					if (apikey.status === 201) {
						window.localStorage.setItem('isLogeado', true);
						controller.transitionTo('/home');
						console.log('router application');
						controller.controllerFor('application').set('isLogged', true);
					} else {
						window.localStorage.setItem('isLogeado', false);
						$('.submenu').addClass('hidden');
						delete window.localStorage[_environment.default.APP.LS];
						controller.transitionTo('/login');
						controller.controllerFor('application').set('isLogged', true);
					}
				});
			} else {
				window.localStorage.setItem('isLogeado', false);
				this.transitionTo('/login');
			}
		},
		setupController: function setupController(controller, model) {
			this._super(controller, model);
			if (localStorage.getItem(_environment.default.APP.LS) !== null) {
				var localItem = JSON.parse(localStorage[_environment.default.APP.LS]);
				var userid = localItem.json.user_id;

				//controller.set('user', this.store.find('user', userid));
				this.store.find('user', userid).then(function (user) {
					controller.set('user', user);
				});
			}
		}
	});
});