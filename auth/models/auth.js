'use strict';
const db = require( '../lib/db.js' );

module.exports.fetch = ( userName, passWord ) => {
  return db.query( `DB QUERY GOES HERE`, [ userName, passWord ] );
}