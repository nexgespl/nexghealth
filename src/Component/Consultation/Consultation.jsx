import React, { useState } from "react";
import "./Consultation.css";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import axios from "axios";

const Consultation = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    service: "",
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5000/saveConsultation", formData)
      .then((res) => {
        alert("Form Submitted Successfully!");
      })
      .catch((err) => {
        alert("Error submitting form");
      });
  };

  return (
    <section className="consultation-section">
      <div className="consultation-container">
        {/* LEFT SIDE */}
        <div className="consultation-left">
          <h2>
            Ready to Optimize Your <br /> Revenue Cycle?
          </h2>
          <p>
            Get a free consultation and discover how much revenue you could be
            missing. Our experts will analyze your current processes and provide
            actionable recommendations.
          </p>

          <div className="contact-info">
            <p>
              <FaPhoneAlt className="icon" /> +91 882-690-0551
            </p>
            <p>
              <FaEnvelope className="icon" /> info@nexg.in
            </p>
          </div>
        </div>

        {/* RIGHT SIDE (FORM) */}
        <div className="consultation-form">
          <h3>Get Your Free RCM Assessment</h3>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="fullname"
              placeholder="Full Name"
              value={formData.fullname}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />

            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
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

            <button type="submit">Schedule Free Consultation</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Consultation;

// import React from "react";
// import "./Consultation.css";
// import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

// const Consultation = () => {
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
//               <FaPhoneAlt className="icon" /> +91 882-690-0551
//             </p>
//             <p>
//               <FaEnvelope className="icon" /> info@nexg.in
//             </p>
//             {/* <p>
//               <FaMapMarkerAlt className="icon" /> 123 Healthcare Blvd, Medical City, MC 12345
//             </p> */}
//           </div>
//         </div>

//         {/* RIGHT SIDE (FORM) */}
//         <div className="consultation-form">
//           <h3>Get Your Free RCM Assessment</h3>
//           <form>
//             <input type="text" placeholder="Full Name" required />
//             <input type="email" placeholder="Email Address" required />
//             <input type="tel" placeholder="Phone Number" required />
//             {/* <input type="text" placeholder="Practice/Organization Name" required /> */}
//             <select required>
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
