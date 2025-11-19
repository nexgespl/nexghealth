// import React from "react";
// import "./Footer.css";
// import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <footer className="footer">
//       <div className="footer-container">
//         {/* Left Section */}
//         <div className="footer-left">
//           <img src="/images/Nex-G-logo.png" alt="Nex-G Logo" className="footer-logo" />
//           <p className="tagline">Excellence Redefined</p>

//           <div className="social-icons">
//             <a href="#"><FaFacebookF /></a>
//             <a href="#"><FaTwitter /></a>
//             <a href="#"><FaInstagram /></a>
//             <a href="#"><FaLinkedinIn /></a>
//           </div>

//           <a href="#" className="privacy-link">Privacy Policy</a>
//         </div>

//         {/* Middle Section */}
//         <div className="footer-middle">
//           <h4>Useful Links</h4>
//           <ul>
//             <li><a href="#">Home</a></li>
//             <li><a href="#">Company</a></li>
//             <li><a href="#">How we do</a></li>
//             <li><a href="#">Solutions</a></li>
//             <li><a href="#">Clients</a></li>
//             <li><a href="#">Contact Us</a></li>
//           </ul>
//         </div>

//         {/* Right Section */}
//         <div className="footer-right">
//           <h4>Contact</h4>
//           <p><strong>Phone:</strong><br />    +1 307-288-6456<br />+1 307-288-6457</p>
//           <p><strong>FAX:</strong><br />+1 307-288-6459</p>
//           <p><strong>Email:</strong><br />
//             <a href="mailto:info@Nex-Gsolutions.com">info@Nex-Gsolutions.com</a>
//           </p>
//           <p><strong>Address:</strong><br />
//             Nex-G Solutions LLC<br />
//             30 N Gould ST STE R<br />
//             Sheridan WY, 82801
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";
import logo1 from '../../assets/logo1.png'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* LEFT SECTION */}
        <div className="footer-left">
          <div className="logo">
          <img src={logo1} alt="Nex-G Logo" className="footer-logo" />
            <h2>Nex-G Health</h2>
          </div>
          <p className="tagline">Excellence Redefined</p>

          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedinIn /></a>
          </div>

          <p className="privacy">Privacy Policy</p>
        </div>

        {/* MIDDLE SECTION */}
        <div className="footer-middle">
          <h3>Useful Links</h3>
          <ul>

            
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            {/* <li><a href="#">How we do</a></li> */}
            <li><a href="#">Services</a></li>
            {/* <li><a href="#">Clients</a></li> */}
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>

        {/* RIGHT SECTION */}
        <div className="footer-right">
          <h3>Contact</h3>

          <div className="contact-info">
            <p><strong>Phone: +91 882-690-0551</strong><br />            
            <br /></p>
            {/* <p><strong>FAX:</strong><br />+1 307-288-6459</p> */}
            <p><strong>Email: info@nexg.in</strong><br /><br /></p>
            <p><strong>Address: Nex-G Solutions LLC <br />30 N Gould ST STE R <br />Sheridan WY, 82801 </strong><br /><br /><br /></p>
          </div>

          {/* <div className="contact-info">
            <p><strong>Phone:</strong><br />+91 882-690-0551            
            <br />+91 882-690-0556</p> */}
            {/* <p><strong>FAX:</strong><br />+1 307-288-6459</p> */}
            {/* <p><strong>Email: info@nexg.in</strong><br />info@nexg.in</p>
            <p><strong>Address:</strong><br />Nex-G Solutions LLC<br />30 N Gould ST STE R<br />Sheridan WY, 82801</p>
          </div> */}
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
