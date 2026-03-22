import React from "react";
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

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] pt-16 pb-8 px-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-white">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center font-bold">
              N
            </div>
            <span className="text-xl font-bold">NexGHealth</span>
          </div>
          <p className="text-slate-400 text-sm">
            AI-powered Revenue Cycle Management for modern healthcare
            organizations.
          </p>
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition cursor-pointer">
              <Linkedin className="w-5 h-5" />
            </div>
            <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition cursor-pointer">
              <Twitter className="w-5 h-5" />
            </div>
            <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition cursor-pointer">
              <Facebook className="w-5 h-5" />
            </div>
          </div>
          <div className="flex items-center gap-2 text-slate-400 text-sm">
            <Mail className="w-4 h-4" /> provider-relations@nexghealth.com
          </div>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-6 tracking-wide text-sm">
            PRODUCT
          </h4>
          <ul className="space-y-4 text-slate-400 text-sm">
            {["Platform Overview", "Features", "Pricing", "Changelog"].map(
              (item) => (
                <li
                  key={item}
                  className="hover:text-white cursor-pointer transition"
                >
                  {item}
                </li>
              ),
            )}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-6 tracking-wide text-sm">
            COMPANY
          </h4>
          <ul className="space-y-4 text-slate-400 text-sm">
            {["About Us", "Careers", "Blog", "Press"].map((item) => (
              <li
                key={item}
                className="hover:text-white cursor-pointer transition"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-6 tracking-wide text-sm">
            LEGAL
          </h4>
          <ul className="space-y-4 text-slate-400 text-sm">
            {[
              "Privacy Policy",
              "Terms of Service",
              "HIPAA Compliance",
              "Security",
            ].map((item) => (
              <li
                key={item}
                className="hover:text-white cursor-pointer transition"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
        <p>© 2024 NexGHealth. All rights reserved.</p>
        <div className="flex gap-6">
          <span className="hover:text-white cursor-pointer transition">
            Status
          </span>
          <span className="hover:text-white cursor-pointer transition">
            Cookie Preferences
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// import React from "react";
// import logo1 from "../../assets/logo1.png";
// import {
//   FaFacebookF,
//   FaTwitter,
//   FaInstagram,
//   FaLinkedinIn,
// } from "react-icons/fa";
// import "./Footer.css";

// const Footer = () => {
//   return (
//     <footer className="footer">
//       <div className="footer-container">
//         {/* LEFT SECTION */}
//         <div className="footer-left">
//           <div className="logo">
//             <img src={logo1} alt="Nex-G Logo" className="footer-logo" />
//             <h2>NexG Health USA LLC</h2>
//           </div>
//           <p className="tagline">Excellence Redefined</p>

//           <div className="social-icons">
//             <a href="#">
//               <FaFacebookF />
//             </a>
//             <a href="#">
//               <FaTwitter />
//             </a>
//             <a href="#">
//               <FaInstagram />
//             </a>
//             <a href="#">
//               <FaLinkedinIn />
//             </a>
//           </div>

//           <p className="privacy">Privacy Policy</p>
//         </div>

//         {/* MIDDLE SECTION */}
//         <div className="footer-middle">
//           <h3>Useful Links</h3>
//           <ul>
//             <li>
//               <a href="#">Home</a>
//             </li>
//             <li>
//               <a href="#">About Us</a>
//             </li>
//             {/* <li><a href="#">How we do</a></li> */}
//             <li>
//               <a href="#">Services</a>
//             </li>
//             {/* <li><a href="#">Clients</a></li> */}
//             <li>
//               <a href="#">Contact Us</a>
//             </li>
//           </ul>
//         </div>

//         {/* RIGHT SECTION */}
//         <div className="footer-right">
//           <h3>Contact</h3>

//           <div className="contact-info">
//             <p>
//               <strong>Phone: +1 205 609 9829</strong>
//               <br />
//               <br />
//             </p>

//             <p>
//               <strong>Email: provider-relations@nexghealth.com</strong>
//               <br />
//               <br />
//             </p>
//             <p>
//               <strong>16192 Coastal Highway, Lewes, Delaware 19958</strong>
//               <br />
//               <br />
//               <br />
//             </p>
//           </div>

//           {/* <div className="contact-info">
//             <p><strong>Phone:</strong><br />+91 882-690-0551
//             <br />+91 882-690-0556</p> */}
//           {/* <p><strong>FAX:</strong><br />+1 307-288-6459</p> */}
//           {/* <p><strong>Email: info@nexg.in</strong><br />info@nexg.in</p>
//             <p><strong>Address:</strong><br />Nex-G Solutions LLC<br />30 N Gould ST STE R<br />Sheridan WY, 82801</p>
//           </div> */}
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
