// Config options for the module
require.config( {

	baseUrl: 'js/todos/src',

	urlArgs: 'bust=' + ( new Date() ).getTime(), // Pop that cache

	// Handlebars config
	hbs: {
		templateExtension : 'hbs',
		// if disableI18n is `true` it won't load locales and the i18n helper
		// won't work as well.
		disableI18n : true
	},

	paths: {
		text: '../../_libs/requirejs/text',
		'wire/domReady': '../../_libs/requirejs/domReady',
		hbs: '../../_libs/handlebars/hbs'
	},
	
	packages: [
		{ name: 'underscore', location: '../../_libs/underscore', main: 'underscore' },
		{ name: 'backbone',   location: '../../_libs/backbone',   main: 'backbone' },
		{ name: 'jquery',     location: '../../_libs/jquery',     main: 'jquery' },
		{ name: 'when',       location: '../../_libs/when',       main: 'when' },
		{ name: 'wire',       location: '../../_libs/wire',       main: 'wire' },
		{ name: 'aop',        location: '../../_libs/aop',        main: 'aop' },
		{ name: 'json2',      location: '../../_libs/json2',      main: 'json2' },
		{ name: 'Handlebars', location: '../../_libs/handlebars', main: 'Handlebars' }
	]

} );