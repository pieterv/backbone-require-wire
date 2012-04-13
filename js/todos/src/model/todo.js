define( function( require ) {

  // Libraries
  var Backbone = require( 'backbone' ),
    _ = require( 'underscore' );

  // Todo Model
  return Backbone.Model.extend( {

    parse: function( attrs ) {
      var ownAttrs, attr;

      // If a model is parsed into attrs just grab it's attrs
      // The backbone localstorage adapter parses a model as its response, weird huh?
      if ( attrs.attributes ) {
        attrs = attrs.attributes;
      }

      // Remove all properties that aren't directly from this object
      // Wire adds some funky functions onto the prototype
      ownAttrs = {};
      for ( attr in attrs ) {
        if ( attrs.hasOwnProperty( attr ) ) {
          ownAttrs[ attr ] = attrs[ attr ];
        }
      }

      return ownAttrs;
    },

    // Default attributes for the todo
    defaults: {
      content: "empty todo...",
      done: false
    }

  } );

} );