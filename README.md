# Backbone, Require and Wire test project

A basic project based on the [TodoMVC project](http://addyosmani.github.com/todomvc/) setup to serve as a example and test bed for the use of base JavaScript libraries of [Backbone](http://backbonejs.org/), [Require](http://requirejs.org/) and [Wire](https://github.com/cujojs/wire).

## Installation

Install locally via git

    $ git clone https://github.com/pieter-vanderwerff/backbone-require-wire.git

This includes all needed libs.

You will need a local webserver to demo the project locally.

## Demo

To see the application running you have two options:

* Live: In your browser open [http://pieter-vanderwerff.github.com/backbone-require-wire/](http://pieter-vanderwerff.github.com/backbone-require-wire/)

* Local: In your browser open [http://localhost/backbone-require-wire/index.html](http://localhost/backbone-require-wire/index.html) or where ever you have it locally

By default the application will run in live mode, adding `#dev` to the end of the url will put it in dev mode, which means it will use all files rather than the built one.

## Test

To access the unit test suite:

* Live: In your browser open [http://pieter-vanderwerff.github.com/backbone-require-wire/js/todos/spec/SpecRunner.html](http://pieter-vanderwerff.github.com/backbone-require-wire/js/todos/spec/SpecRunner.html)

* Local: In your browser open [http://localhost/backbone-require-wire/js/todos/spec/SpecRunner.html](http://localhost/backbone-require-wire/js/todos/spec/SpecRunner.html) or where ever you have it locally

This always runs in dev mode.

## Build

To install the build system you will need access to `make` for osx it comes with xcode command line tools, Node and NPM are also needed. Once you have these simply navigate to the `js/todos/src` directory and run `make install`.

    $ cd js/todos/src
    $ make install

All builds can then be run from the `js/todos/src` directory and with `make` command

    $ cd js/todos/src
    $ make

## Libraries

This base application takes advantage of many libararies and plugins, here are the base ones:

* Backbone
* Underscore
* jQuery
* Handlebars
* Require Handlebars plugin
* Require
* r.js
* Wire
* When
* AOP
* Jasmine
* Sinon

See the [_libs/README](https://github.com/pieter-vanderwerff/backbone-require-wire/blob/master/js/_libs/README.md) for more info on each.