define( function( require ) {

  // Libraries
  var Backbone = require( 'backbone' );

  // Todo Model
  return Backbone.Model.extend({

    // Default attributes for the todo
    defaults: {
      content: "empty todo...",
      done: false
    }

  });

});