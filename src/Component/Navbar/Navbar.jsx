// import React from "react";
// import "./Navbar.css";
// import { Link } from "react-router-dom";
// import logo1 from "../../assets/logo1.png";
// import { FaUserCircle, FaSearch, FaBars, FaThLarge } from "react-icons/fa"; // 🔹 All icons imported

// const Navbar = () => {
//   return (
//     <nav className="container">
//       <Link to="/">
//         <img src={logo1} alt="Nex-G Logo" className="footer-logo1" />
//       </Link>

//       {/* <h1>Nex-G Health</h1> */}

//       {/* <h1 className="Logo">Nex-G Health</h1> */}

//       <ul className="ul">
//         {/* Profile Icon */}
//         <li className="icon-btn">
//           <FaUserCircle className="nav-icon" title="Profile" />
//         </li>

//         {/* Search Icon */}
//         <li className="icon-btn">
//           <FaSearch className="nav-icon" title="Search" />
//         </li>

//         {/* Bar Icon */}
//         <li className="icon-btn">
//           <FaBars className="nav-icon" title="Menu Bar" />
//         </li>

//         {/* Section Icon */}
//         <li className="icon-btn">
//           <FaThLarge className="nav-icon" title="Sections" />
//         </li>

//         {/* Button */}
//         <li>
//           <Link to="/contact">
//             <button className="btn">Contact Us</button>
//           </Link>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;

//******************************************************************* */
// popup section

// import React from "react";
// import "./Navbar.css";
// import { Link } from "react-router-dom";
// import logo1 from "../../assets/logo1.png";
// import { FaUserCircle, FaSearch, FaBars, FaThLarge } from "react-icons/fa";

// const Navbar = ({ openAuthModal }) => {
//   return (
//     <nav className="container">
//       <Link to="/">
//         <img src={logo1} alt="Nex-G Logo" className="footer-logo1" />
//       </Link>

//       <ul className="ul">
//         {/* Profile Icon (OPEN AUTH MODAL) */}
//         <li className="icon-btn" onClick={openAuthModal}>
//           <FaUserCircle className="nav-icon" title="Profile / Login" />
//         </li>

//         {/* Search Icon */}
//         <li className="icon-btn">
//           <Link to="/Search">
//             <FaSearch className="nav-icon" title="Search" />
//           </Link>
//         </li>

//         {/* Bar Icon */}
//         <li className="icon-btn">
//           <Link to="/Menu Bar">
//             <FaBars className="nav-icon" title="Menu Bar" />
//           </Link>
//         </li>

//         {/* Section Icon */}
//         <li className="icon-btn">
//           <Link to="/Sections">
//             <FaThLarge className="nav-icon" title="Sections" />
//           </Link>
//         </li>

//         {/* Contact Button */}
//         <li>
//           <Link to="/contact">
//             <button className="btn">Contact Us</button>
//           </Link>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;

// **********************************************

import React from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import logo1 from "../../assets/logo1.png";
import { FaUserCircle, FaSearch, FaBars, FaThLarge } from "react-icons/fa";

const Navbar = () => {
  const navigate = useNavigate();

  const handleProfileClick = () => {
    navigate("/login"); // ✅ SAFE
  };

  return (
    <nav className="container">
      {/* Logo */}
      <Link to="/">
        <img src={logo1} alt="Nex-G Logo" className="footer-logo1" />
      </Link>

      <ul className="ul">
        {/* 👤 Profile / Login (NEW PAGE) */}
        <li className="icon-btn" onClick={() => navigate("/login")}>
          <FaUserCircle className="nav-icon" title="Doctor Login" />
        </li>

        {/* 🔍 Search */}
        <li className="icon-btn">
          <Link to="/search">
            <FaSearch className="nav-icon" title="Search" />
          </Link>
        </li>

        {/* ☰ Menu */}
        <li className="icon-btn">
          <Link to="/menu">
            <FaBars className="nav-icon" title="Menu Bar" />
          </Link>
        </li>

        {/* ⬛ Sections */}
        <li className="icon-btn">
          <Link to="/sections">
            <FaThLarge className="nav-icon" title="Sections" />
          </Link>
        </li>

        {/* 📞 Contact */}
        <li>
          <Link to="/contact">
            <button className="btn">Contact Us</button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
