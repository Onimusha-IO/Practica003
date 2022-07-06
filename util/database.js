const pg = require("pg");
const { Pool } = pg;

require("dotenv").config({ path: "./util/.env" });

const pool = new Pool({
  user: process.env.USER,
  host: process.env.HOST,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  port: process.env.DB_PORT,
});

module.exports = pool;
