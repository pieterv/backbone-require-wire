// Config options for the module
require.config( {

	baseUrl: 'js/todos/src',

	urlArgs: 'bust=' + ( new Date() ).getTime(), // Pop that cache

	paths: {
		text: '../../_libs/requirejs/plugins/text',
		'wire/domReady': '../../_libs/requirejs/plugins/domReady',
		hbs: '../../_libs/handlebars/hbs'
	},
	
	packages: [
		{ name: 'underscore', location: '../../_libs/underscore', main: 'underscore' },
		{ name: 'backbone',   location: '../../_libs/backbone',   main: 'backbone-amd' },
		{ name: 'jquery',     location: '../../_libs/jquery',     main: 'jquery' },
		{ name: 'when',       location: '../../_libs/when',       main: 'when' },
		{ name: 'wire',       location: '../../_libs/wire/wire',  main: '../wire' },
		//{ name: 'wire',       location: '../../_libs/wire_dev-080',  main: 'wire' },
		{ name: 'aop',        location: '../../_libs/aop',        main: 'aop' },
		{ name: 'json2',      location: '../../_libs/json2',      main: 'json2' },
		{ name: 'Handlebars', location: '../../_libs/handlebars', main: 'Handlebars' }
	]

} );