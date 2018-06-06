'use strict';

// Require needed libraries and modules
const _ = require( 'lodash' );

const checkout = require( './lib/checkout' );
const snap = require( './lib/snap' );

module.exports.create = ( event, context, callback ) => {

  // make sure the request is legitimate
  if ( !snap.isSnap( event, context ) ) return callback( null, prepareResponse( 400, "Invalid request", {} ) ); // error, return 400

  return checkout.create( event )
    .then( result => {
      return callback( null, prepareResponse( 200, "Success", result ) ); // success
    } )
    .catch( err => {
      return errResponse( err, callback, 'checkout.create' );
    } );
};

// Prepare success response
function prepareResponse( statusCode, message, data ) {
  if ( !message ) message = "";
  if ( !data ) data = {}; // return empty object
  var response = {
    headers: {
      "Access-Control-Allow-Origin": "*" // Required for CORS support to work
    },
    statusCode: 200, //statusCode, always 200 for now so Josh can handle it, success flag determines success
    body: JSON.stringify( {
      success: ( statusCode == 200 ) ? 1 : 0,
      message: message,
      data: data,
      timestamp: new Date().toJSON().toString(), // returns UTC timestamp in the format YYYY-MM-DDTHH:MM:SS.sssZ
    } ),
  };
  console.log( "response= ", response );
  return response;
}
// Prepare error for response
function errResponse( err, callback, type ) {
  let message = err.toString();
  let data = {};
  if ( _.isObject( err ) ) {
    if ( err.hasOwnProperty( "data" ) ) data = err.data;
    if ( err.hasOwnProperty( "message" ) ) message = err.message;
  }
  console.log( `on ${type} catch, err= `, err );
  return callback( null, prepareResponse( 400, message, data ) ); // error, return 400
}