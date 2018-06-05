// module to simplify and promisify the mysqljs usage

// default RDS credentials
const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_NAME = process.env.DB_NAME;


var mysql = require( 'mysql' );
var dbConnection;
var connected = false;

module.exports.query = function ( sqlQuery, sqlData ) {
  return new Promise( function ( resolve, reject ) {
    dbConnection.query( sqlQuery, sqlData, function ( err, result ) {
      if ( err ) {
        return reject( "MySQL ERROR (on query: " + sqlQuery + ") - " + JSON.stringify( err ) );
      }
      resolve( result );
    } );
  } );
};

module.exports.connect = function ( dbHost, dbUser, dbPass, dbName ) {
  // set default values if needed
  dbHost = dbHost || DB_HOST;
  dbUser = dbUser || DB_USER;
  dbPass = dbPass || DB_PASS;
  dbName = dbName || DB_NAME;

  dbConnection = mysql.createConnection( {
    host: dbHost,
    user: dbUser,
    password: dbPass,
    database: dbName
  } );

  dbConnection.on( 'error', function ( err ) {
    console.log( "Database ERROR - " + JSON.stringify( err ) );
    throw new Error( "Database ERROR - " + JSON.stringify( err ) );
  } );

  return new Promise( function ( resolve, reject ) {
    dbConnection.connect( function ( err ) {
      if ( err ) {
        return reject( "MySQL ERROR (on connecting) - " + JSON.stringify( err ) );
      }
      connected = true;
      resolve();
    } );
  } );
};

module.exports.disconnect = function () {
  return new Promise( function ( resolve, reject ) {
    if ( dbConnection ) {
      dbConnection.end( function ( err ) {
        dbConnection = false;
        connected = false;
        if ( err ) {
          return reject( "MySQL ERROR (on disconnecting) - " + JSON.stringify( err ) );
        }
        console.log( 'DB conneciton closed.' );
        resolve();
      } );
    } else { // no connection established, so just resolve.
      resolve();
    }
  } );
};

module.exports.isConnected = function () {
  return connected;
};

module.exports.escapeId = function ( value ) {
  return dbConnection.escapeId( value );
};
module.exports.escape = function ( value ) {
  return dbConnection.escape( value );
};