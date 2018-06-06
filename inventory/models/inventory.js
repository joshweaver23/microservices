'use strict';
const db = require( '../lib/db.js' );

module.exports.getAll = () => {
  return db.query( `DB QUERY GOES HERE`, [] );
}

module.exports.update = () => {
  return db.query( `DB QUERY GOES HERE`, [] );
}