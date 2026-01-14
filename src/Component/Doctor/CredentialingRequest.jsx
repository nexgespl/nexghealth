// EXTRA DATA IN BASES OF DOCTOR

// import React, { useState } from "react";
// import "./Credentialing.css";

// const CredentialingRequest = () => {
//   const [formData, setFormData] = useState({
//     doctorName: "",
//     email: "",
//     phone: "",
//     npi: "",
//     license: "",
//     specialization: "",
//     hospital: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Credentialing Request:", formData);
//     alert("Credentialing Request Submitted Successfully!");
//   };

//   return (
//     <div className="credential-container">
//       <h2>📄 Credentialing Request Form</h2>

//       <form onSubmit={handleSubmit}>
//         <input
//           name="doctorName"
//           placeholder="Doctor Name"
//           onChange={handleChange}
//           required
//         />
//         <input
//           name="email"
//           placeholder="Email ID"
//           onChange={handleChange}
//           required
//         />
//         <input
//           name="phone"
//           placeholder="Phone Number"
//           onChange={handleChange}
//           required
//         />
//         <input
//           name="npi"
//           placeholder="NPI Number"
//           onChange={handleChange}
//           required
//         />
//         <input
//           name="license"
//           placeholder="License Number"
//           onChange={handleChange}
//           required
//         />
//         <input
//           name="specialization"
//           placeholder="Specialization"
//           onChange={handleChange}
//           required
//         />
//         <input
//           name="hospital"
//           placeholder="Hospital / Clinic Name"
//           onChange={handleChange}
//           required
//         />

//         <button type="submit">Submit Request</button>
//       </form>
//     </div>
//   );
// };

// export default CredentialingRequest;

// **************************************************************

import { useState } from "react";
import "./Credentialing.css";

const CredentialingForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    npi: "",
    taxId: "",
    specialty: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 🔐 JWT check (Phase 3 ka use)
    const token = localStorage.getItem("doctorToken");
    if (!token) {
      alert("Unauthorized! Please login again.");
      return;
    }

    console.log("Credentialing Request:", formData);
    alert("Credentialing Request Submitted Successfully ✅");

    // Future: API POST call yahin hogi
  };

  return (
    <div className="cred-container">
      <h2>Doctor Credentialing Request</h2>

      <form onSubmit={handleSubmit} className="cred-form">
        <input
          type="text"
          name="fullName"
          placeholder="Doctor Full Name"
          required
          onChange={handleChange}
        />

        <input
          type="text"
          name="npi"
          placeholder="NPI Number"
          required
          onChange={handleChange}
        />

        <input
          type="text"
          name="taxId"
          placeholder="Tax ID"
          required
          onChange={handleChange}
        />

        <select name="specialty" required onChange={handleChange}>
          <option value="">Select Specialty</option>
          <option>Cardiology</option>
          <option>Dermatology</option>
          <option>Orthopedic</option>
          <option>Neurology</option>
          <option>General Physician</option>
        </select>

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          required
          onChange={handleChange}
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          required
          onChange={handleChange}
        />

        {/* File Uploads */}
        <label>Medical License</label>
        <input type="file" required />

        <label>Degree Certificate</label>
        <input type="file" required />

        <button type="submit" className="submit-btn">
          Submit Request
        </button>
      </form>
    </div>
  );
};

export default CredentialingForm;
