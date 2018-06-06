/**
 * Handles checkout CRUD
 * Created by josh on 6/5/18.
 */

'use strict';

const db = require( './db.js' );
const checkoutModel = require( '../models/checkout.js' );
const helpers = require( './helpers' );

class Checkout {
  constructor() {}

  create( event ) {
    // Connect to DB 
    return db.connect()
      .then( () => {
        // BUSINESS LOGIC GOES HERE 
        // HANDLE CHECKOUT 
        // LOG USER LOGIN DETAILS
      } )
      .then( res => {
        response = res;
      } )
      .then( () => {
        // Disconnect from DB
        return db.disconnect();
      } )
      .then( () => {
        // Return Response
        return response;
      } )
      .catch( err => helpers.errorHandler( err ) );
  }

}

module.exports = new Checkout();

// CREATE
// curl -d '{}' -H "Content-Type: application/json" -H "x-api-key: d41d8cd98f00b204e9800998ecf8427e" -X POST http://localhost:3000/snapcap/webapi/checkout