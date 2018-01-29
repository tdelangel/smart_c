define('smart-contrats/controllers/application', ['exports', 'smart-contrats/config/environment'], function (exports, _environment) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});


	var applicationController = Ember.Controller.extend({
		needs: ['login'],
		isLogged: false,
		isSelectedEstado: false,
		esSuperAdmin: false,
		linkReporte: _environment.default.APP.LinkReport,
		actions: {
			goToEmpresas: function goToEmpresas() {
				this.transitionToRoute('/empresas');
			},


			goToHome: function goToHome() {
				this.transitionToRoute('/home');
			}, goToPlaneacion: function goToPlaneacion() {

				this.transitionToRoute('/planeacion');
			},
			goToUsers: function goToUsers() {
				this.transitionToRoute('/users');
			},
			logout: function logout() {
				var controller = this;
				var localItem = JSON.parse(localStorage[_environment.default.APP.LS]);
				localStorage.setItem('href', _environment.default.APP.REST_WSPREFIX + "/" + "api/v1");
				var token = localItem.json.access_token;
				console.log("apikey");
				var query = 'token=' + token;
				Ember.$.ajax({
					url: _environment.default.APP.REST_WSPREFIX + "/" + _environment.default.APP.WSSUFIX + '/sessions/sign_out?' + query,
					type: 'POST'
				}).then(function () {
					delete window.localStorage[_environment.default.APP.LS];
					controller.set('id_usuario', null);
					controller.transitionToRoute('/login');
					controller.set('isLogged', false);
					controller.set('esSuperAdmin', false);
				});
			}
		}
	});
	exports.default = applicationController;
});