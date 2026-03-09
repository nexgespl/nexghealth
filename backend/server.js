// const express = require("express");
// const mysql = require("mysql2");
// const cors = require("cors");

// const app = express(); // <-- YAHAN APP BANANA ZARURI HAI

// app.use(cors());
// app.use(express.json());

// // 🔥 MySQL Connection
// const db = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "mydatabase",
// });

// // Check MySQL Connection
// db.connect((err) => {
//   if (err) {
//     console.log("MySQL Connection Error:", err);
//   } else {
//     console.log("MySQL Connected!");
//   }
// });

// // 🔥 API Route — Data Save
// app.post("/saveConsultation", (req, res) => {
//   const { fullname, email, phone, service } = req.body;

//   const query =
//     "INSERT INTO consultations (fullname, email, phone, service) VALUES (?, ?, ?, ?)";

//   db.query(query, [fullname, email, phone, service], (err) => {
//     if (err) {
//       res.json({ success: false, message: err });
//     } else {
//       res.json({ success: true, message: "Data Saved Successfully!" });
//     }
//   });
// });

// // 🔥 Server Start
// app.listen(5000, () => {
//   console.log("Server running on port 5000");
// });

// ******************************************************************
// const express = require("express");
// const mysql = require("mysql2");
// const cors = require("cors");
// const jwt = require("jsonwebtoken");
// const bcrypt = require("bcryptjs");
// require("dotenv").config();

// const app = express();

// /* ================= MIDDLEWARE ================= */
// app.use(cors());
// app.use(express.json());

// /* ================= MYSQL CONNECTION ================= */
// const db = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "mydatabase",
// });

// db.connect((err) => {
//   if (err) {
//     console.error("❌ MySQL Connection Error:", err);
//   } else {
//     console.log("✅ MySQL Connected!");
//   }
// });

// /* ================= JWT SECRET ================= */
// // ⚠️ Later .env me shift karna
// const JWT_SECRET = "doctor_secret_key_123";

// /* ==================================================
//    📌 CONSULTATION API (EXISTING)
// ================================================== */
// app.post("/saveConsultation", (req, res) => {
//   const { fullname, email, phone, service } = req.body;

//   const sql =
//     "INSERT INTO consultations (fullname, email, phone, service) VALUES (?, ?, ?, ?)";

//   db.query(sql, [fullname, email, phone, service], (err) => {
//     if (err) {
//       return res.status(500).json({ success: false, message: "DB Error" });
//     }

//     res.json({
//       success: true,
//       message: "Data Saved Successfully!",
//     });
//   });
// });

// /* ==================================================
//    🔐 DOCTOR SIGNUP API
// ================================================== */
// app.post("/api/doctor/signup", async (req, res) => {
//   const { name, email, phone, password } = req.body;

//   if (!name || !email || !phone || !password) {
//     return res.status(400).json({ message: "All fields required" });
//   }

//   try {
//     const hashedPassword = await bcrypt.hash(password, 10);

//     const sql =
//       "INSERT INTO doctors (name, email, phone, password) VALUES (?, ?, ?, ?)";

//     db.query(sql, [name, email, phone, hashedPassword], (err) => {
//       if (err) {
//         return res.status(409).json({ message: "Doctor already exists" });
//       }

//       const token = jwt.sign({ email }, JWT_SECRET, {
//         expiresIn: "1d",
//       });

//       res.json({
//         success: true,
//         token,
//         message: "Doctor registered successfully",
//       });
//     });
//   } catch (error) {
//     res.status(500).json({ message: "Signup failed" });
//   }
// });

// /* ==================================================
//    🔐 DOCTOR LOGIN API
// ================================================== */
// // app.post("/api/doctor/login", (req, res) => {
// //   const { emailOrPhone, password } = req.body;

// //   if (!emailOrPhone || !password) {
// //     return res.status(400).json({ message: "All fields required" });
// //   }

// //   const sql = "SELECT * FROM doctors WHERE email = ? OR phone = ? LIMIT 1";

// //   db.query(sql, [emailOrPhone, emailOrPhone], async (err, result) => {
// //     if (err) {
// //       return res.status(500).json({ message: "DB Error" });
// //     }

// //     if (result.length === 0) {
// //       return res.status(401).json({ message: "Doctor not found" });
// //     }

// //     const doctor = result[0];

// //     const isMatch = await bcrypt.compare(password, doctor.password);
// //     if (!isMatch) {
// //       return res.status(401).json({ message: "Invalid password" });
// //     }

// //     const token = jwt.sign(
// //       { id: doctor.id, email: doctor.email },
// //       JWT_SECRET,
// //       { expiresIn: "1d" }
// //     );

// //     res.json({
// //       success: true,
// //       token,
// //       doctor: {
// //         id: doctor.id,
// //         name: doctor.name,
// //         email: doctor.email,
// //       },
// //     });
// //   });
// // });

// app.post("/api/doctor/login", (req, res) => {
//   const { emailOrPhone, password } = req.body;

//   console.log("LOGIN BODY:", req.body);

//   if (!emailOrPhone || !password) {
//     return res.status(400).json({
//       message: "Email/Phone and Password required",
//     });
//   }

//   const sql = "SELECT * FROM doctors WHERE email = ? OR phone = ? LIMIT 1";

//   db.query(sql, [emailOrPhone, emailOrPhone], async (err, result) => {
//     if (err) {
//       return res.status(500).json({ message: "DB Error" });
//     }

//     if (result.length === 0) {
//       return res.status(401).json({ message: "Doctor not found" });
//     }

//     const doctor = result[0];
//     const isMatch = await bcrypt.compare(password, doctor.password);

//     if (!isMatch) {
//       return res.status(401).json({ message: "Invalid password" });
//     }

//     const token = jwt.sign({ id: doctor.id, email: doctor.email }, JWT_SECRET, {
//       expiresIn: "1d",
//     });

//     res.json({
//       success: true,
//       token,
//     });
//   });
// });

// /* ==================================================
//    🔐 JWT MIDDLEWARE (PROTECTED ROUTES)
// ================================================== */
// const verifyDoctor = (req, res, next) => {
//   const authHeader = req.headers.authorization;

//   if (!authHeader) {
//     return res.status(403).json({ message: "Token missing" });
//   }

//   const token = authHeader.split(" ")[1];

//   jwt.verify(token, JWT_SECRET, (err, decoded) => {
//     if (err) {
//       return res.status(401).json({ message: "Invalid token" });
//     }

//     req.doctor = decoded;
//     next();
//   });
// };

// /* ==================================================
//    🏥 DOCTOR DASHBOARD (PROTECTED)
// ================================================== */
// app.get("/api/doctor/dashboard", verifyDoctor, (req, res) => {
//   res.json({
//     success: true,
//     message: "Welcome to Doctor Dashboard",
//     doctor: req.doctor,
//   });
// });

// /* ================= SERVER START ================= */
// const PORT = 5000;
// app.listen(PORT, () => {
//   console.log(`🚀 Server running on port ${PORT}`);
// });

// ***************************************************************

// const express = require("express");
// const mysql = require("mysql2");
// const cors = require("cors");
// const jwt = require("jsonwebtoken");
// const bcrypt = require("bcryptjs");
// require("dotenv").config();

// const app = express();

// /* ================= MIDDLEWARE ================= */
// app.use(cors());
// app.use(express.json());

// /* ================= MYSQL CONNECTION ================= */
// const db = mysql.createPool({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "mydatabase",
//   waitForConnections: true,
//   connectionLimit: 10,
// });

// db.getConnection((err) => {
//   if (err) {
//     console.error("❌ MySQL Connection Error:", err);
//   } else {
//     console.log("✅ MySQL Connected!");
//   }
// });

// /* ================= JWT SECRET ================= */
// const JWT_SECRET = process.env.JWT_SECRET || "doctor_secret_key_123";

// /* ==================================================
//    📌 CONSULTATION API
// ================================================== */
// app.post("/saveConsultation", (req, res) => {
//   const { fullname, email, phone, service } = req.body;

//   const sql =
//     "INSERT INTO consultations (fullname, email, phone, service) VALUES (?, ?, ?, ?)";

//   db.query(sql, [fullname, email, phone, service], (err) => {
//     if (err) {
//       return res.status(500).json({
//         success: false,
//         message: "DB Error",
//       });
//     }

//     res.json({
//       success: true,
//       message: "Data Saved Successfully!",
//     });
//   });
// });

// /* ==================================================
//    🔐 DOCTOR SIGNUP
// ================================================== */
// app.post("/api/doctor/signup", async (req, res) => {
//   const { name, email, phone, password } = req.body;

//   if (!name || !email || !phone || !password) {
//     return res.status(400).json({ message: "All fields required" });
//   }

//   try {
//     const hashedPassword = await bcrypt.hash(password, 10);

//     const sql =
//       "INSERT INTO doctors (name, email, phone, password) VALUES (?, ?, ?, ?)";

//     db.query(sql, [name, email, phone, hashedPassword], (err) => {
//       if (err) {
//         return res.status(409).json({
//           message: "Doctor already exists",
//         });
//       }

//       const token = jwt.sign({ email }, JWT_SECRET, {
//         expiresIn: "1d",
//       });

//       res.json({
//         success: true,
//         token,
//         message: "Doctor registered successfully",
//       });
//     });
//   } catch (error) {
//     res.status(500).json({ message: "Signup failed" });
//   }
// });

// /* ==================================================
//    🔐 DOCTOR LOGIN (EMAIL OR PHONE)
// ================================================== */
// app.post("/api/doctor/login", (req, res) => {
//   const { emailOrPhone, password } = req.body;

//   console.log("LOGIN BODY:", req.body);

//   if (!emailOrPhone || !password) {
//     return res.status(400).json({
//       message: "Email/Phone and Password required",
//     });
//   }

//   const sql = "SELECT * FROM doctors WHERE email = ? OR phone = ? LIMIT 1";

//   db.query(sql, [emailOrPhone, emailOrPhone], async (err, result) => {
//     if (err) {
//       return res.status(500).json({ message: "DB Error" });
//     }

//     if (result.length === 0) {
//       return res.status(401).json({ message: "Doctor not found" });
//     }

//     const doctor = result[0];
//     const isMatch = await bcrypt.compare(password, doctor.password);

//     if (!isMatch) {
//       return res.status(401).json({ message: "Invalid password" });
//     }

//     const token = jwt.sign({ id: doctor.id, email: doctor.email }, JWT_SECRET, {
//       expiresIn: "1d",
//     });

//     res.json({
//       success: true,
//       token,
//       doctor: {
//         id: doctor.id,
//         name: doctor.name,
//         email: doctor.email,
//       },
//     });
//   });
// });

// /* ==================================================
//    🔐 JWT MIDDLEWARE
// ================================================== */
// const verifyDoctor = (req, res, next) => {
//   const authHeader = req.headers.authorization;

//   if (!authHeader) {
//     return res.status(403).json({ message: "Token missing" });
//   }

//   const token = authHeader.split(" ")[1];

//   jwt.verify(token, JWT_SECRET, (err, decoded) => {
//     if (err) {
//       return res.status(401).json({ message: "Invalid token" });
//     }

//     req.doctor = decoded;
//     next();
//   });
// };

// /* ==================================================
//    🏥 DOCTOR DASHBOARD (PROTECTED)
// ================================================== */
// app.get("/api/doctor/dashboard", verifyDoctor, (req, res) => {
//   res.json({
//     success: true,
//     message: "Welcome to Doctor Dashboard",
//     doctor: req.doctor,
//   });
// });

// /* ================= SERVER START ================= */
// const PORT = 5000;
// app.listen(PORT, () => {
//   console.log(`🚀 Server running on port ${PORT}`);
// });

// /* ==================================================
//    📊 PROVIDERS API
// ================================================== */
// app.get("/api/providers", (req, res) => {
//   const sql = "SELECT * FROM providers";

//   db.query(sql, (err, results) => {
//     if (err) {
//       console.error("DB ERROR:", err);
//       return res.status(500).json({ message: "DB Error" });
//     }

//     res.json(results);
//   });
// });

/* --------------------------------------------------------------- */

// const express = require("express");
// const mysql = require("mysql2");
// const cors = require("cors");
// const jwt = require("jsonwebtoken");
// const bcrypt = require("bcryptjs");
// require("dotenv").config();

// const app = express();

// /* ================= MIDDLEWARE ================= */
// app.use(cors());
// app.use(express.json());

// /* ================= MYSQL CONNECTION ================= */
// const db = mysql.createPool({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "mydatabase",
//   waitForConnections: true,
//   connectionLimit: 10,
// });

// db.getConnection((err) => {
//   if (err) {
//     console.error("❌ MySQL Connection Error:", err);
//   } else {
//     console.log("✅ MySQL Connected!");
//   }
// });

// /* ================= JWT SECRET ================= */
// const JWT_SECRET = process.env.JWT_SECRET || "doctor_secret_key_123";

// /* ==================================================
//    📊 PROVIDERS API (🔥 MAIN FIX)
// ================================================== */
// app.get("/api/providers", (req, res) => {
//   const sql = "SELECT * FROM providers";

//   db.query(sql, (err, results) => {
//     if (err) {
//       console.error("❌ Providers DB Error:", err);
//       return res.status(500).json({ message: "DB Error" });
//     }

//     console.log("✅ Providers Data Sent:", results.length);
//     res.json(results);
//   });
// });

// /* ==================================================
//    📌 CONSULTATION API
// ================================================== */
// app.post("/saveConsultation", (req, res) => {
//   const { fullname, email, phone, service } = req.body;

//   const sql =
//     "INSERT INTO consultations (fullname, email, phone, service) VALUES (?, ?, ?, ?)";

//   db.query(sql, [fullname, email, phone, service], (err) => {
//     if (err) {
//       return res.status(500).json({ success: false, message: "DB Error" });
//     }

//     res.json({ success: true, message: "Data Saved Successfully!" });
//   });
// });

// /* ==================================================
//    🔐 DOCTOR SIGNUP
// ================================================== */
// app.post("/api/doctor/signup", async (req, res) => {
//   const { name, email, phone, password } = req.body;

//   if (!name || !email || !phone || !password) {
//     return res.status(400).json({ message: "All fields required" });
//   }

//   try {
//     const hashedPassword = await bcrypt.hash(password, 10);

//     const sql =
//       "INSERT INTO doctors (name, email, phone, password) VALUES (?, ?, ?, ?)";

//     db.query(sql, [name, email, phone, hashedPassword], (err) => {
//       if (err) {
//         return res.status(409).json({ message: "Doctor already exists" });
//       }

//       const token = jwt.sign({ email }, JWT_SECRET, { expiresIn: "1d" });

//       res.json({
//         success: true,
//         token,
//         message: "Doctor registered successfully",
//       });
//     });
//   } catch {
//     res.status(500).json({ message: "Signup failed" });
//   }
// });

// /* ==================================================
//    🔐 DOCTOR LOGIN
// ================================================== */
// app.post("/api/doctor/login", (req, res) => {
//   const { emailOrPhone, password } = req.body;

//   const sql = "SELECT * FROM doctors WHERE email = ? OR phone = ? LIMIT 1";

//   db.query(sql, [emailOrPhone, emailOrPhone], async (err, result) => {
//     if (err) return res.status(500).json({ message: "DB Error" });
//     if (result.length === 0)
//       return res.status(401).json({ message: "Doctor not found" });

//     const doctor = result[0];
//     const isMatch = await bcrypt.compare(password, doctor.password);
//     if (!isMatch) return res.status(401).json({ message: "Invalid password" });

//     const token = jwt.sign({ id: doctor.id, email: doctor.email }, JWT_SECRET, {
//       expiresIn: "1d",
//     });

//     res.json({
//       success: true,
//       token,
//       doctor: {
//         id: doctor.id,
//         name: doctor.name,
//         email: doctor.email,
//       },
//     });
//   });
// });

// /* ================= SERVER START ================= */
// const PORT = 3001; // ✅ FRONTEND MATCH
// app.listen(PORT, () => {
//   console.log(`🚀 Server running on port ${PORT}`);
// });

/* -------------------------------------------------------------------- */

// const express = require("express");
// const mysql = require("mysql2");
// const cors = require("cors");
// const jwt = require("jsonwebtoken");
// const bcrypt = require("bcryptjs");
// require("dotenv").config();

// const app = express();

// /* ================= MIDDLEWARE ================= */
// app.use(cors());
// app.use(express.json());

// /* ================= MYSQL CONNECTION ================= */
// const db = mysql.createPool({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "mydatabase",
//   waitForConnections: true,
//   connectionLimit: 10,
// });

// db.getConnection((err) => {
//   if (err) {
//     console.error("❌ MySQL Connection Error:", err);
//   } else {
//     console.log("✅ MySQL Connected!");
//   }
// });

// /* ================= JWT SECRET ================= */
// const JWT_SECRET = process.env.JWT_SECRET || "doctor_secret_key_123";

// /* ==================================================
//    📊 PROVIDERS DASHBOARD API
//    🔥 UPDATED: MULTI-TABLE JOIN (MAIN FIX)
//    👉 Reason: Frontend ko name, state, specialty,
//       payer, status blank aa raha tha
// ================================================== */
// // GET: Fetch all providers with their latest status
// app.get("/api/providers", (req, res) => {
//   const sql = `
// SELECT
// p.npi,
// COALESCE(p.org_name, CONCAT(p.first_name, ' ', p.last_name)) AS name,
// p.credential,
// pa.state,
// pt.specialty,
// cs.payer,
// cs.status AS credentialing_status,
// cs.expiry_date
// FROM providers p
// LEFT JOIN provider_addresses pa ON p.npi = pa.npi AND pa.address_purpose =
// 'LOCATION'
// LEFT JOIN provider_taxonomies pt ON p.npi = pt.npi AND pt.is_primary = 1
// LEFT JOIN credentialing_status cs ON p.npi = cs.npi
// `;
//   db.query(sql, (err, results) => {
//     if (err) return res.status(500).send(err);
//     res.json(results);
//   });
// });
// // POST: Update Credentialing Status
// app.post("/api/update-status", (req, res) => {
//   const { npi, payer, status } = req.body;
//   const sql =
//     "UPDATE credentialing_status SET status = ? WHERE npi = ? AND payer = ?";
//   db.query(sql, [status, npi, payer], (err, result) => {
//     if (err) return res.status(500).send(err);
//     res.send("Status Updated");
//   });
// });
// app.listen(3001, () => {
//   console.log("RCM Server running on port 3001");
// });

// /* ==================================================
//    📌 CONSULTATION API (UNCHANGED)
// ================================================== */
// app.post("/saveConsultation", (req, res) => {
//   const { fullname, email, phone, service } = req.body;

//   const sql =
//     "INSERT INTO consultations (fullname, email, phone, service) VALUES (?, ?, ?, ?)";

//   db.query(sql, [fullname, email, phone, service], (err) => {
//     if (err) {
//       return res.status(500).json({ success: false, message: "DB Error" });
//     }

//     res.json({
//       success: true,
//       message: "Data Saved Successfully!",
//     });
//   });
// });

// /* ==================================================
//    🔐 DOCTOR SIGNUP (UNCHANGED)
// ================================================== */
// app.post("/api/doctor/signup", async (req, res) => {
//   const { name, email, phone, password } = req.body;

//   if (!name || !email || !phone || !password) {
//     return res.status(400).json({ message: "All fields required" });
//   }

//   try {
//     const hashedPassword = await bcrypt.hash(password, 10);

//     const sql =
//       "INSERT INTO doctors (name, email, phone, password) VALUES (?, ?, ?, ?)";

//     db.query(sql, [name, email, phone, hashedPassword], (err) => {
//       if (err) {
//         return res.status(409).json({
//           message: "Doctor already exists",
//         });
//       }

//       const token = jwt.sign({ email }, JWT_SECRET, {
//         expiresIn: "1d",
//       });

//       res.json({
//         success: true,
//         token,
//         message: "Doctor registered successfully",
//       });
//     });
//   } catch {
//     res.status(500).json({ message: "Signup failed" });
//   }
// });

// /* ==================================================
//    🔐 DOCTOR LOGIN (UNCHANGED)
// ================================================== */
// app.post("/api/doctor/login", (req, res) => {
//   const { emailOrPhone, password } = req.body;

//   const sql = "SELECT * FROM doctors WHERE email = ? OR phone = ? LIMIT 1";

//   db.query(sql, [emailOrPhone, emailOrPhone], async (err, result) => {
//     if (err) return res.status(500).json({ message: "DB Error" });

//     if (result.length === 0)
//       return res.status(401).json({ message: "Doctor not found" });

//     const doctor = result[0];
//     const isMatch = await bcrypt.compare(password, doctor.password);

//     if (!isMatch) return res.status(401).json({ message: "Invalid password" });

//     const token = jwt.sign({ id: doctor.id, email: doctor.email }, JWT_SECRET, {
//       expiresIn: "1d",
//     });

//     res.json({
//       success: true,
//       token,
//       doctor: {
//         id: doctor.id,
//         name: doctor.name,
//         email: doctor.email,
//       },
//     });
//   });
// });

// /* ================= SERVER START ================= */
// const PORT = 3001; // ✅ Frontend Axios port match
// app.listen(PORT, () => {
//   console.log(`🚀 Server running on port ${PORT}`);
// });

const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
require("dotenv").config();

const app = express();

/* ================= MIDDLEWARE ================= */
app.use(cors());
app.use(express.json());

/* ================= MYSQL CONNECTION ================= */
// const db = mysql.createPool({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "mydatabase",
//   waitForConnections: true,
//   connectionLimit: 10,
// });

// db.getConnection((err) => {
//   if (err) {
//     console.error("❌ MySQL Connection Error:", err);
//   } else {
//     console.log("✅ MySQL Connected!");
//   }
// });

const db = require("./config/db"); // mydatabase
const db1 = require("./config/db1"); // healthcare_rcm

/* ================= JWT SECRET ================= */
const JWT_SECRET = process.env.JWT_SECRET || "doctor_secret_key_123";

/* ==================================================
   📊 GET ALL PROVIDERS (Dashboard)
================================================== */
app.get("/api/providers", (req, res) => {
  const sql = `
    SELECT
      p.npi,
      COALESCE(p.org_name, CONCAT(p.first_name, ' ', p.last_name)) AS name,
      p.credential,
      pa.state,
      pt.specialty,
      cs.payer,
      cs.status AS credentialing_status,
      cs.expiry_date
    FROM providers p
    LEFT JOIN provider_addresses pa 
      ON p.npi = pa.npi AND pa.address_purpose = 'LOCATION'
    LEFT JOIN provider_taxonomies pt 
      ON p.npi = pt.npi AND pt.is_primary = 1
    LEFT JOIN credentialing_status cs 
      ON p.npi = cs.npi
  `;

  db.query(sql, (err, results) => {
    if (err) return res.status(500).json({ message: "DB Error" });
    res.json(results);
  });
});

/* ==================================================
   🆕 REGISTER PROVIDER  (🔥 FIXED ROUTE)
================================================== */
// app.post("/api/register-provider", (req, res) => {
//   const {
//     npi,
//     tin,
//     firstName,
//     middleName,
//     lastName,
//     credential,
//     state,
//     specialty,
//     payer,
//   } = req.body;

//   if (!npi || !firstName || !lastName) {
//     return res.status(400).json({ message: "Required fields missing" });
//   }

//   const insertProvider = `
//     INSERT INTO providers
//     (npi, tin, first_name, middle_name, last_name, credential)
//     VALUES (?, ?, ?, ?, ?, ?)
//   `;

//   db1.query(
//     insertProvider,
//     [npi, tin, firstName, middleName, lastName, credential],
//     (err) => {
//       if (err) {
//         console.error(err);
//         return res.status(500).json({ message: "Provider insert failed" });
//       }

//       const insertAddress = `
//         INSERT INTO provider_addresses (npi, state, address_purpose)
//         VALUES (?, ?, 'LOCATION')
//       `;

//       db1.query(insertAddress, [npi, state], (err) => {
//         if (err) console.log("Address insert skipped");

//         const insertTaxonomy = `
//           INSERT INTO provider_taxonomies (npi, specialty, is_primary)
//           VALUES (?, ?, 1)
//         `;

//         db1.query(insertTaxonomy, [npi, specialty], (err) => {
//           if (err) console.log("Taxonomy insert skipped");

//           const insertCredentialing = `
//             INSERT INTO credentialing_status (npi, payer, status)
//             VALUES (?, ?, 'Pending')
//           `;

//           db1.query(insertCredentialing, [npi, payer || "Aetna"], (err) => {
//             if (err) console.log("Credentialing insert skipped");

//             res.json({
//               success: true,
//               message: "Provider Registered Successfully",
//             });
//           });
//         });
//       });
//     },
//   );
// });

app.post("/api/register-provider", (req, res) => {
  const {
    npi,
    tin,
    firstName,
    middleName,
    lastName,
    credential,
    state,
    specialty,
    payer,
  } = req.body;

  if (!npi || !firstName || !lastName) {
    return res.status(400).json({ message: "Required fields missing" });
  }

  const insertProvider = `
    INSERT INTO providers 
    (npi, tin, first_name, middle_name, last_name, credential)
    VALUES (?, ?, ?, ?, ?, ?)
  `;

  db1.query(
    insertProvider,
    [npi, tin, firstName, middleName, lastName, credential],
    (err) => {
      if (err) {
        console.error("❌ Provider Insert Error:", err);
        return res.status(500).json({ message: err.message });
      }

      console.log("✅ Provider Inserted");

      const insertAddress = `
        INSERT INTO provider_addresses (npi, state, address_purpose)
        VALUES (?, ?, 'LOCATION')
      `;

      db1.query(insertAddress, [npi, state], (err) => {
        if (err) {
          console.error("❌ Address Insert Error:", err);
          return res.status(500).json({ message: err.message });
        }

        console.log("✅ Address Inserted");

        const insertTaxonomy = `
          INSERT INTO provider_taxonomies (npi, specialty, is_primary)
          VALUES (?, ?, 1)
        `;

        db1.query(insertTaxonomy, [npi, specialty], (err) => {
          if (err) {
            console.error("❌ Taxonomy Insert Error:", err);
            return res.status(500).json({ message: err.message });
          }

          console.log("✅ Taxonomy Inserted");

          const insertCredentialing = `
            INSERT INTO credentialing_status (npi, payer, status)
            VALUES (?, ?, 'Pending')
          `;

          db1.query(insertCredentialing, [npi, payer || "Aetna"], (err) => {
            if (err) {
              console.error("❌ Credentialing Insert Error:", err);
              return res.status(500).json({ message: err.message });
            }

            console.log("✅ Credentialing Inserted");

            res.json({
              success: true,
              message: "Provider Registered Successfully",
            });
          });
        });
      });
    },
  );
});

/* ==================================================
   🔄 UPDATE STATUS
================================================== */
app.post("/api/update-status", (req, res) => {
  const { npi, payer, status } = req.body;

  const sql =
    "UPDATE credentialing_status SET status = ? WHERE npi = ? AND payer = ?";

  db1.query(sql, [status, npi, payer], (err) => {
    if (err) return res.status(500).json({ message: "Update failed" });
    res.json({ message: "Status Updated" });
  });
});

/* ==================================================
   🔐 DOCTOR SIGNUP
================================================== */
app.post("/api/doctor/signup", async (req, res) => {
  const { name, email, phone, password } = req.body;

  if (!name || !email || !phone || !password) {
    return res.status(400).json({ message: "All fields required" });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const sql =
      "INSERT INTO doctors (name, email, phone, password) VALUES (?, ?, ?, ?)";

    db.query(sql, [name, email, phone, hashedPassword], (err) => {
      if (err)
        return res.status(409).json({ message: "Doctor already exists" });

      const token = jwt.sign({ email }, JWT_SECRET, { expiresIn: "1d" });

      res.json({
        success: true,
        token,
        message: "Doctor registered successfully",
      });
    });
  } catch {
    res.status(500).json({ message: "Signup failed" });
  }
});

/* ==================================================
   🔐 DOCTOR LOGIN
================================================== */
app.post("/api/doctor/login", (req, res) => {
  const { emailOrPhone, password } = req.body;

  const sql = "SELECT * FROM doctors WHERE email = ? OR phone = ? LIMIT 1";

  db.query(sql, [emailOrPhone, emailOrPhone], async (err, result) => {
    if (err) return res.status(500).json({ message: "DB Error" });
    if (result.length === 0)
      return res.status(401).json({ message: "Doctor not found" });

    const doctor = result[0];
    const isMatch = await bcrypt.compare(password, doctor.password);

    if (!isMatch) return res.status(401).json({ message: "Invalid password" });

    const token = jwt.sign({ id: doctor.id, email: doctor.email }, JWT_SECRET, {
      expiresIn: "1d",
    });

    res.json({
      success: true,
      token,
      doctor: {
        id: doctor.id,
        name: doctor.name,
        email: doctor.email,
      },
    });
  });
});

/* ================= SERVER START ================= */
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
