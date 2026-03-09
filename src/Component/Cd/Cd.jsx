import React, { useState } from "react";
import "./DoctorDashboard.css";

const DoctorForm = () => {
  const [form, setForm] = useState({
    npi: "",
    firstName: "",
    lastName: "",
    credential: "",
    entityType: "1",
    street: "",
    city: "",
    state: "",
    zip: "",
    phone: "",
    specialty: "",
    taxonomy: "",
    license: "",
    licenseState: "",
    payer: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Doctor Form Data:", form);
    alert("Form submitted (Pending for review)");
  };

  return (
    <div className="doctor-form-container">
      <h1>Doctor Credentialing Form</h1>
      <p className="subtitle">
        Submit your details for insurance credentialing
      </p>

      <form onSubmit={handleSubmit}>
        {/* BASIC INFO */}
        <section>
          <h2>Basic Information</h2>
          <div className="grid">
            <input
              name="npi"
              placeholder="NPI Number"
              onChange={handleChange}
              required
            />
            <input
              name="firstName"
              placeholder="First Name"
              onChange={handleChange}
            />
            <input
              name="lastName"
              placeholder="Last Name"
              onChange={handleChange}
            />
            <select name="credential" onChange={handleChange}>
              <option value="">Credential</option>
              <option>MD</option>
              <option>DO</option>
              <option>NP</option>
            </select>
          </div>
        </section>

        {/* ADDRESS */}
        <section>
          <h2>Practice Address</h2>
          <div className="grid">
            <input
              name="street"
              placeholder="Street Address"
              onChange={handleChange}
            />
            <input name="city" placeholder="City" onChange={handleChange} />
            <input name="state" placeholder="State" onChange={handleChange} />
            <input name="zip" placeholder="ZIP Code" onChange={handleChange} />
            <input name="phone" placeholder="Phone" onChange={handleChange} />
          </div>
        </section>

        {/* SPECIALTY */}
        <section>
          <h2>Specialty & License</h2>
          <div className="grid">
            <input
              name="specialty"
              placeholder="Specialty (e.g. Cardiology)"
              onChange={handleChange}
            />
            <input
              name="taxonomy"
              placeholder="Taxonomy Code"
              onChange={handleChange}
            />
            <input
              name="license"
              placeholder="License Number"
              onChange={handleChange}
            />
            <input
              name="licenseState"
              placeholder="License State"
              onChange={handleChange}
            />
          </div>
        </section>

        {/* INSURANCE */}
        <section>
          <h2>Insurance Payer</h2>
          <select name="payer" onChange={handleChange}>
            <option value="">Select Payer</option>
            <option>Medicare</option>
            <option>Blue Cross</option>
            <option>Aetna</option>
          </select>
        </section>

        <button type="submit" className="submit-btn">
          Submit for Credentialing
        </button>
      </form>
    </div>
  );
};

export default DoctorForm;
