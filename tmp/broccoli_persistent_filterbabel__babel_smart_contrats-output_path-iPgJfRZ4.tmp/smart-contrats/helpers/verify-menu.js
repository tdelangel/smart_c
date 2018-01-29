define('smart-contrats/helpers/verify-menu', ['exports'], function (exports) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.verifyMenu = verifyMenu;
	function verifyMenu() /*, hash*/{
		console.log('verificando usuario');
		var isLogeado = localStorage.getItem('isLogeado');
		console.log('Es logeado --->' + isLogeado);
		if (isLogeado === "true") {
			// aparece menu
			$(".sub-navbar").fadeIn("slow");
		} else {
			// oculta menu

			$(".sub-navbar").fadeOut("slow");
		}
	}

	exports.default = Ember.Helper.helper(verifyMenu);
});