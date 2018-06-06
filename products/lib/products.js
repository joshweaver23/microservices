/**
 * Handles products CRUD
 * Created by josh on 6/5/18.
 */

'use strict';

const db = require( './db.js' );
const productsModel = require( '../models/products.js' );
const helpers = require( './helpers' );

class Products {
  constructor() {}

  create( event ) {
    // Connect to DB 
    return db.connect()
      .then( () => {
        // BUSINESS LOGIC GOES HERE 
        // HANDLE PRODUCTS CREATE
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
        // HANDLE PRODUCTS UPDATE
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

  delete( event ) {
    // Connect to DB 
    return db.connect()
      .then( () => {
        // BUSINESS LOGIC GOES HERE 
        // HANDLE PRODUCTS DELETE
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

  getOne( event ) {
    // Connect to DB 
    return db.connect()
      .then( () => {
        // BUSINESS LOGIC GOES HERE 
        // HANDLE PRODUCTS GETONE
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

  getAll( event ) {
    // Connect to DB 
    return db.connect()
      .then( () => {
        // BUSINESS LOGIC GOES HERE 
        // HANDLE PRODUCTS GETALL
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

module.exports = new Products();

// CREATE
// curl -d '{}' -H "Content-Type: application/json" -H "x-api-key: d41d8cd98f00b204e9800998ecf8427e" -X POST http://localhost:3000/snapcap/webapi/products/{productId}

// UPDATE
// curl -d '{}' -H "Content-Type: application/json" -H "x-api-key: d41d8cd98f00b204e9800998ecf8427e" -X UPDATE http://localhost:3000/snapcap/webapi/products/{productId}

// DELETE
// curl -H "Content-Type: application/json" -H "x-api-key: d41d8cd98f00b204e9800998ecf8427e" -X DELETE http://localhost:3000/snapcap/webapi/products/{productId}

// GETONE
// curl -H "Content-Type: application/json" -H "x-api-key: d41d8cd98f00b204e9800998ecf8427e" -X GET http://localhost:3000/snapcap/webapi/products/{productId}

// GETALL
// curl -H "Content-Type: application/json" -H "x-api-key: d41d8cd98f00b204e9800998ecf8427e" -X GET http://localhost:3000/snapcap/webapi/products/