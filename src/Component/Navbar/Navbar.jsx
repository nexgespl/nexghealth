import React from "react";
import "./Navbar.css";
import logo1 from '../../assets/logo1.png'
import { FaUserCircle, FaSearch, FaBars, FaThLarge } from "react-icons/fa"; // 🔹 All icons imported

const Navbar = () => {
  return (
    <nav className="container">

                  <img src={logo1} alt="Nex-G Logo" className="footer-logo1" />
                    {/* <h1>Nex-G Health</h1> */}


            
      {/* <h1 className="Logo">Nex-G Health</h1> */}

      <ul>
        {/* Profile Icon */}
        <li className="icon-btn">
          <FaUserCircle className="nav-icon" title="Profile" />
        </li>

        {/* Search Icon */}
        <li className="icon-btn">
          <FaSearch className="nav-icon" title="Search" />
        </li>

        {/* Bar Icon */}
        <li className="icon-btn">
          <FaBars className="nav-icon" title="Menu Bar" />
        </li>

        {/* Section Icon */}
        <li className="icon-btn">
          <FaThLarge className="nav-icon" title="Sections" />
        </li>

        {/* Button */}
        <li>
          <button className="btn">Contact Us</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;



// hfdjhfkjfhdfcnkjcnknn