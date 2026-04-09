import React, { useState } from "react";
import { Link } from "react-router-dom"; // ✅ enable routing
import logo from "../../assets/logo.png";

import { Search, ChevronDown, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // ✅ Menu items with routes
  const menuItems = [
    { name: "Platform", path: "/platform" },
    { name: "Solutions", path: "/solutions" },
    { name: "Services", path: "/services" },
    { name: "Resources", path: "/resources" },
    { name: "Pricing", path: "/pricing" },
    { name: "Company", path: "/company" },
  ];

  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-100 relative">
      {/* Logo */}
      <Link to="/" className="flex items-center gap-3">
        <img
          src={logo}
          alt="Nex-G Logo"
          className="h-10 w-auto object-contain"
        />
        <span className="text-xl font-bold">NexGHealth</span>
      </Link>

      {/* Desktop Menu */}
      <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-600">
        {menuItems.map((item) => (
          <Link
            to={item.path}
            key={item.name}
            className="flex items-center gap-1 cursor-pointer hover:text-blue-600 transition-colors"
          >
            {item.name} <ChevronDown className="w-4 h-4" />
          </Link>
        ))}
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-4">
        <button className="text-slate-600 hover:text-blue-600">
          <Search className="w-5 h-5" />
        </button>

        <button className="bg-blue-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-blue-700 transition-colors hidden sm:block">
          Request a Demo
        </button>

        {/* Hamburger */}
        <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Animated Mobile Menu */}
      <div
        className={`absolute top-full left-0 w-full bg-white shadow-md overflow-hidden transition-all duration-500 ease-in-out lg:hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col items-center gap-6 py-6">
          {menuItems.map((item, index) => (
            <Link
              to={item.path}
              key={item.name}
              onClick={() => setIsOpen(false)} // ✅ close on click
              className="text-slate-700 text-lg cursor-pointer hover:text-blue-600 transition transform hover:scale-105"
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
            >
              {item.name}
            </Link>
          ))}

          {/* Mobile Button */}
          <button className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
            Request a Demo
          </button>
        </div>
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
