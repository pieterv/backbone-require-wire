# Backbone, Require and Wire test project

A basic project based on the [TodoMVC project](http://addyosmani.github.com/todomvc/) setup to serve as a example and test bed for the use of base JavaScript libraries of [Backbone](http://backbonejs.org/), [Require](http://requirejs.org/) and [Wire](https://github.com/cujojs/wire).

## Installation

Install locally via git

    $ git clone https://github.com/pieter-vanderwerff/backbone-require-wire.git

This includes all needed libs.

You will need a local webserver to demo the project locally.

## Demo


Local:
Open [http://localhost/backbone-require-wire/index.html](http://localhost/backbone-require-wire/index.html)


## Goals

* No global pollution
* Easy to use
* Require minimal “integration”
* Easy to embed seamlessly with any testing framework
* Easily fake any interface
* Ship with ready-to-use fakes for XMLHttpRequest, timers and more

## Develop?

Check out [todo.org](http://github.com/cjohansen/Sinon.JS/raw/1.0.0/todo.org) in the project repository

## Run the tests


### On Node

    $ node test/node/run.js

### In the browser, via JsTestDriver

* Install [Node.js](http://nodejs.org/) &amp; [NPM](http://npmjs.org/)
* `$ npm install buster-format`
* Install Java
* Download [jsTestDriver](http://code.google.com/p/js-test-driver/)
* Start the JsTestDriver server
  `$ java -jar JsTestDriver.jar --port 4224`
* Open a browser, go to [http://localhost:4224/](http://localhost:4224) and click 'Capture this Browser'
* run the tests
  `$ java -jar JsTestDriver.jar --tests all --reset`


### On Rhino

I've added a rudimentary setup for running the tests on Rhino with env.js (as
this is a fairly common test setup, Sinon should support it). The files are
located in test/rhino, but there are currently quite a few test failures. I
believe these are not all bugs - many are probably problems with the tests
running in Rhino. Run tests from the project root (load paths depend on it):

    $ java -jar js.jar -opt -1 test/rhino/run.js