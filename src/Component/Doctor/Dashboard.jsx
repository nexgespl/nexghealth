// import { Link } from "react-router-dom";

// import { useNavigate } from "react-router-dom";
// import "./DoctorDashboard.css";
// // import Cd from "./Component/Cd/Cd.jsx";

// const DoctorDashboard = () => {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem("doctorToken");
//     navigate("/login");
//   };

//   return (
//     <div className="dashboard">
//       {/* Sidebar */}
//       <aside className="sidebar">
//         <h2 className="logo">Doctor Panel</h2>

//         <ul>
//           <li>
//             <Link
//               to="/doctor/credentialing"
//               style={{ color: "white", textDecoration: "none" }}
//             >
//               Credentialing Request
//             </Link>
//           </li>
//           <li>Dashboard</li>
//           <li>Credentialing Request</li>
//           <li>Profile</li>
//           <li>Settings</li>
//         </ul>

//         <button className="logout-btn" onClick={handleLogout}>
//           Logout
//         </button>
//       </aside>

//       {/* Main Content */}
//       <main className="main-content">
//         <h1>Welcome, Doctor 👨‍⚕️</h1>
//         {/* <Cd /> */}

//         <div className="stats">
//           <div className="card">
//             <h3>Total Requests</h3>
//             <p>12</p>
//           </div>

//           <div className="card">
//             <h3>Approved</h3>
//             <p>5</p>
//           </div>

//           <div className="card">
//             <h3>Pending</h3>
//             <p>7</p>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default DoctorDashboard;

// -----------------------------------------

// import React from "react";
// import "./DoctorDashboard.css";

// const DoctorDashboard = () => {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem("doctorToken");
//     navigate("/login");
//   };

//   return (
//     <div className="dashboard-container">
//       {/* Sidebar */}
//       <aside className="sidebar">
//         <div className="doctor-profile">
//           <img src="https://i.pravatar.cc/150?img=12" alt="Doctor" />
//           <h3>Dr. Darren Elder</h3>
//           <p>BDS, MDS - Oral & Maxillofacial Surgery</p>
//         </div>

//         <ul className="menu">
//           <li className="active">Dashboard</li>
//           <li>Appointments</li>
//           <li>My Patients</li>
//           <li>Schedule Timings</li>
//           <li>Invoices</li>
//           <li>Reviews</li>
//           <li>Messages</li>
//           <li>Profile Settings</li>
//           <li>Change Password</li>{" "}
//           <button className="logout-btn" onClick={handleLogout}>
//             Logout{" "}
//           </button>
//         </ul>
//       </aside>

//       {/* Main Content */}
//       <main className="main-content">
//         {/* Stats */}
//         <div className="stats">
//           <div className="card pink">
//             <h4>Total Patients</h4>
//             <h2>1500</h2>
//           </div>
//           <div className="card green">
//             <h4>Today Patients</h4>
//             <h2>160</h2>
//           </div>
//           <div className="card blue">
//             <h4>Appointments</h4>
//             <h2>85</h2>
//           </div>
//         </div>

//         {/* Appointments Table */}
//         <div className="table-card">
//           <h3>Patient Appointments</h3>
//           <table>
//             <thead>
//               <tr>
//                 <th>Patient</th>
//                 <th>Date</th>
//                 <th>Purpose</th>
//                 <th>Type</th>
//                 <th>Amount</th>
//                 <th>Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td>Richard Wilson</td>
//                 <td>11 Nov 2019</td>
//                 <td>General</td>
//                 <td>New</td>
//                 <td>$150</td>
//                 <td>
//                   <button className="view">View</button>
//                   <button className="accept">Accept</button>
//                   <button className="cancel">Cancel</button>
//                 </td>
//               </tr>
//               <tr>
//                 <td>Charlene Reed</td>
//                 <td>3 Nov 2019</td>
//                 <td>General</td>
//                 <td>Old</td>
//                 <td>$200</td>
//                 <td>
//                   <button className="view">View</button>
//                   <button className="accept">Accept</button>
//                   <button className="cancel">Cancel</button>
//                 </td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       </main>
//     </div>
//   );
// };
// export default DoctorDashboard;

/* ------------------------------ */

import { Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./DoctorDashboard.css";

const DoctorDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("doctorToken");
    navigate("/login");
  };

  const [providers, setProviders] = useState([]);
  const [stats, setStats] = useState({ total: 0, pending: 0, expiring: 0 });

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/providers")
      .then((res) => {
        console.log("API DATA:", res.data);
        setProviders(res.data);
        calculateStats(res.data);
      })
      .catch((err) => {
        console.error("Error fetching data", err);
      });
  }, []);

  const calculateStats = (data) => {
    const pending = data.filter(
      (p) => p.credentialing_status === "Pending",
    ).length;

    const expiring = data.filter(
      (p) => p.expiry_date && new Date(p.expiry_date) < new Date("2025-12-31"),
    ).length;

    setStats({ total: data.length, pending, expiring });
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Approved":
        return "badge-success";
      case "Pending":
        return "badge-warning";
      case "Denied":
        return "badge-danger";
      default:
        return "badge-secondary";
    }
  };

  return (
    <div className="dashboard">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2 className="logo">Doctor Panel</h2>

        <ul>
          <li>
            <Link
              to="/doctor/CredentialingRequest"
              style={{ color: "white", textDecoration: "none" }}
            >
              Credentialing Request
            </Link>
          </li>
          <li>Dashboard</li>
          <li>Profile</li>
          <li>Settings</li>
        </ul>

        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <header className="header">
          <h1>RCM Provider Credentialing Dashboard</h1>
          <p>National Plan & Provider Enumeration System (NPPES) Integration</p>
        </header>

        {/* KPI Cards */}
        <div className="stats-row">
          <div className="card">
            <h3>Total Applications</h3>
            <div className="number">{stats.total}</div>
          </div>

          <div className="card">
            <h3>Pending Action</h3>
            <div className="number warning">{stats.pending}</div>
          </div>

          <div className="card">
            <h3>Expiring Soon</h3>
            <div className="number danger">{stats.expiring}</div>
          </div>
        </div>

        {/* Data Table */}
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>NPI</th>
                <th>Provider Name</th>
                <th>Cred.</th>
                <th>State</th>
                <th>Specialty</th>
                <th>Payer</th>
                <th>Status</th>
                <th>Re-Cred Due</th>
              </tr>
            </thead>

            <tbody>
              {providers.map((p, index) => (
                <tr key={index}>
                  <td className="npi-text">{p.npi}</td>
                  <td>{p.name}</td>
                  <td>{p.credential || "N/A"}</td>
                  <td>{p.state}</td>
                  <td>{p.specialty}</td>
                  <td>{p.payer}</td>
                  <td>
                    <span
                      className={`badge ${getStatusColor(
                        p.credentialing_status,
                      )}`}
                    >
                      {p.credentialing_status || "Not Started"}
                    </span>
                  </td>
                  <td>{p.expiry_date ? p.expiry_date.split("T")[0] : "-"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default DoctorDashboard;
