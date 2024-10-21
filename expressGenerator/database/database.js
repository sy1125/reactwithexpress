const mysql = require("mysql2/promise");
const dbconfig = require("../config/config.json");

const pool = mysql.createPool({
  host: dbconfig.host,
  user: dbconfig.user,
  password: dbconfig.password,
  database: dbconfig.database,
  waitForConnections: true,
  connectionLimit: 50,
  queueLimit: 0,
});

module.exports = pool;

// const { Sequelize } = require("sequelize");
// const dbconfig = require("../config/config.json");

// const sequelize = new Sequelize(
//   dbconfig.database,
//   dbconfig.user,
//   dbconfig.password,
//   {
//     host: dbconfig.host,
//     dialect: "mysql",
//     pool: {
//       max: 50,
//       min: 0,
//       acquire: 30000,
//       idle: 10000,
//     },
//     logging: false,
//   }
// );

// module.exports = sequelize;
