// const mongoose = require("mongoose");

// const connectDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URI);
//     console.log("MongoDB Connected");
//   } catch (err) {
//     console.error(err.message);
//     process.exit(1);
//   }
// };

// module.exports = connectDB;

// *******************************************************************

// const mysql = require("mysql2");

// const db = mysql.createPool({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "hospital_db",
//   waitForConnections: true,
//   connectionLimit: 10,
// });

// db.getConnection((err) => {
//   if (err) {
//     console.error("MySQL Connection Failed ❌", err);
//   } else {
//     console.log("MySQL Connected ✅");
//   }
// });

// module.exports = db;
// ************************************************************

// const mysql = require("mysql2");

// const db = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "mydatabase",
// });

// db.connect((err) => {
//   if (err) {
//     console.error("DB Connection Failed ❌", err);
//   } else {
//     console.log("MySQL Connected ✅");
//   }
// });

// module.exports = db;

const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mydatabase",
});

db.connect((err) => {
  if (err) {
    console.error("MySQL connection failed:", err);
  } else {
    console.log("MySQL Connected");
  }
});

module.exports = db;

