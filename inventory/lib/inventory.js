/**
 * Handles inventory CRUD
 * Created by josh on 6/5/18.
 */

'use strict';

const db = require( './db.js' );
const inventoryModel = require( '../models/inventory.js' );
const helpers = require( './helpers' );

class Inventory {
  constructor() {}

  getAll( event ) {
    // Connect to DB 
    return db.connect()
      .then( () => {
        // BUSINESS LOGIC GOES HERE 
        // HANDLE INVENTORY GETALL
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

  update( event ) {
    // Connect to DB 
    return db.connect()
      .then( () => {
        // BUSINESS LOGIC GOES HERE 
        // HANDLE INVENTORY UPDATE
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

module.exports = new Inventory();

// GETALL
// curl -H "Content-Type: application/json" -H "x-api-key: d41d8cd98f00b204e9800998ecf8427e" -X GET http://localhost:3000/snapcap/webapi/inventory/{productId}

// UPDATE
// curl -d '{}' -H "Content-Type: application/json" -H "x-api-key: d41d8cd98f00b204e9800998ecf8427e" -X UPDATE http://localhost:3000/snapcap/webapi/inventory/{productId}