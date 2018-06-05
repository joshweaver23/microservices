/**
 * Common Helper Functions
 * Created by josh on 11/27/17.
 */

'use strict';
const db = require( './snapdb.js' );
const _ = require( 'lodash' );

const validateInput = ( event ) => {
  var body = {};
  // must have body and pathParameters within the event
  if ( ( _.isObject( event ) ) && ( "body" in event ) && ( event.body ) && ( "pathParameters" in event ) && ( "requestContext" in event ) && ( "identity" in event.requestContext ) ) {
    body = JSON.parse( event.body );
  } else {
    throw new Error( "Missing input params." )
  }
  return body;
}

const validateUser = ( user ) => {
  if ( !( ( _.isString( user.name ) ) && ( user.name.length < 65 ) && ( _.isNumber( user.rotationOrder ) ) && ( _.isNumber( user.active ) ) && ( user.active.length !== 1 ) ) ) {
    throw new Error( "Invalid input params." );
  }
}

const errorHandler = ( err ) => {
  console.log( "on Applications.create catch, err= ", err );
  return Promise.resolve()
    .then( () => {
      if ( db.isConnected() ) return db.disconnect(); // disconnect if needed
      else return Promise.resolve();
    } )
    .then( () => {
      // raise the error again to be caught by the handler - same if already prepared, or a generic one if not
      if ( ( _.isObject( err ) ) && ( err.hasOwnProperty( "data" ) ) ) throw ( err );
      else throw new Error( err || "Invalid input params or internal server error" );
    } );
}

module.exports.validateInput = validateInput;
module.exports.errorHandler = errorHandler;
module.exports.validateUser = validateUser;