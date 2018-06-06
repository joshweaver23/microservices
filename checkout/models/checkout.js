'use strict';
const db = require( '../lib/db.js' );

module.exports.fetch = () => {
  return db.query( `DB QUERY GOES HERE`, [] );
}