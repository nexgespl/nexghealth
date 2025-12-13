const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express(); // <-- YAHAN APP BANANA ZARURI HAI

app.use(cors());
app.use(express.json());

// 🔥 MySQL Connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mydatabase",
});

// Check MySQL Connection
db.connect((err) => {
  if (err) {
    console.log("MySQL Connection Error:", err);
  } else {
    console.log("MySQL Connected!");
  }
});

// 🔥 API Route — Data Save
app.post("/saveConsultation", (req, res) => {
  const { fullname, email, phone, service } = req.body;

  const query =
    "INSERT INTO consultations (fullname, email, phone, service) VALUES (?, ?, ?, ?)";

  db.query(query, [fullname, email, phone, service], (err) => {
    if (err) {
      res.json({ success: false, message: err });
    } else {
      res.json({ success: true, message: "Data Saved Successfully!" });
    }
  });
});

// 🔥 Server Start
app.listen(5000, () => {
  console.log("Server running on port 5000");
});

// const express = require("express");
// const mysql = require("mysql2");
// const cors = require("cors");

// const app = express();
// app.use(cors());
// app.use(express.json());

// // Database connection
// const db = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "myapp",
// });

// db.connect((err) => {
//   if (err) throw err;
//   console.log("MySQL Connected!");
// });

// // Route to store data
// app.post("/save", (req, res) => {
//   const { email, password } = req.body;

//   const sql = "INSERT INTO users (email, password) VALUES (?, ?)";
//   db.query(sql, [email, password], (err, result) => {
//     if (err) return res.json({ error: err });
//     return res.json({ message: "Data Saved Successfully!" });
//   });
// });

// app.listen(5000, () => {
//   console.log("Server running on port 5000");
// });
