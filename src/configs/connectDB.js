import mysql from "mysql2";

// create the connection to database
const connectionPool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "nodejsbasic",
});

export default connectionPool;
