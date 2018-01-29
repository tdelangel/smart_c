import Ember from 'ember';

export function verifyMenu(/*, hash*/) {
	let isLogeado =  localStorage.getItem('isLogeado');
	if (isLogeado === "true"){
		Ember.$( ".sub-navbar" ).fadeIn( "slow" );
	}
	else {
		Ember.$( ".sub-navbar" ).fadeOut( "slow" );
	}

}

export default Ember.Helper.helper(verifyMenu);
