// const mongoose = require("mongoose");

// const DoctorSchema = new mongoose.Schema({
//   name: String,
//   email: { type: String, unique: true },
//   phone: String,
//   password: String,
// });

// module.exports = mongoose.model("Doctor", DoctorSchema);

// **********************************************************
// const express = require("express");
// const router = express.Router();
// const {
//   registerDoctor,
//   loginDoctor,
//   getProfile,
// } = require("../controllers/doctorController");

// const auth = require("../middleware/authMiddleware");

// router.post("/register", registerDoctor);
// router.post("/login", loginDoctor);
// router.get("/profile", auth, getProfile);

// module.exports = router;

// const express = require("express");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const db = require("./db");

// const router = express.Router();

// /* ================= SIGNUP ================= */
// // router.post("/signup", async (req, res) => {
// //   const { name, email, password } = req.body;

// //   if (!name || !email || !password) {
// //     return res.status(400).json({ message: "All fields required" });
// //   }

// //   const hashedPassword = await bcrypt.hash(password, 10);

// //   const sql = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";

// //   db.query(sql, [name, email, hashedPassword], (err) => {
// //     if (err) {
// //       console.error(err);
// //       return res.status(409).json({ message: "User already exists" });
// //     }
// //     res.json({ message: "Signup successful" });
// //   });
// // });

// router.post("/signup", async (req, res) => {
//   const { name, email, phone, password } = req.body;

//   // Step 1: Check doctor exists
//   const doctorExists = await Doctor.findOne({ email });
//   if (doctorExists) {
//     return res.status(409).json({ message: "Doctor already exists" });
//   }

//   // Step 2: Create doctor
//   const doctor = new Doctor({
//     name,
//     email,
//     phone,
//     password, // plain password
//   });

//   // Step 3: Save → pre('save') hashes password
//   await doctor.save();

//   res.status(201).json({ message: "Doctor registered successfully" });
// });

/* ================= LOGIN ================= */
// router.post("/login", (req, res) => {
//   const { email, password } = req.body;

//   const sql = "SELECT * FROM users WHERE email = ?";

//   db.query(sql, [email], async (err, result) => {
//     if (err) return res.status(500).json({ message: "DB error" });

//     if (result.length === 0) {
//       return res.status(401).json({ message: "User not found" });
//     }

//     const user = result[0];
//     const isMatch = await bcrypt.compare(password, user.password);

//     if (!isMatch) {
//       return res.status(401).json({ message: "Invalid password" });
//     }

//     const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
//       expiresIn: "1d",
//     });

//     res.json({ token });
//   });
// });

// module.exports = router;

// ********************************************************

// router.post("/login", async (req, res) => {
//   const { email, password } = req.body;

//   // Step 1: Find doctor
//   const doctor = await Doctor.findOne({ email });
//   if (!doctor) {
//     return res.status(401).json({ message: "Doctor not found" });
//   }

//   // Step 2: Compare password
//   const isMatch = await bcrypt.compare(password, doctor.password);
//   if (!isMatch) {
//     return res.status(401).json({ message: "Invalid password" });
//   }

//   // Step 3: Generate JWT
//   const token = jwt.sign(
//     { id: doctor._id },
//     process.env.JWT_SECRET,
//     { expiresIn: "1d" }
//   );

//   res.json({ token, doctor });
// });

const express = require("express");
const router = express.Router();
const { loginDoctor } = require("../controllers/doctorController");

router.post("/login", loginDoctor);

module.exports = router;
