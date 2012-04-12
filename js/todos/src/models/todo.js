define( function( require ) {

  // Libraries
  var Backbone = require( 'backbone' ),
    _ = require( 'underscore' );

  // Todo Model
  return Backbone.Model.extend( {

    parse: function( attrs ) {
      var ownAttrs, attr;

      ownAttrs = {};
      for( attr in attrs ) {
        if( attrs.hasOwnProperty( attr ) ) {
          ownAttrs[attr] = attrs[attr];
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