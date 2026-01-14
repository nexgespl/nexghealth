//

import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import "./DoctorDashboard.css";

const DoctorDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("doctorToken");
    navigate("/login");
  };

  return (
    <div className="dashboard">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2 className="logo">Doctor Panel</h2>

        <ul>
          <li>
            <Link
              to="/doctor/credentialing"
              style={{ color: "white", textDecoration: "none" }}
            >
              Credentialing Request
            </Link>
          </li>
          <li>Dashboard</li>
          <li>Credentialing Request</li>
          <li>Profile</li>
          <li>Settings</li>
        </ul>

        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <h1>Welcome, Doctor 👨‍⚕️</h1>

        <div className="stats">
          <div className="card">
            <h3>Total Requests</h3>
            <p>12</p>
          </div>

          <div className="card">
            <h3>Approved</h3>
            <p>5</p>
          </div>

          <div className="card">
            <h3>Pending</h3>
            <p>7</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DoctorDashboard;
