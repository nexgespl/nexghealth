import React from "react";
import "./Programm.css";
import { Link } from "react-router-dom";

import MB from "../../assets/MB.png";
import ME from "../../assets/ME.png";
import I from "../../assets/I.png";
import R from "../../assets/R.png";
import H from "../../assets/H.png";
import medical from "../../assets/medical.png";
import IN from "../../assets/IN.png";
import MT from "../../assets/MT.png";

const Programm = () => {
  return (
    <>
      <div className="title">
        <h1>Our Services</h1>
        <p>Empowering Healthcare with Accuracy, Efficiency & Excellence.</p>

        <div className="programm">
          {/* 1. Medical Billing */}
          <Link to="/medical-billing" className="programms">
            <img src={MB} alt="" />
            <h4>Medical Billing Services</h4>
          </Link>

          {/* 2. Empanelment */}
          <Link to="/empanelment" className="programms">
            <img src={ME} alt="" />
            <h4>Medical Empanelment Services</h4>
          </Link>

          {/* 3. Insurance Verification */}
          <Link to="/insurance-verification" className="programms">
            <img src={I} alt="" />
            <h4>Insurance Verification Services</h4>
          </Link>

          {/* 4. Revenue Cycle */}
          <Link to="/rcm" className="programms">
            <img src={R} alt="" />
            <h4>Revenue Cycle Management Services</h4>
          </Link>

          {/* 5. Healthcare Claims */}
          <Link to="/claims-adjudication" className="programms">
            <img src={H} alt="" />
            <h4>Healthcare Claims Adjudication</h4>
          </Link>

          {/* 6. Billing & Coding */}
          <Link to="/coding" className="programms">
            <img src={medical} alt="" />
            <h4>Medical Billing & Coding Services</h4>
          </Link>

          {/* 7. Insurance Eligibility */}
          <Link to="/eligibility" className="programms">
            <img src={IN} alt="" />
            <h4>Insurance Eligibility Services</h4>
          </Link>

          {/* 8. Medical Transcription */}
          <Link to="/transcription" className="programms">
            <img src={MT} alt="" />
            <h4>Medical Transcription Services</h4>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Programm;

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
//           <Link to="/medical-billing" className="programms">
//             <img src={MB} alt="" />
//             <h4>Medical Billing Services</h4>
//           </Link>

//           <Link to="/Medical Empanelment" className="programms">
//             <img src={ME} alt="" />
//             <h4>Medical Empanelment Services</h4>
//           </Link>

//           <Link to="/Insurance Verification" className="programms">
//             <img src={I} alt="" />
//             <h4>Insurance Verification Services</h4>
//           </Link>

//           <Link to="/Revenue Cycle" className="programms">
//             <img src={R} alt="" />
//             <h4>Revenue Cycle Management Services</h4>
//           </Link>

//           <Link to="/Healthcare Claims Adj" className="programms">
//             <img src={H} alt="" />
//             <h4>Healthcare Claims Adjudication</h4>
//           </Link>

//           <Link to="/Medical BIlling Codding" className="programms">
//             <img src={medical} alt="" />
//             <h4>Medical Billing & Coding Services</h4>
//           </Link>

//           <Link to="/Insurance Elig" className="programms">
//             <img src={IN} alt="" />
//             <h4>Insurance Eligibility Services</h4>
//           </Link>

//           <Link to="/Medical Transcription" className="programms">
//             <img src={MT} alt="" />
//             <h4>Medical Transcription Services</h4>
//           </Link>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Programm;
