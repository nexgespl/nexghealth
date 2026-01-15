// const db = require("../config/db");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");

// // REGISTER
// exports.registerDoctor = async (req, res) => {
//   const { name, email, password } = req.body;

//   const hashedPassword = await bcrypt.hash(password, 10);

//   const sql = "INSERT INTO doctor (name, email, password) VALUES (?, ?, ?)";

//   db.query(sql, [name, email, hashedPassword], (err) => {
//     if (err) {
//       return res.status(400).json({ message: "Doctor already exists" });
//     }
//     res.json({ message: "Doctor registered successfully" });
//   });
// };

// // LOGIN
// exports.loginDoctor = (req, res) => {
//   const { email, password } = req.body;

//   db.query(
//     "SELECT * FROM doctor WHERE email = ?",
//     [email],
//     async (err, result) => {
//       if (err) return res.status(500).json({ message: "DB error" });

//       if (result.length === 0) {
//         return res.status(401).json({ message: "Doctor not found" });
//       }

//       const doctor = result[0];

//       const isMatch = await bcrypt.compare(password, doctor.password);
//       if (!isMatch) {
//         return res.status(401).json({ message: "Invalid credentials" });
//       }

//       const token = jwt.sign({ id: doctor.id }, process.env.JWT_SECRET, {
//         expiresIn: "1d",
//       });

//       res.json({
//         token,
//         doctor: {
//           id: doctor.id,
//           name: doctor.name,
//           email: doctor.email,
//         },
//       });
//     }
//   );
// };

// // PROFILE
// exports.getProfile = (req, res) => {
//   db.query(
//     "SELECT id, name, email FROM doctor WHERE id = ?",
//     [req.doctorId],
//     (err, result) => {
//       if (err) return res.status(500).json({ message: "DB error" });
//       res.json(result[0]);
//     }
//   );
// };

// ********************************************************************

const db = require("../config/db");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

/* ======================
   DOCTOR LOGIN
====================== */
exports.loginDoctor = (req, res) => {
  const { email, password } = req.body;

  const sql = "SELECT * FROM nexghealth_doctors WHERE email = ?";
  db.query(sql, [email], async (err, result) => {
    if (err) return res.status(500).json({ message: "Server error" });

    if (result.length === 0) {
      return res.status(401).json({ message: "Doctor not found" });
    }

    const doctor = result[0];

    const isMatch = await bcrypt.compare(password, doctor.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid password" });
    }

    const token = jwt.sign(
      { id: doctor.id, email: doctor.email },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.json({
      message: "Login successful",
      token,
      doctor: {
        id: doctor.id,
        name: doctor.name,
        email: doctor.email,
      },
    });
  });
};
