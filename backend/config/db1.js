const mysql = require("mysql2");

const db1 = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "healthcare_rcm",
});

db1.connect((err) => {
  if (err) {
    console.error("MySQL connection failed:", err);
  } else {
    console.log("MySQL Connected");
  }
});
module.exports = db1;
