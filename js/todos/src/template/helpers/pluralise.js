define( function( require ) {

	// Libs
	var Handlebars = require( 'Handlebars' );

	// Helper
	var helper = function( value, normal, plural ) {
			return ( +value !== 1 ) ? ( ( plural && !plural.hash ) ? plural : ( normal + 's' ) ) : normal;
		};

	Handlebars.registerHelper( 'pluralise', helper );
  
	return helper;
} );