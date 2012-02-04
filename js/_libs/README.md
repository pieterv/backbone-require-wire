# Module Libraries
Library deeds and such. __Maybe__ talk about when to upgrade or moves libs

* Version: Version number of the library
* Global: Global variables the library creates (some can be removed via noConflict calls)
* Dependencies: Any libraries this library depends on, they should be listed here as well
* Volojs-cmd: Some libraries have been imported and AMDified using volojs, this is the command to do that process. See http://volojs.org/ for details on installation and use.
* Fork: If the library is a fork of the original describe why its different (eg. adds AMD support)
* Repo: Url to repository holding the code.
* Docs: Url to documentation.

## Backbone
Backbone supplies structure to JavaScript-heavy applications by providing models with key-value binding and custom events, collections with a rich API of enumerable functions, views with declarative event handling, and connects it all to your existing application over a RESTful JSON interface.

* Version: 0.5.3
* Global: Backbone
* Dependencies: jQuery, Underscore
* Fork: adds AMD support
* Repo: https://github.com/amdjs/backbone
* Docs: http://backbonejs.org/

## Underscore
Underscore is a utility-belt library for JavaScript that provides a lot of the functional programming support.

* Volojs-cmd: `volo.js add -amd documentcloud/underscore exports=_`
* Version: 1.3.1
* Global: _
* Repo: https://github.com/documentcloud/underscore
* Docs: http://underscorejs.org/

## jQuery ($)
DOM stuff, everyone knows what jQuery does right?

* Version: 1.7.1
* Global: jQuery, $
* Repo: https://github.com/jquery/jquery
* Docs: http://docs.jquery.com/

## Require js
AMD loader

## Wire

## When

## AOP
Aspect orientated programming
