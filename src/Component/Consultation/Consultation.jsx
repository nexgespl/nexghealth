// import React, { useState } from "react";
// import "./Consultation.css";
// import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
// import axios from "axios";

// const Consultation = () => {
//   const [formData, setFormData] = useState({
//     fullname: "",
//     email: "",
//     phone: "",
//     service: "",
//   });

//   // Handle input change
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // Handle form submit
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     axios
//       .post("http://localhost:5000/saveConsultation", formData)
//       .then((res) => {
//         alert("Form Submitted Successfully!");
//       })
//       .catch((err) => {
//         alert("Error submitting form");
//       });
//   };

//   return (
//     <section className="consultation-section">
//       <div className="consultation-container">
//         {/* LEFT SIDE */}
//         <div className="consultation-left">
//           <h2>
//             Ready to Optimize Your <br /> Revenue Cycle?
//           </h2>
//           <p>
//             Get a free consultation and discover how much revenue you could be
//             missing. Our experts will analyze your current processes and provide
//             actionable recommendations.
//           </p>

//           <div className="contact-info">
//             <p>
//               <FaPhoneAlt className="icon" /> +1 205 609 9829
//             </p>
//             <p>
//               <FaEnvelope className="icon" /> provider-relations@nexghealth.com
//             </p>
//             {/* <p>
//               <FaEnvelope className="icon" /> info@nexg.in
//             </p> */}
//           </div>
//         </div>

//         {/* RIGHT SIDE (FORM) */}
//         <div className="consultation-form">
//           <h3>Get Your Free RCM Assessment</h3>

//           <form onSubmit={handleSubmit}>
//             <input
//               type="text"
//               name="fullname"
//               placeholder="Full Name"
//               value={formData.fullname}
//               onChange={handleChange}
//               required
//             />

//             {/* <input
//               type="email"
//               name="email"
//               placeholder="Email Address"
//               value={formData.email}
//               onChange={handleChange}
//               required
//             /> */}

//             <input
//               type="email"
//               name="email"
//               placeholder="Email Address"
//               value={formData.email}
//               onChange={handleChange}
//               required
//             />

//             {formData.email &&
//               !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) && (
//                 <p style={{ color: "red" }}>
//                   Please enter a valid email address
//                 </p>
//               )}

//             {/* <input
//               type="tel"
//               name="phone"
//               placeholder="Phone Number"
//               value={formData.phone}
//               onChange={handleChange}
//               required
//             /> */}

//             <input
//               type="tel"
//               name="phone"
//               placeholder="Phone Number"
//               value={formData.phone}
//               onChange={(e) => {
//                 const value = e.target.value.replace(/\D/g, ""); // sirf numbers
//                 if (value.length <= 10) {
//                   setFormData({ ...formData, phone: value });
//                 }
//               }}
//               required
//             />

//             <select
//               name="service"
//               value={formData.service}
//               onChange={handleChange}
//               required
//             >
//               <option value="">Services</option>
//               <option value="Medical Billing Services">
//                 Medical Billing Services
//               </option>
//               <option value="Medical Empanelment Services">
//                 Medical Empanelment Services
//               </option>
//               <option value="Insurance Verification Services">
//                 Insurance Verification Services
//               </option>
//               <option value="Revenue Cycle Management Services">
//                 Revenue Cycle Management Services
//               </option>
//               <option value="Medical Billing & Codding Services">
//                 Medical Billing & Codding Services
//               </option>
//               <option value="Healthcare Claims Adjudication">
//                 Healthcare Claims Adjudication
//               </option>
//               <option value="Insurance Eligibility Services">
//                 Insurance Eligibility Services
//               </option>
//               <option value="Medical Transcription Services">
//                 Medical Transcription Services
//               </option>
//             </select>

//             <button type="submit">Schedule Free Consultation</button>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Consultation;

// *--------------- 1 part important --------------

import React, { useState } from "react";
import axios from "axios";
import { ArrowRight, CheckCircle2 } from "lucide-react";
const Consultation = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ FIXED SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "http://localhost:3001/api/saveConsultation", // ✅ correct port
        formData,
      );

      alert("Form Submitted Successfully ✅");

      // reset form
      setFormData({
        fullname: "",
        email: "",
        phone: "",
        service: "",
      });
    } catch (err) {
      console.error(err);
      alert("Error submitting form ❌");
    }
  };

  return (
    <section className="py-24 px-8 max-w-7xl mx-auto">
      <div className="bg-[#0f172a] rounded-3xl overflow-hidden shadow-2xl relative">
        {/* Subtle gradient glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="grid md:grid-cols-2 gap-12 p-10 md:p-16 relative z-10">
          {/* Left Content */}
          <div className="text-white space-y-8">
            <div className="inline-block px-3 py-1 bg-blue-900/50 text-blue-400 border border-blue-800 rounded-full text-sm font-semibold">
              Get Started Today
            </div>
            <h2 className="text-4xl font-bold">
              Ready to Optimize{" "}
              <span className="text-blue-500">
                Your
                <br />
                Revenue?
              </span>
            </h2>
            <p className="text-slate-400 text-lg">
              Join 500+ healthcare organizations already using NexGHealth to
              achieve faster reimbursements, fewer denials, and complete revenue
              cycle visibility.
            </p>
            <ul className="space-y-4">
              {[
                "Free 30-day trial — no credit card required",
                "Dedicated onboarding specialist",
                "HIPAA compliant infrastructure",
                "24/7 expert support",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-blue-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right Form */}
          <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 backdrop-blur-sm">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Dr. Sarah Mitchell"
                    onChange={handleChange}
                    value={formData.fullname}
                    className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">
                    Work Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="sarah@hospital.org"
                    onChange={handleChange}
                    value={formData.email}
                    required
                    className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition"
                  />
                  {formData.email &&
                    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) && (
                      <p style={{ color: "red" }}>
                        Please enter a valid email address
                      </p>
                    )}
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) => {
                    const value = e.target.value.replace(/\D/g, ""); // sirf numbers
                    if (value.length <= 10) {
                      setFormData({ ...formData, phone: value });
                    }
                  }}
                  required
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300">
                  Service
                </label>
                <select
                  rows="3"
                  placeholder="Tell us about your current RCM challenges..."
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition resize-none"
                >
                  <option value="">Services</option>
                  <option value="Medical Billing Services">
                    Medical Billing Services
                  </option>
                  <option value="Medical Empanelment Services">
                    Medical Empanelment Services
                  </option>
                  <option value="Insurance Verification Services">
                    Insurance Verification Services
                  </option>
                  <option value="Revenue Cycle Management Services">
                    Revenue Cycle Management Services
                  </option>
                  <option value="Medical Billing & Codding Services">
                    Medical Billing & Codding Services
                  </option>
                  <option value="Healthcare Claims Adjudication">
                    Healthcare Claims Adjudication
                  </option>
                  <option value="Insurance Eligibility Services">
                    Insurance Eligibility Services
                  </option>
                  <option value="Medical Transcription Services">
                    Medical Transcription Services
                  </option>
                </select>
              </div>
              <button
                type="submit"
                // onClick={handleSubmit}
                className="w-full bg-blue-600 text-white font-semibold py-4 rounded-lg hover:bg-blue-700 transition flex justify-center items-center gap-2"
              >
                Request a Demo <ArrowRight className="w-5 h-5" />
              </button>
              <p className="text-center text-xs text-slate-500">
                By submitting, you agree to our Terms of Service and Privacy
                Policy.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Consultation;
