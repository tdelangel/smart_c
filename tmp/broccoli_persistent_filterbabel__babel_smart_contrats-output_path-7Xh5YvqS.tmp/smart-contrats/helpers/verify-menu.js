define('smart-contrats/helpers/verify-menu', ['exports'], function (exports) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.verifyMenu = verifyMenu;
	function verifyMenu() /*, hash*/{
		var isLogeado = localStorage.getItem('isLogeado');
		if (isLogeado === "true") {
			Ember.$(".sub-navbar").fadeIn("slow");
		} else {
			Ember.$(".sub-navbar").fadeOut("slow");
		}
	}

	exports.default = Ember.Helper.helper(verifyMenu);
});