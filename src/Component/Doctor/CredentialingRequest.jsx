// // EXTRA DATA IN BASES OF DOCTOR

// // import React, { useState } from "react";
// // import "./Credentialing.css";

// // const CredentialingRequest = () => {
// //   const [formData, setFormData] = useState({
// //     doctorName: "",
// //     email: "",
// //     phone: "",
// //     npi: "",
// //     license: "",
// //     specialization: "",
// //     hospital: "",
// //   });

// //   const handleChange = (e) => {
// //     setFormData({ ...formData, [e.target.name]: e.target.value });
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     console.log("Credentialing Request:", formData);
// //     alert("Credentialing Request Submitted Successfully!");
// //   };

// //   return (
// //     <div className="credential-container">
// //       <h2>📄 Credentialing Request Form</h2>

// //       <form onSubmit={handleSubmit}>
// //         <input
// //           name="doctorName"
// //           placeholder="Doctor Name"
// //           onChange={handleChange}
// //           required
// //         />
// //         <input
// //           name="email"
// //           placeholder="Email ID"
// //           onChange={handleChange}
// //           required
// //         />
// //         <input
// //           name="phone"
// //           placeholder="Phone Number"
// //           onChange={handleChange}
// //           required
// //         />
// //         <input
// //           name="npi"
// //           placeholder="NPI Number"
// //           onChange={handleChange}
// //           required
// //         />
// //         <input
// //           name="license"
// //           placeholder="License Number"
// //           onChange={handleChange}
// //           required
// //         />
// //         <input
// //           name="specialization"
// //           placeholder="Specialization"
// //           onChange={handleChange}
// //           required
// //         />
// //         <input
// //           name="hospital"
// //           placeholder="Hospital / Clinic Name"
// //           onChange={handleChange}
// //           required
// //         />

// //         <button type="submit">Submit Request</button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default CredentialingRequest;

// // **************************************************************

// // import { useState } from "react";
// // import "./Credentialing.css";

// // const CredentialingForm = () => {
// //   const [formData, setFormData] = useState({
// //     fullName: "",
// //     npi: "",
// //     taxId: "",
// //     specialty: "",
// //     email: "",
// //     phone: "",
// //   });

// //   const handleChange = (e) => {
// //     setFormData({
// //       ...formData,
// //       [e.target.name]: e.target.value,
// //     });
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();

// //     // 🔐 JWT check (Phase 3 ka use)
// //     const token = localStorage.getItem("doctorToken");
// //     if (!token) {
// //       alert("Unauthorized! Please login again.");
// //       return;
// //     }

// //     console.log("Credentialing Request:", formData);
// //     alert("Credentialing Request Submitted Successfully ✅");

// //     // Future: API POST call yahin hogi
// //   };

// //   return (
// //     <div className="cred-container">
// //       <h2>Doctor Credentialing Request</h2>

// //       <form onSubmit={handleSubmit} className="cred-form">
// //         <input
// //           type="text"
// //           name="fullName"
// //           placeholder="Doctor Full Name"
// //           required
// //           onChange={handleChange}
// //         />

// //         <input
// //           type="text"
// //           name="npi"
// //           placeholder="NPI Number"
// //           required
// //           onChange={handleChange}
// //         />

// //         <input
// //           type="text"
// //           name="taxId"
// //           placeholder="Tax ID"
// //           required
// //           onChange={handleChange}
// //         />

// //         <select name="specialty" required onChange={handleChange}>
// //           <option value="">Select Specialty</option>
// //           <option>Cardiology</option>
// //           <option>Dermatology</option>
// //           <option>Orthopedic</option>
// //           <option>Neurology</option>
// //           <option>General Physician</option>
// //         </select>

// //         <input
// //           type="email"
// //           name="email"
// //           placeholder="Email Address"
// //           required
// //           onChange={handleChange}
// //         />

// //         <input
// //           type="tel"
// //           name="phone"
// //           placeholder="Phone Number"
// //           required
// //           onChange={handleChange}
// //         />

// //         {/* File Uploads */}
// //         <label>Medical License</label>
// //         <input type="file" required />

// //         <label>Degree Certificate</label>
// //         <input type="file" required />

// //         <button type="submit" className="submit-btn">
// //           Submit Request
// //         </button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default CredentialingForm;

// // ------------------------------------------------------

// // import React, { useState, useEffect } from "react";
// // import axios from "axios";
// // import "./Credentialing.css";
// // function CredentialingForm() {
// //   const [providers, setProviders] = useState([]);
// //   const [stats, setStats] = useState({ total: 0, pending: 0, expiring: 0 });
// //   // useEffect(() => {
// //   //   fetchProviders();
// //   // }, []);
// //   // const fetchProviders = async () => {
// //   //   try {
// //   //     const res = await axios.get("http://localhost:3001/api/providers");
// //   //     setProviders(res.data);
// //   //     calculateStats(res.data);
// //   //   } catch (err) {
// //   //     console.error("Error fetching data", err);
// //   //   }
// //   // };

// //   useEffect(() => {
// //     axios
// //       .get("http://localhost:3001/api/providers")
// //       .then((res) => {
// //         console.log("API DATA:", res.data);
// //         setProviders(res.data);
// //         calculateStats(res.data);
// //       })
// //       .catch((err) => {
// //         console.error("Error fetching data", err);
// //       });
// //   }, []);

// //   const calculateStats = (data) => {
// //     const pending = data.filter(
// //       (p) => p.credentialing_status === "Pending",
// //     ).length;
// //     // Mock logic for expiring soon (in real app, compare dates)
// //     const expiring = data.filter(
// //       (p) => p.expiry_date && new Date(p.expiry_date) < new Date("2025-12-31"),
// //     ).length;
// //     setStats({ total: data.length, pending, expiring });
// //   };
// //   const getStatusColor = (status) => {
// //     switch (status) {
// //       case "Approved":
// //         return "badge-success";
// //       case "Pending":
// //         return "badge-warning";
// //       case "Denied":
// //         return "badge-danger";
// //       default:
// //         return "badge-secondary";
// //     }
// //   };
// //   return (
// //     <div className="dashboard-container">
// //       {/* Header */}
// //       <header className="header">
// //         <h1>RCM Provider Credentialing Dashboard</h1>
// //         <p>National Plan & Provider Enumeration System (NPPES) Integration</p>
// //       </header>
// //       {/* KPI Cards */}
// //       <div className="stats-row">
// //         <div className="card">
// //           <h3>Total Applications</h3>
// //           <div className="number">{stats.total}</div>
// //         </div>
// //         <div className="card">
// //           <h3>Pending Action</h3>
// //           <div className="number warning">{stats.pending}</div>
// //         </div>
// //         <div className="card">
// //           <h3>Expiring Soon</h3>
// //           <div className="number danger">{stats.expiring}</div>
// //         </div>
// //       </div>
// //       {/* Data Table */}
// //       <div className="table-container">
// //         <table>
// //           <thead>
// //             <tr>
// //               <th>NPI</th>
// //               <th>Provider Name</th>
// //               <th>Cred.</th>
// //               <th>State</th>
// //               <th>Specialty (Taxonomy)</th>
// //               <th>Payer</th>
// //               <th>Status</th>
// //               <th>Re-Cred Due</th>
// //             </tr>
// //           </thead>
// //           <tbody>
// //             {providers.map((p, index) => (
// //               <tr key={index}>
// //                 <td className="npi-text">{p.npi}</td>
// //                 <td>{p.name}</td>
// //                 <td>{p.credential || "N/A"}</td>
// //                 <td>{p.state}</td>
// //                 <td>{p.specialty}</td>
// //                 <td>{p.payer}</td>
// //                 <td>
// //                   <span
// //                     className={`badge ${getStatusColor(p.credentialing_status)}`}
// //                   >
// //                     {p.credentialing_status || "Not Started"}
// //                   </span>
// //                 </td>
// //                 <td>{p.expiry_date ? p.expiry_date.split("T")[0] : "-"}</td>
// //               </tr>
// //             ))}
// //           </tbody>
// //         </table>
// //       </div>
// //     </div>
// //   );
// // }
// // export default CredentialingForm;

// // import React from "react";

// // const CredentialingRequest = () => {
// //   return (
// //     <div>
// //       <h1>Credentialing Request Page</h1>
// //     </div>
// //   );
// // };

// // export default CredentialingRequest;

// /* ------------------- Final Cred Form -------------------- */

// import React, { useState } from "react";
// import "./Credentialing.css";

// const CredentialingRequest = () => {
//   const [form, setForm] = useState({
//     npi: "",
//     firstName: "",
//     lastName: "",
//     credential: "",
//     entityType: "1",
//     street: "",
//     city: "",
//     state: "",
//     zip: "",
//     phone: "",
//     specialty: "",
//     taxonomy: "",
//     license: "",
//     licenseState: "",
//     payer: "",
//   });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Doctor Form Data:", form);
//     alert("Form submitted (Pending for review)");
//   };

//   return (
//     <div className="doctor-form-container">
//       <h1>Doctor Credentialing Form</h1>
//       <p className="subtitle">
//         Submit your details for insurance credentialing
//       </p>

//       <form onSubmit={handleSubmit}>
//         {/* BASIC INFO */}
//         <section>
//           <h2>Basic Information</h2>
//           <div className="grid">
//             <input
//               name="npi"
//               placeholder="NPI Number"
//               onChange={handleChange}
//               required
//             />
//             <input
//               name="firstName"
//               placeholder="First Name"
//               onChange={handleChange}
//             />
//             <input
//               name="lastName"
//               placeholder="Last Name"
//               onChange={handleChange}
//             />
//             <select name="credential" onChange={handleChange}>
//               <option value="">Credential</option>
//               <option>MD</option>
//               <option>DO</option>
//               <option>NP</option>
//             </select>
//           </div>
//         </section>

//         {/* ADDRESS */}
//         <section>
//           <h2>Practice Address</h2>
//           <div className="grid">
//             <input
//               name="street"
//               placeholder="Street Address"
//               onChange={handleChange}
//             />
//             <input name="city" placeholder="City" onChange={handleChange} />
//             <input name="state" placeholder="State" onChange={handleChange} />
//             <input name="zip" placeholder="ZIP Code" onChange={handleChange} />
//             <input name="phone" placeholder="Phone" onChange={handleChange} />
//           </div>
//         </section>

//         {/* SPECIALTY */}
//         <section>
//           <h2>Specialty & License</h2>
//           <div className="grid">
//             <input
//               name="specialty"
//               placeholder="Specialty (e.g. Cardiology)"
//               onChange={handleChange}
//             />
//             <input
//               name="taxonomy"
//               placeholder="Taxonomy Code"
//               onChange={handleChange}
//             />
//             <input
//               name="license"
//               placeholder="License Number"
//               onChange={handleChange}
//             />
//             <input
//               name="licenseState"
//               placeholder="License State"
//               onChange={handleChange}
//             />
//           </div>
//         </section>

//         {/* INSURANCE */}
//         <section>
//           <h2>Insurance Payer</h2>
//           <select name="payer" onChange={handleChange}>
//             <option value="">Select Payer</option>
//             <option>Medicare</option>
//             <option>Blue Cross</option>
//             <option>Aetna</option>
//           </select>
//         </section>

//         <button type="submit" className="submit-btn">
//           Submit for Credentialing
//         </button>
//       </form>
//     </div>
//   );
// };

// export default CredentialingRequest;

// ---------------- Update Creditional form

// import React from "react";
// import "./Credentialing.css";

// const CredentialingRequest = () => {
//   return (
//     <div className="form-container">
//       <h2 className="form-title">Healthcare Provider Credentialing Form</h2>

//       <div className="tab">
//         <button className="active-tab">Code Identifier & Demographic</button>
//       </div>

//       {/* Core Identifier & Demographic */}
//       <div className="form-section">
//         <h4>Core Identifier & Demographic</h4>

//         <div className="form-row">
//           <div className="form-group">
//             <label>National Provider Identifier (NPI)</label>
//             <input type="text" placeholder="1234567890" />
//           </div>

//           <div className="form-group">
//             <label>Employer Identification Number (EIN)</label>
//             <input type="text" placeholder="12-3456789" />
//           </div>
//         </div>

//         <div className="form-row">
//           <div className="form-group">
//             <label>Legal First Name *</label>
//             <input type="text" />
//           </div>

//           <div className="form-group">
//             <label>Middle Name *</label>
//             <input type="text" />
//           </div>

//           <div className="form-group">
//             <label>Legal Last Name *</label>
//             <input type="text" />
//           </div>
//         </div>

//         <div className="form-row">
//           <div className="form-group">
//             <label>Credential Text</label>
//             <input type="text" placeholder="e.g., MD, DO, FNP" />
//           </div>

//           <div className="form-group">
//             <label>Legal Business Name (if applicable)</label>
//             <input type="text" />
//           </div>
//         </div>
//       </div>

//       {/* Primary Practice Location */}
//       <div className="form-section">
//         <h4>Primary Practice Location</h4>

//         <div className="form-row">
//           <div className="form-group full-width">
//             <label>Address Line 1 *</label>
//             <input type="text" />
//           </div>
//         </div>

//         <div className="form-row">
//           <div className="form-group">
//             <label>City *</label>
//             <input type="text" />
//           </div>

//           <div className="form-group">
//             <label>State *</label>
//             <select>
//               <option>Select State</option>
//               <option>California</option>
//               <option>New York</option>
//               <option>Texas</option>
//               <option>Florida</option>
//             </select>
//           </div>

//           <div className="form-group">
//             <label>ZIP Code *</label>
//             <input type="text" />
//           </div>
//         </div>

//         <div className="form-row">
//           <div className="form-group">
//             <label>Practice Telephone *</label>
//             <input type="text" placeholder="1234567890" />
//           </div>

//           <div className="form-group">
//             <label>Practice Fax</label>
//             <input type="text" placeholder="1234567890" />
//           </div>
//         </div>
//       </div>

//       {/* Primary Taxonomy & Licensing */}
//       <div className="form-section">
//         <h4>Primary Taxonomy & Licensing</h4>

//         <div className="form-row">
//           <div className="form-group full-width">
//             <label>Primary Taxonomy Code *</label>
//             <input type="text" />
//           </div>
//         </div>

//         <div className="form-row">
//           <div className="form-group">
//             <label>State License Number *</label>
//             <input type="text" />
//           </div>

//           <div className="form-group">
//             <label>License State *</label>
//             <select>
//               <option>Select State</option>
//               <option>California</option>
//               <option>New York</option>
//               <option>Texas</option>
//               <option>Florida</option>
//             </select>
//           </div>
//         </div>
//       </div>

//       <button className="submit-btn">Register Provider</button>
//     </div>
//   );
// };

// export default CredentialingRequest;

/* ------------------------- Advance Feature ---------------------------------- */
import React, { useState } from "react"; // 1. useState import kiya
import "./Credentialing.css";

const CredentialingRequest = () => {
  // 2. State initialize kari saare fields ke liye
  const [formData, setFormData] = useState({
    npi: "",
    tin: "",
    firstName: "",
    middleName: "",
    lastName: "",
    credential: "",
    businessName: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    phone: "",
    fax: "",
    taxonomyCode: "",
    licenseNumber: "",
    licenseState: "",
  });

  // 3. Input change handle karne ka function
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // 4. Submit function jo backend ko data bhejega
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Sending Data:", formData);

    try {
      const response = await fetch(
        "http://localhost:3001/api/register-provider",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        },
      );

      if (response.ok) {
        alert("Success: Data saved in Database!");
      } else {
        alert("Error: Backend se response sahi nahi aaya.");
      }
    } catch (error) {
      console.error("Connection Error:", error);
      alert("Backend server start hai? Connection nahi ho pa raha.");
    }
  };

  return (
    <div className="main-wrapper">
      <div className="form-card">
        <div className="form-header">
          <h2>Healthcare Provider Credentialing Form</h2>
          <p>
            Please enter the provider's official details as they appear on the
            National Plan and Provider Enumeration System (NPPES).
          </p>
        </div>

        {/* 5. onSubmit attach kiya */}
        <form className="provider-form" onSubmit={handleSubmit}>
          <fieldset className="form-section">
            <legend className="section-title">
              Core Identifiers & Demographics
            </legend>

            <div className="input-row">
              <div className="input-group">
                <label>National Provider Identifier (NPI) *</label>
                <input
                  type="text"
                  name="npi"
                  value={formData.npi}
                  onChange={handleChange}
                  placeholder="e.g. 1234567890"
                />
                <span className="sub-label">10 digit numeric identifier</span>
              </div>
              <div className="input-group">
                <label>Employer Identification Number (TIN)</label>
                <input
                  type="text"
                  name="tin"
                  value={formData.tin}
                  onChange={handleChange}
                  placeholder="e.g. 123456789"
                />
                <span className="sub-label">
                  9 digit numeric identifier (Optional)
                </span>
              </div>
            </div>

            <div className="input-row">
              <div className="input-group">
                <label>Legal First Name *</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="border-red"
                />
              </div>
              <div className="input-group">
                <label>Middle Name</label>
                <input
                  type="text"
                  name="middleName"
                  value={formData.middleName}
                  onChange={handleChange}
                />
              </div>
              <div className="input-group">
                <label>Legal Last Name *</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="border-red"
                />
              </div>
            </div>

            <div className="input-row">
              <div className="input-group">
                <label>Credential Text</label>
                <input
                  type="text"
                  name="credential"
                  value={formData.credential}
                  onChange={handleChange}
                  placeholder="e.g. MD, DO, FNP"
                />
              </div>
              <div className="input-group">
                <label>Legal Business Name (if applicable)</label>
                <input
                  type="text"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleChange}
                />
              </div>
            </div>
          </fieldset>

          {/* Section 2: Location */}
          <fieldset className="form-section">
            <legend className="section-title">Primary Practice Location</legend>
            <div className="input-group full-width">
              <label>Address Line 1 *</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="border-red"
              />
            </div>

            <div className="input-row">
              <div className="input-group flex-2">
                <label>City *</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="border-red"
                />
              </div>
              <div className="input-group flex-1">
                <label>State *</label>
                <select
                  className="dropdown"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                >
                  <option value="">Select State</option>
                  <option value="California">California</option>
                  <option value="New York">New York</option>
                  <option value="Texas">Texas</option>
                  <option value="Florida">Florida</option>
                </select>
              </div>
              <div className="input-group flex-1">
                <label>ZIP Code *</label>
                <input
                  type="text"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleChange}
                  className="border-red"
                />
              </div>
            </div>

            <div className="input-row">
              <div className="input-group">
                <label>Practice Telephone *</label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="1234567890"
                />
              </div>
              <div className="input-group">
                <label>Practice Fax</label>
                <input
                  type="text"
                  name="fax"
                  value={formData.fax}
                  onChange={handleChange}
                  placeholder="1234567890"
                />
              </div>
            </div>
          </fieldset>

          {/* Section 3: Licensing */}
          <fieldset className="form-section">
            <legend className="section-title">
              Primary Taxonomy & Licensing
            </legend>
            <div className="input-group full-width">
              <label>Primary Taxonomy Code *</label>
              <input
                type="text"
                name="taxonomyCode"
                value={formData.taxonomyCode}
                onChange={handleChange}
                className="border-red"
              />
              <span className="sub-label italic">
                e.g. 207Q00000X (Family Medicine)
              </span>
            </div>

            <div className="input-row">
              <div className="input-group">
                <label>State License Number *</label>
                <input
                  type="text"
                  name="licenseNumber"
                  value={formData.licenseNumber}
                  onChange={handleChange}
                  className="border-red"
                />
              </div>
              <div className="input-group">
                <label>License State *</label>
                <select
                  className="dropdown"
                  name="licenseState"
                  value={formData.licenseState}
                  onChange={handleChange}
                >
                  <option value="">Select State</option>
                  <option value="California">California</option>
                  <option value="New York">New York</option>
                  <option value="Texas">Texas</option>
                  <option value="Florida">Florida</option>
                </select>
              </div>
            </div>
          </fieldset>

          <button type="submit" className="register-btn">
            Register Provider
          </button>
        </form>
      </div>
    </div>
  );
};

export default CredentialingRequest;
