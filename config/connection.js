/* eslint-disable no-unused-vars */
// *****************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *************************************************

// Dependencies
const Sequelize = require('sequelize');
const mysql = require('mysql');

// Creates mySQL connection using Sequelize,
// the empty string in the third argument spot is our password.

let connection;
let sequelize;
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize('charity_db', 'root', '12261974', {
    host: '127.0.0.1',
    port: 3306,
    dialect: 'mysql',
    pool: {
      max: 5,
      min: 0,
      idle: 10000,
    },
    dialectOptions: {
      socketPath: "/var/run/mysqld/mysqld.sock"
  },
  });
}

// Exports the connection for other files to use
module.exports = sequelize;
