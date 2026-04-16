// import React from "react";

// const MedicalTranscription = () => {
//   return <div>MedicalTranscription</div>;
// };

// export default MedicalTranscription;

// import React from "react";
// import "./MedicalTranscription.css";

// const MedicalTranscription = () => {
//   return (
//     <div className="mt-wrapper">
//       <div className="mt-container">
//         <h2 className="mt-title">
//           Medical Transcription Services — Accurate. Reliable. Secure.
//         </h2>

//         <h3 className="mt-heading">What Is Medical Transcription?</h3>
//         <p>
//           Medical transcription is the process of converting voice-recorded
//           dictations (doctor notes, consultations, discharge summaries,
//           procedure reports, etc.) into written, structured medical
//           documentation that becomes part of a patient’s medical record.
//         </p>

//         <p>
//           A quality medical transcription service bridges the gap between
//           clinician spoken word and official documentation — ensuring clarity,
//           completeness, and compliance with medical, legal, and billing
//           standards.
//         </p>

//         <h3 className="mt-heading">Why Accurate Transcription Matters</h3>
//         <ul>
//           <li>
//             <strong>Save clinician time & reduce administrative burden</strong>{" "}
//             — Physicians and clinical staff avoid spending hours typing notes or
//             reports; instead, they dictate, and trained transcriptionists handle
//             documentation. This allows clinicians to devote more time to patient
//             care.
//           </li>

//           <li>
//             <strong>Improve documentation accuracy & completeness</strong> —
//             Professional transcriptionists are familiar with medical
//             terminology, formatting, and typically follow rigorous
//             quality-control procedures to minimize errors.
//           </li>

//           <li>
//             <strong>Faster turnaround & efficient workflows</strong> —
//             Outsourced transcription services often deliver transcribed reports
//             promptly — sometimes within hours or 24 h — enabling timely access
//             for other staff, facilitating continuity of care, billing, or
//             follow-up.
//           </li>

//           <li>
//             <strong>Cost-effective compared with in-house staff</strong> —
//             Outsourcing avoids hiring full-time transcription staff, investing
//             in transcription infrastructure, software licensing, and ongoing
//             maintenance/training.
//           </li>

//           <li>
//             <strong>HIPAA compliance and data security</strong> — Reliable
//             transcription providers implement secure data handling, encryption,
//             audit trails, and confidentiality measures to protect patient
//             information.
//           </li>

//           <li>
//             <strong>Scalability and flexibility</strong> — Transcription volume
//             can be scaled up or down depending on demand without permanent
//             overhead costs.
//           </li>
//         </ul>

//         <h3 className="mt-heading">
//           What Our Medical Transcription Services Include
//         </h3>
//         <ul>
//           <li>
//             <strong>Audio/Voice Dictation Processing</strong> — Receive
//             dictations through phone, secure portal, or EHR-integrated tools.
//           </li>

//           <li>
//             <strong>Professional Transcription by Trained Specialists</strong> —
//             Transcriptions by personnel trained in medical terminology and
//             report structure.
//           </li>

//           <li>
//             <strong>Quality Assurance & Multi-Level Review</strong> — Every
//             transcript passes through checks and proofreading for accuracy.
//           </li>

//           <li>
//             <strong>HIPAA-Compliant Data Handling</strong> — Secure
//             transmission, encrypted storage, and confidentiality measures.
//           </li>

//           <li>
//             <strong>Fast Turnaround & Timely Delivery</strong> — Often within 24
//             hours.
//           </li>

//           <li>
//             <strong>Flexible Output Options & EHR Integration</strong> — Secure
//             FTP, encrypted drive, or direct EHR insertion.
//           </li>

//           <li>
//             <strong>Support for Various Report Types</strong> — Clinical notes,
//             discharge summaries, operative reports, etc.
//           </li>
//         </ul>

//         <h3 className="mt-heading">
//           Who Can Benefit From Medical Transcription Services
//         </h3>
//         <ul>
//           <li>Physician practices (small, medium, large)</li>
//           <li>Multi-specialty clinics and outpatient centers</li>
//           <li>Ambulatory surgery centers (ASCs)</li>
//           <li>Diagnostic and imaging centers</li>
//           <li>Hospitals and large health systems</li>
//           <li>Specialty clinics (therapy, behavioral health, dental, etc.)</li>
//         </ul>

//         <p>
//           Whether you operate a solo-practice or a multispecialty facility, if
//           you need accurate, timely, and compliant clinical documentation —
//           medical transcription services can enhance your efficiency and support
//           quality patient care.
//         </p>

//         <h3 className="mt-heading">
//           Why Choose Us as Your Transcription Partner
//         </h3>
//         <ul>
//           <li>
//             Certified, experienced transcriptionists with strong knowledge of
//             medical terminology.
//           </li>
//           <li>
//             Robust quality-control pipelines ensuring accuracy and completeness.
//           </li>
//           <li>Secure, HIPAA-compliant environment for sensitive data.</li>
//           <li>Fast turnaround times.</li>
//           <li>Flexible and scalable services.</li>
//           <li>Seamless EHR/EMR integration.</li>
//           <li>Cost-effective pricing — pay per report.</li>
//         </ul>

//         <h3 className="mt-heading">
//           Get Started — Streamline Your Documentation
//         </h3>
//         <p>
//           Let us handle the transcription — so you can focus on delivering
//           quality care.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default MedicalTranscription;

import React from "react";

const MedicalTranscription = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-white min-h-screen py-12 px-4">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-2xl p-8 md:p-12">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-black-700 mb-6">
          Medical Transcription Services — Accurate. Reliable. Secure.
        </h1>

        {/* Section */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">
          What Is Medical Transcription?
        </h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Medical transcription is the process of converting voice-recorded
          dictations into structured medical documentation that becomes part of
          a patient’s record.
        </p>
        <p className="text-gray-600 leading-relaxed mb-6">
          It ensures clarity, completeness, and compliance with medical, legal,
          and billing standards.
        </p>

        {/* Benefits */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Why Accurate Transcription Matters
        </h2>

        <ul className="space-y-3 mb-8">
          {[
            "Save clinician time & reduce administrative burden",
            "Improve documentation accuracy & completeness",
            "Faster turnaround & efficient workflows",
            "Cost-effective compared with in-house staff",
            "HIPAA compliance and data security",
            "Scalability and flexibility",
          ].map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-3 bg-blue-50 p-4 rounded-lg"
            >
              <span className="text-blue-600 font-bold">✔</span>
              <span className="text-gray-700">{item}</span>
            </li>
          ))}
        </ul>

        {/* Services */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          What Our Medical Transcription Services Include
        </h2>

        <ul className="grid md:grid-cols-2 gap-4 mb-8">
          {[
            "Audio/Voice Dictation Processing",
            "Professional Transcription by Specialists",
            "Quality Assurance & Multi-Level Review",
            "HIPAA-Compliant Data Handling",
            "Fast Turnaround",
            "EHR Integration",
            "Support for Various Report Types",
          ].map((item, i) => (
            <li
              key={i}
              className="bg-white border border-gray-200 shadow-sm rounded-xl p-4 hover:shadow-md transition"
            >
              {item}
            </li>
          ))}
        </ul>

        {/* Who Benefits */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Who Can Benefit
        </h2>

        <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
          <li>Physician practices</li>
          <li>Multi-specialty clinics</li>
          <li>Ambulatory surgery centers</li>
          <li>Hospitals & health systems</li>
          <li>Diagnostic centers</li>
        </ul>

        {/* CTA */}
        <div className="bg-blue-600 text-white p-6 rounded-xl text-center mt-8">
          <h3 className="text-xl font-semibold mb-2">
            Get Started — Streamline Your Documentation
          </h3>
          <p className="mb-4">
            Let us handle transcription so you can focus on patient care.
          </p>
          <button className="bg-white text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default MedicalTranscription;
