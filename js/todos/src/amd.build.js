( {
	
	"appDir": "./",
	"baseUrl": "./",
	"dir": "../build",

	// "optimize": "none", // Turn off uglify optimisations

	"inlineText": true, // Inlining ftw

	// kills unneeded plugin code on build
	"pragmasOnSave": {
		// Removes Handlebars.Parser code (used to compile template strings)
		// set it to `false` if you need template strings even after build
		"excludeHbsParser" : true,
		// kills the entire plugin set once it's built.
		"excludeHbs": true,
		// Remove i18nprecompile on build
		"excludeAfterBuild": true
	},

	// Set app locale (not used)
	"locale": "en_us",

	"urlArgs": "",

	// Use package settings in the init file
	"mainConfigFile": "amd.base.js",

	"paths": {

		// Wire
		"wire/build/amd/builder": "../../_libs/wire/rjs/builder", // Use our r.js builder plugin
		"wire/debug": "../../_libs/wire/plugin-base/live", // Override debug for built mode
		"wire/domReady": "../../_libs/requirejs/domReady",
		
		// Handlebars
		"hbs": "../../_libs/handlebars/hbs"
	},

	"modules": [
		{
			"name": "todos",
			"include": []
		}
	]


} )