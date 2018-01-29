/*global $:false */
import Ember from 'ember';
import config from '../config/environment';
//import LoginControllerMixin from 'simple-auth/mixins/login-controller-mixin';

export default Ember.Controller.extend({
	//authenticator: 'simple-auth-authenticator:oauth2-password-grant'
	message: '',
	needs: ['application','home'],
	username: '',
	contrasena: '',
	actions: {
		authenticate: function() {
			var identification = btoa(this.get('identification'));
			var password =  btoa(this.get('password'));
			var controller = this;
			//var query = 'grant_type=password&username='+identification+'&password='+ password+'&origen=true';
			
			delete window.localStorage[config.APP.LS];
			if( identification !== undefined && password !== undefined) {
				controller.set('username', identification);
				controller.set('contrasena', password);

/*
				Ember.$.ajax({
					url: config.APP.REST_WSPREFIX+"/"+config.APP.WSSUFIX +'/sessions/sign_in?' + query,
					type: 'POST'
				}).then(function(apikey) {
						console.log(apikey);
					if( !apikey.hasOwnProperty("error") ) {
						window.localStorage.setItem(config.APP.LS, JSON.stringify(apikey));

						controller.set('isLogged', true);
						controller.set('password', '');
						controller.get('identification', '');
						controller.transitionToRoute('/application');
						// TO GET USER
						//var localItem = JSON.parse(localStorage[config.APP.LS]);
						var userid = apikey.json.user_id;
						var isSelectedEstado= null;
						console.log (JSON.stringify(apikey.json));
						var role = apikey.json.role; 

					} else {
						$('.alert').removeClass('hidden');
						controller.set('message', 'Usuario y contraseña no coinciden.');
						setTimeout(function () { $('.alert').addClass('hidden'); },3000);
					}
				});
				*/  
				
				window.localStorage.setItem('isLogeado',true);
				controller.set('password', '');
				controller.get('identification', '');
				controller.transitionToRoute('/home');


			} else {
				window.localStorage.setItem('isLogeado',false);
				$('.submenu').addClass('hidden');
				this.set('message', 'Debes de llenar ambos campos.');
				setTimeout(function () { $('.alert').addClass('hidden'); },3000);
			}
		},
		goToSolicitud: function() {
			this.transitionToRoute('solicitud');
		}
	}
});
