import React from "react";
// import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";

import {
  Search,
  Play,
  ArrowRight,
  ChevronDown,
  CheckCircle2,
  FileText,
  BarChart3,
  Users,
  ShieldAlert,
  FileCheck2,
  Star,
  Linkedin,
  Twitter,
  Facebook,
  Mail,
} from "lucide-react";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-100">
      {/* <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
          <img src={logo} alt="Nex-G Logo" />
        </div>

        <span className="text-xl font-bold">NexGHealth</span>
      </div> */}

      <div className="flex items-center gap-3">
        {/* ✅ FIXED LOGO SIZE */}
        <img
          src={logo}
          alt="Nex-G Logo"
          className="h-10 w-auto object-contain"
        />

        <span className="text-xl font-bold">NexGHealth</span>
      </div>

      <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-600">
        {[
          "Platform",
          "Solutions",
          "Services",
          "Resources",
          "Pricing",
          "Company",
        ].map((item) => (
          <div
            key={item}
            className="flex items-center gap-1 cursor-pointer hover:text-blue-600 transition-colors"
          >
            {item} <ChevronDown className="w-4 h-4" />
          </div>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <button className="text-slate-600 hover:text-blue-600">
          <Search className="w-5 h-5" />
        </button>
        <button className="bg-blue-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-blue-700 transition-colors">
          Request a Demo
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

// **********************************************

// import React from "react";
// import "./Navbar.css";
// import { Link, useNavigate } from "react-router-dom";
// import logo1 from "../../assets/logo1.png";
// import { FaUserCircle, FaSearch, FaBars, FaThLarge } from "react-icons/fa";

// const Navbar = () => {
//   const navigate = useNavigate();

//   const handleProfileClick = () => {
//     navigate("/login"); // ✅ SAFE
//   };

//   return (
//     <nav className="container">
//       {/* Logo */}
//       <Link to="/">
//         <img src={logo1} alt="Nex-G Logo" className="footer-logo1" />
//       </Link>

//       <ul className="ul">
//         {/* 👤 Profile / Login (NEW PAGE) */}
//         <li className="icon-btn" onClick={() => navigate("/login")}>
//           <FaUserCircle className="nav-icon" title="Doctor Login" />
//         </li>

//         {/* 🔍 Search */}
//         <li className="icon-btn">
//           <Link to="/search">
//             <FaSearch className="nav-icon" title="Search" />
//           </Link>
//         </li>

//         {/* ☰ Menu */}
//         <li className="icon-btn">
//           <Link to="/menu">
//             <FaBars className="nav-icon" title="Menu Bar" />
//           </Link>
//         </li>

//         {/* ⬛ Sections */}
//         <li className="icon-btn">
//           <Link to="/sections">
//             <FaThLarge className="nav-icon" title="Sections" />
//           </Link>
//         </li>

//         {/* 📞 Contact */}
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
