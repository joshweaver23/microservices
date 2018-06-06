/**
 * Handles users CRUD
 * Created by josh on 6/5/18.
 */

'use strict';

const db = require( './db.js' );
const usersModel = require( '../models/users.js' );
const helpers = require( './helpers' );

class Users {
  constructor() {}

  create( event ) {
    // Connect to DB 
    return db.connect()
      .then( () => {
        // BUSINESS LOGIC GOES HERE 
        // HANDLE USERS CREATE
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
        // HANDLE USERS UPDATE
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
        // HANDLE USERS DELETE
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
        // HANDLE USERS GETONE
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

module.exports = new Users();

// CREATE
// curl -d '{}' -H "Content-Type: application/json" -H "x-api-key: d41d8cd98f00b204e9800998ecf8427e" -X POST http://localhost:3000/snapcap/webapi/users/{productId}

// UPDATE
// curl -d '{}' -H "Content-Type: application/json" -H "x-api-key: d41d8cd98f00b204e9800998ecf8427e" -X UPDATE http://localhost:3000/snapcap/webapi/users/{productId}

// DELETE
// curl -H "Content-Type: application/json" -H "x-api-key: d41d8cd98f00b204e9800998ecf8427e" -X DELETE http://localhost:3000/snapcap/webapi/users/{productId}

// GETONE
// curl -H "Content-Type: application/json" -H "x-api-key: d41d8cd98f00b204e9800998ecf8427e" -X GET http://localhost:3000/snapcap/webapi/users/{productId}