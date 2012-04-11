// Config options for the module
require.config( {

	baseUrl: 'js/todos/src',

	urlArgs: 'bust=' + ( new Date() ).getTime(), // Pop that cache

	// New Test Libs
	paths: {
		text: '../../_libs/requirejs_107/text',
		'wire/domReady': '../../_libs/requirejs_107/domReady',
		hbs: '../../_libs/handlebars/hbs'
	},
	
	packages: [
		{ name: 'underscore', location: '../../_libs/underscore_132', main: 'underscore' },
		{ name: 'backbone',   location: '../../_libs/backbone_092',   main: 'backbone' },
		{ name: 'jquery',     location: '../../_libs/jquery_172',     main: 'jquery' },
		{ name: 'when',       location: '../../_libs/when_104',       main: 'when' },
		{ name: 'wire',       location: '../../_libs/wire_080-rc',    main: 'wire' },
		{ name: 'aop',        location: '../../_libs/aop_053',        main: 'aop' },
		{ name: 'json2',      location: '../../_libs/json2',          main: 'json2' },
		{ name: 'Handlebars', location: '../../_libs/handlebars',     main: 'Handlebars' }
	]


	// Old working libs
	// paths: {
	// 	text: '../../_libs/requirejs/plugins/text',
	// 	'wire/domReady': '../../_libs/requirejs/plugins/domReady',
	// 	hbs: '../../_libs/handlebars/hbs'
	// },
	
	// packages: [
	// 	{ name: 'underscore', location: '../../_libs/underscore', main: 'underscore' },
	// 	{ name: 'backbone',   location: '../../_libs/backbone',   main: 'backbone-amd' },
	// 	{ name: 'jquery',     location: '../../_libs/jquery',     main: 'jquery' },
	// 	{ name: 'when',       location: '../../_libs/when',       main: 'when' },
	// 	{ name: 'wire',       location: '../../_libs/wire/wire',  main: '../wire' },
	// 	{ name: 'aop',        location: '../../_libs/aop',        main: 'aop' },
	// 	{ name: 'json2',      location: '../../_libs/json2',      main: 'json2' },
	// 	{ name: 'Handlebars', location: '../../_libs/handlebars', main: 'Handlebars' }
	// ]

} );