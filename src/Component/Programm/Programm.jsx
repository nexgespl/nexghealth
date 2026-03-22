// import React from "react";
// import "./Programm.css";
// import { Link } from "react-router-dom";

// import MB from "../../assets/MB.png";
// import ME from "../../assets/ME.png";
// import I from "../../assets/I.png";
// import R from "../../assets/R.png";
// import H from "../../assets/H.png";
// import medical from "../../assets/medical.png";
// import IN from "../../assets/IN.png";
// import MT from "../../assets/MT.png";

// const Programm = () => {
//   return (
//     <>
//       <div className="title">
//         <h1>Our Services</h1>
//         <p>Empowering Healthcare with Accuracy, Efficiency & Excellence.</p>

//         <div className="programm">
//           {/* 1. Medical Billing */}
//           <Link to="/medical-billing" className="programms">
//             <img src={MB} alt="" />
//             <h4>Medical Billing Services</h4>
//           </Link>

//           {/* 2. Empanelment */}
//           <Link to="/empanelment" className="programms">
//             <img src={ME} alt="" />
//             <h4>Medical Empanelment Services</h4>
//           </Link>

//           {/* 3. Insurance Verification */}
//           <Link to="/insurance-verification" className="programms">
//             <img src={I} alt="" />
//             <h4>Insurance Verification Services</h4>
//           </Link>

//           {/* 4. Revenue Cycle */}
//           <Link to="/rcm" className="programms">
//             <img src={R} alt="" />
//             <h4>Revenue Cycle Management Services</h4>
//           </Link>

//           {/* 5. Healthcare Claims */}
//           <Link to="/claims-adjudication" className="programms">
//             <img src={H} alt="" />
//             <h4>Healthcare Claims Adjudication</h4>
//           </Link>

//           {/* 6. Billing & Coding */}
//           <Link to="/coding" className="programms">
//             <img src={medical} alt="" />
//             <h4>Medical Billing & Coding Services</h4>
//           </Link>

//           {/* 7. Insurance Eligibility */}
//           <Link to="/eligibility" className="programms">
//             <img src={IN} alt="" />
//             <h4>Insurance Eligibility Services</h4>
//           </Link>

//           {/* 8. Medical Transcription */}
//           <Link to="/transcription" className="programms">
//             <img src={MT} alt="" />
//             <h4>Medical Transcription Services</h4>
//           </Link>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Programm;

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

const Programm = () => {
  return (
    <section className="py-24 px-8 max-w-7xl mx-auto bg-slate-50">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4">
          Platform Features
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Maximize Operational Efficiency
        </h2>
        <p className="text-slate-600">
          Every tool you need to optimize your revenue cycle — from intake to
          reimbursement — built into a single, intelligent platform.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-6">
        {/* Feature 1 */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition">
          <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
            <FileText className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold mb-3">Claims Processing</h3>
          <p className="text-slate-600 text-sm mb-6 leading-relaxed">
            Automate end-to-end claims submission with intelligent scrubbing and
            real-time payer edits. Reduce rework and accelerate first-pass
            acceptance rates dramatically.
          </p>
          <button className="text-blue-600 font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all">
            Learn more <ArrowRight className="w-4 h-4" />
          </button>
        </div>
        {/* Feature 2 */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition">
          <div className="w-12 h-12 bg-teal-50 text-teal-600 rounded-xl flex items-center justify-center mb-6">
            <BarChart3 className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold mb-3">Revenue Analytics</h3>
          <p className="text-slate-600 text-sm mb-6 leading-relaxed">
            Gain deep visibility into your revenue cycle with customizable
            dashboards and predictive analytics. Identify trends, bottlenecks,
            and opportunities in real time.
          </p>
          <button className="text-teal-600 font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all">
            Learn more <ArrowRight className="w-4 h-4" />
          </button>
        </div>
        {/* Feature 3 */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition">
          <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center mb-6">
            <Users className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold mb-3">Patient Billing</h3>
          <p className="text-slate-600 text-sm mb-6 leading-relaxed">
            Streamline patient financial experiences with transparent billing,
            flexible payment plans, and automated statement delivery that
            improves collection rates.
          </p>
          <button className="text-purple-600 font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all">
            Learn more <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 max-w-4xl mx-auto gap-6">
        {/* Feature 4 */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition">
          <div className="w-12 h-12 bg-red-50 text-red-600 rounded-xl flex items-center justify-center mb-6">
            <ShieldAlert className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold mb-3">Denial Management</h3>
          <p className="text-slate-600 text-sm mb-6 leading-relaxed">
            Proactively prevent and resolve claim denials with AI-driven root
            cause analysis. Track, appeal, and overturn denials with a
            structured workflow engine.
          </p>
          <button className="text-blue-600 font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all">
            Learn more <ArrowRight className="w-4 h-4" />
          </button>
        </div>
        {/* Feature 5 */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition">
          <div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-xl flex items-center justify-center mb-6">
            <FileCheck2 className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold mb-3">Compliance & Reporting</h3>
          <p className="text-slate-600 text-sm mb-6 leading-relaxed">
            Stay audit-ready with automated compliance monitoring and regulatory
            reporting. Generate payer-specific reports and maintain HIPAA
            oversight effortlessly.
          </p>
          <button className="text-orange-600 font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all">
            Learn more <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Programm;
