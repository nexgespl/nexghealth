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
const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "mydatabase",
  waitForConnections: true,
  connectionLimit: 10,
});

db.getConnection((err) => {
  if (err) {
    console.error("❌ MySQL Connection Error:", err);
  } else {
    console.log("✅ MySQL Connected!");
  }
});

/* ================= JWT SECRET ================= */
const JWT_SECRET = process.env.JWT_SECRET || "doctor_secret_key_123";

/* ==================================================
   📌 CONSULTATION API
================================================== */
app.post("/saveConsultation", (req, res) => {
  const { fullname, email, phone, service } = req.body;

  const sql =
    "INSERT INTO consultations (fullname, email, phone, service) VALUES (?, ?, ?, ?)";

  db.query(sql, [fullname, email, phone, service], (err) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: "DB Error",
      });
    }

    res.json({
      success: true,
      message: "Data Saved Successfully!",
    });
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
      if (err) {
        return res.status(409).json({
          message: "Doctor already exists",
        });
      }

      const token = jwt.sign({ email }, JWT_SECRET, {
        expiresIn: "1d",
      });

      res.json({
        success: true,
        token,
        message: "Doctor registered successfully",
      });
    });
  } catch (error) {
    res.status(500).json({ message: "Signup failed" });
  }
});

/* ==================================================
   🔐 DOCTOR LOGIN (EMAIL OR PHONE)
================================================== */
app.post("/api/doctor/login", (req, res) => {
  const { emailOrPhone, password } = req.body;

  console.log("LOGIN BODY:", req.body);

  if (!emailOrPhone || !password) {
    return res.status(400).json({
      message: "Email/Phone and Password required",
    });
  }

  const sql = "SELECT * FROM doctors WHERE email = ? OR phone = ? LIMIT 1";

  db.query(sql, [emailOrPhone, emailOrPhone], async (err, result) => {
    if (err) {
      return res.status(500).json({ message: "DB Error" });
    }

    if (result.length === 0) {
      return res.status(401).json({ message: "Doctor not found" });
    }

    const doctor = result[0];
    const isMatch = await bcrypt.compare(password, doctor.password);

    if (!isMatch) {
      return res.status(401).json({ message: "Invalid password" });
    }

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

/* ==================================================
   🔐 JWT MIDDLEWARE
================================================== */
const verifyDoctor = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(403).json({ message: "Token missing" });
  }

  const token = authHeader.split(" ")[1];

  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Invalid token" });
    }

    req.doctor = decoded;
    next();
  });
};

/* ==================================================
   🏥 DOCTOR DASHBOARD (PROTECTED)
================================================== */
app.get("/api/doctor/dashboard", verifyDoctor, (req, res) => {
  res.json({
    success: true,
    message: "Welcome to Doctor Dashboard",
    doctor: req.doctor,
  });
});

/* ================= SERVER START ================= */
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
