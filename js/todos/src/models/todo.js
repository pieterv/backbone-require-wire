define( function( require ) {

  // Libraries
  var Backbone = require( 'backbone' );

  // Todo Model
  return Backbone.Model.extend({

    initialize: function( attrs, options ) {
      console.log( 'RECEIVED "todo_attributes":', attrs );
    },

    // Default attributes for the todo
    defaults: {
      content: "empty todo...",
      done: false
    }

  });

});