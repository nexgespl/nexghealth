// // import React from "react";

// // const InsuranceElig = () => {
// //   return <></>;
// // };

// // export default InsuranceElig;

// import React from "react";

// // InsuranceEligibilityComponent.jsx
// // Single-file React component with manual (inline) CSS styles.
// // Usage: import and render <InsuranceEligibilityComponent /> in your app.

// const styles = {
//   root: {
//     fontFamily: "Inter, Roboto, -apple-system, 'Segoe UI', sans-serif",
//     color: "#0f172a",
//     lineHeight: 1.5,
//     padding: "32px",
//     background: "#f8fafc",
//     minHeight: "100vh",
//     boxSizing: "border-box",
//   },
//   card: {
//     maxWidth: 1100,
//     margin: "0 auto",
//     background: "#ffffff",
//     borderRadius: 12,
//     boxShadow: "0 6px 18px rgba(15,23,42,0.06)",
//     overflow: "hidden",
//   },
//   header: {
//     padding: "36px 40px",
//     borderBottom: "1px solid #eef2f7",
//     background:
//       "linear-gradient(90deg, rgba(99,102,241,0.06), rgba(16,185,129,0.02))",
//   },
//   title: {
//     margin: 0,
//     fontSize: 22,
//     letterSpacing: "-.01em",
//     color: "#0b1220",
//   },
//   subtitle: {
//     margin: "8px 0 0",
//     color: "#4b5563",
//     fontSize: 14,
//   },
//   content: {
//     padding: "28px 40px",
//     display: "grid",
//     gridTemplateColumns: "1fr 340px",
//     gap: 28,
//   },
//   main: {
//     fontSize: 15,
//     color: "#0f172a",
//   },
//   section: {
//     marginBottom: 18,
//   },
//   h3: {
//     fontSize: 18,
//     margin: "12px 0",
//     color: "#061224",
//   },
//   p: {
//     margin: "8px 0 12px",
//     color: "#334155",
//   },
//   ul: {
//     paddingLeft: 18,
//     margin: "6px 0 12px",
//   },
//   aside: {
//     background: "#fbfdff",
//     border: "1px solid #eef2f7",
//     borderRadius: 10,
//     padding: 18,
//     height: "fit-content",
//   },
//   cta: {
//     display: "inline-block",
//     marginTop: 12,
//     padding: "10px 14px",
//     borderRadius: 8,
//     background: "#2563eb",
//     color: "#fff",
//     textDecoration: "none",
//     fontWeight: 600,
//   },
//   smallNote: {
//     fontSize: 13,
//     color: "#64748b",
//     marginTop: 10,
//   },
//   benefitsGrid: {
//     display: "grid",
//     gridTemplateColumns: "repeat(2, minmax(0,1fr))",
//     gap: 10,
//     marginTop: 8,
//   },
//   benefitItem: {
//     padding: 10,
//     borderRadius: 8,
//     background: "#f8fafc",
//     border: "1px solid #eef2f7",
//     fontSize: 14,
//   },
//   footer: {
//     padding: "18px 40px",
//     borderTop: "1px solid #eef2f7",
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//   },
// };

// export default function InsuranceEligibilityComponent() {
//   return (
//     <div style={styles.root}>
//       <div style={styles.card}>
//         <header style={styles.header}>
//           <h1 style={styles.title}>
//             Insurance Eligibility Services — Verify, Protect & Optimize Revenue
//             from Day One
//           </h1>
//           <p style={styles.subtitle}>
//             Verify coverage, reduce denials, and give patients cost transparency
//             before care is delivered.
//           </p>
//         </header>

//         <div style={styles.content}>
//           <main style={styles.main}>
//             <section style={styles.section}>
//               <h3 style={styles.h3}>
//                 What Is Insurance Eligibility Verification?
//               </h3>
//               <p style={styles.p}>
//                 Insurance eligibility verification is the process of confirming
//                 a patient’s health-insurance coverage, benefits and policy
//                 status before services are provided — including whether the
//                 patient’s plan is active, what services are covered, and what
//                 out-of-pocket costs (deductibles, copays, coinsurance) or
//                 prerequisites (e.g. prior-authorization) apply.
//               </p>
//               <p style={styles.p}>
//                 This upfront check helps ensure that both provider and patient
//                 have clarity about coverage — which is critical for accurate
//                 billing, claims submission, and minimizing denials or surprise
//                 bills.
//               </p>
//             </section>

//             <section style={styles.section}>
//               <h3 style={styles.h3}>
//                 Why Insurance Eligibility Services Matter
//               </h3>
//               <ul style={styles.ul}>
//                 <li>Reduce Claim Denials & Submission Errors.</li>
//                 <li>Improve Revenue Cycle & Cash Flow.</li>
//                 <li>Enhance Patient Experience & Transparency.</li>
//                 <li>Reduce Administrative Burden.</li>
//                 <li>Compliance & Accuracy.</li>
//               </ul>
//             </section>

//             <section style={styles.section}>
//               <h3 style={styles.h3}>
//                 What Our Insurance Eligibility Services Include
//               </h3>
//               <p style={styles.p}>
//                 When you partner with us, we handle full-service insurance
//                 eligibility verification on your behalf. Our services cover:
//               </p>
//               <ul style={styles.ul}>
//                 <li>
//                   Real-time insurance coverage checks across a wide range of
//                   payers (commercial, Medicare, Medicaid, etc.).
//                 </li>
//                 <li>
//                   Verification of plan benefits: services covered, limits,
//                   exclusions, and benefit levels.
//                 </li>
//                 <li>
//                   Identification of out-of-pocket cost obligations: copays,
//                   deductibles, coinsurances, coverage gaps.
//                 </li>
//                 <li>
//                   Checking for prior-authorization or referral requirements.
//                 </li>
//                 <li>
//                   Verification of network status (in-network vs out-of-network).
//                 </li>
//                 <li>
//                   Documentation and audit-ready record-keeping of all
//                   verification results.
//                 </li>
//               </ul>
//             </section>

//             <section style={styles.section}>
//               <h3 style={styles.h3}>How Our Service Works — Step by Step</h3>
//               <ol style={{ paddingLeft: 18, marginTop: 8 }}>
//                 <li>
//                   <strong>Patient Intake & Info Collection</strong> — Gather
//                   demographics, policy number, carrier at scheduling/check-in.
//                 </li>
//                 <li>
//                   <strong>Real-Time Eligibility Check</strong> — Query payer
//                   portals or networks to confirm coverage & restrictions.
//                 </li>
//                 <li>
//                   <strong>Benefit & Cost Assessment</strong> — Determine covered
//                   services and expected patient financial responsibility.
//                 </li>
//                 <li>
//                   <strong>Authorization & Referral Verification</strong> — Flag
//                   and obtain prior-authorization when required.
//                 </li>
//                 <li>
//                   <strong>
//                     Patient Communication & Financial Transparency
//                   </strong>{" "}
//                   — Share coverage & cost details before care.
//                 </li>
//                 <li>
//                   <strong>Documentation & Audit Trail</strong> — Keep records of
//                   verification results for billing and compliance.
//                 </li>
//                 <li>
//                   <strong>Pre-Claim Submission Checkpoint</strong> — Use
//                   verified data to submit cleaner claims.
//                 </li>
//               </ol>
//             </section>

//             <section style={styles.section}>
//               <h3 style={styles.h3}>Who Benefits</h3>
//               <p style={styles.p}>
//                 Our service is ideal for a wide variety of healthcare providers,
//                 including:
//               </p>
//               <ul style={styles.ul}>
//                 <li>Physician practices (single- or multi-specialty)</li>
//                 <li>Ambulatory care centers, outpatient clinics</li>
//                 <li>Surgical centers and ambulatory surgery centers (ASCs)</li>
//                 <li>Specialty clinics (therapy, dental, behavioral health)</li>
//                 <li>Hospitals and larger health-system networks</li>
//               </ul>
//             </section>

//             <section style={styles.section}>
//               <h3 style={styles.h3}>Why Choose Us</h3>
//               <p style={styles.p}>
//                 Expertise and Reliability — Experienced eligibility verification
//                 staff familiar with payer rules, benefit plans, and compliance
//                 requirements.
//               </p>
//               <div style={styles.benefitsGrid}>
//                 <div style={styles.benefitItem}>
//                   Speed — Real-time or scheduled checks
//                 </div>
//                 <div style={styles.benefitItem}>
//                   Comprehensive Coverage — Benefits, costs, authorizations
//                 </div>
//                 <div style={styles.benefitItem}>
//                   Transparent Patient Communication
//                 </div>
//                 <div style={styles.benefitItem}>
//                   Reduced Administrative Load
//                 </div>
//               </div>
//             </section>
//           </main>

//           <aside style={styles.aside}>
//             <h4 style={{ margin: 0 }}>Ready to Secure Coverage?</h4>
//             <p style={styles.smallNote}>
//               Don’t risk claim denials or surprise billing. Contact us today to
//               set up insurance eligibility verification for your practice.
//             </p>
//             <a style={styles.cta} href="#contact">
//               Contact Us
//             </a>

//             <div style={{ marginTop: 14 }}>
//               <strong>Service Snapshot</strong>
//               <ul style={{ ...styles.ul, marginTop: 8 }}>
//                 <li>Real-time coverage checks</li>
//                 <li>Benefit & cost breakdowns</li>
//                 <li>Authorization tracking</li>
//                 <li>Audit-ready documentation</li>
//               </ul>
//             </div>
//           </aside>
//         </div>

//         <footer style={styles.footer}>
//           <div style={{ fontSize: 14, color: "#334155" }}>
//             Start every patient encounter with confidence.
//           </div>
//           <div style={{ textAlign: "right" }}>
//             <div style={{ fontSize: 13, color: "#64748b" }}>
//               We’ll review your needs and integrate with your workflows.
//             </div>
//           </div>
//         </footer>
//       </div>
//     </div>
//   );
// }

import React from "react";
import "./InsuranceElig.css";

const InsuranceElig = () => {
  return (
    <div className="eligibility-container">
      <h1 className="eligibility-title">
        Insurance Eligibility Services — Verify, Protect & Optimize Revenue from
        Day One
      </h1>

      <section className="eligibility-section">
        <h2>What Is Insurance Eligibility Verification?</h2>
        <p>
          Insurance eligibility verification is the process of confirming a
          patient’s health-insurance coverage, benefits and policy status before
          services are provided — including whether the patient’s plan is
          active, what services are covered, and what out-of-pocket costs
          (deductibles, copays, coinsurance) or prerequisites (e.g.
          prior-authorization) apply.
        </p>
        <p>
          This upfront check helps ensure that both provider and patient have
          clarity about coverage — which is critical for accurate billing,
          claims submission, and minimizing denials or surprise bills.
        </p>
      </section>

      <section className="eligibility-section">
        <h2>Why Insurance Eligibility Services Matter</h2>
        <ul>
          <li>Reduce Claim Denials & Submission Errors</li>
          <li>Improve Revenue Cycle & Cash Flow</li>
          <li>Enhance Patient Experience & Transparency</li>
          <li>Reduce Administrative Burden</li>
          <li>Compliance & Accuracy</li>
        </ul>
      </section>

      <section className="eligibility-section">
        <h2>What Our Insurance Eligibility Services Include</h2>
        <ul>
          <li>Real-time insurance coverage checks (active/inactive status)</li>
          <li>
            Verification of plan benefits, limits, exclusions, coverage duration
          </li>
          <li>Identification of out-of-pocket cost obligations</li>
          <li>Checking for prior-authorization or referral requirements</li>
          <li>Verification of network status (in-network vs out-of-network)</li>
          <li>Documentation and audit-ready record-keeping</li>
        </ul>
      </section>

      <section className="eligibility-section">
        <h2>How Our Service Works — Step by Step</h2>
        <ul>
          <li>Patient Intake & Info Collection</li>
          <li>
            Real-Time Eligibility Check (or Batch / Pre-visit Verification)
          </li>
          <li>Benefit & Cost Assessment</li>
          <li>Authorization & Referral Verification (if needed)</li>
          <li>Patient Communication & Financial Transparency</li>
          <li>Documentation & Audit Trail</li>
          <li>Pre-Claim Submission Checkpoint</li>
        </ul>
      </section>

      <section className="eligibility-section">
        <h2>Who Benefits from Our Insurance Eligibility Services</h2>
        <ul>
          <li>Physician practices (single- or multi-specialty)</li>
          <li>Ambulatory care centers, outpatient clinics</li>
          <li>Surgical centers and ambulatory surgery centers (ASCs)</li>
          <li>Specialty clinics (therapy, dental, behavioral health, etc.)</li>
          <li>Hospitals and larger health-system networks</li>
        </ul>
      </section>

      <section className="eligibility-section">
        <h2>Why Choose Us as Your Insurance Eligibility Partner</h2>
        <ul>
          <li>Expertise and Reliability</li>
          <li>Speed — Real-Time or Scheduled Checks</li>
          <li>Comprehensive Coverage — Benefits, Costs, Authorizations</li>
          <li>Transparent Communication with Patients</li>
          <li>Reduced Administrative Load</li>
          <li>Improved Revenue Cycle and Cash Flow</li>
        </ul>
      </section>

      <section className="eligibility-section">
        <h2>Ready to Secure Coverage and Protect Your Revenue Cycle?</h2>
        <p>
          Don’t risk claim denials or surprise billing. Contact us today to set
          up insurance eligibility verification for your practice — and start
          every patient encounter with confidence. We’ll review your needs,
          integrate with your workflows, and help you deliver care with
          financial certainty.
        </p>
      </section>
    </div>
  );
};

export default InsuranceElig;
