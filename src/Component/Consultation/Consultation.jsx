import React from "react";
import "./Consultation.css";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Consultation = () => {
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
            {/* <p>
              <FaMapMarkerAlt className="icon" /> 123 Healthcare Blvd, Medical City, MC 12345
            </p> */}
          </div>
        </div>

        {/* RIGHT SIDE (FORM) */}
        <div className="consultation-form">
          <h3>Get Your Free RCM Assessment</h3>
          <form>
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email Address" required />
            <input type="tel" placeholder="Phone Number" required />
            {/* <input type="text" placeholder="Practice/Organization Name" required /> */}
            <select required>
              <option value="">Services</option>
              <option value="Medical Billing Services">Medical Billing Services</option>
              <option value="Medical Empanelment Services">Medical Empanelment Services</option>
              <option value="Insurance Verification Services">Insurance Verification Services</option>
              <option value="Revenue Cycle Management Services">Revenue Cycle Management Services</option>
              <option value="Medical Billing & Codding Services">Medical Billing & Codding Services</option>
              <option value="Healthcare Claims Adjudication">Healthcare Claims Adjudication</option>
              <option value="Insurance Eligibility Services">Insurance Eligibility Services</option>             
              <option value="Medical Transcription Services">Medical Transcription Services</option>
            </select>
            <button type="submit">Schedule Free Consultation</button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Consultation;
