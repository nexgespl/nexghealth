// import React from "react";
// // import "./Programm.css";
// import { Link } from "react-router-dom";

// import MB from "../../assets/MB.png";
// import ME from "../../assets/ME.png";
// import I from "../../assets/I.png";
// import R from "../../assets/R.png";
// import H from "../../assets/H.png";
// import medical from "../../assets/medical.png";
// import IN from "../../assets/IN.png";
// import MT from "../../assets/MT.png";

// const Services = () => {
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

// export default Services;

// import React from "react";
// import { Link } from "react-router-dom";

// import MB from "../../assets/MB.png";
// import ME from "../../assets/ME.png";
// import I from "../../assets/I.png";
// import R from "../../assets/R.png";
// import H from "../../assets/H.png";
// import medical from "../../assets/medical.png";
// import IN from "../../assets/IN.png";
// import MT from "../../assets/MT.png";

// const Services = () => {
//   const services = [
//     { img: MB, title: "Medical Billing Services", path: "/medical-billing" },
//     { img: ME, title: "Medical Empanelment Services", path: "/empanelment" },
//     {
//       img: I,
//       title: "Insurance Verification Services",
//       path: "/insurance-verification",
//     },
//     { img: R, title: "Revenue Cycle Management Services", path: "/rcm" },
//     {
//       img: H,
//       title: "Healthcare Claims Adjudication",
//       path: "/claims-adjudication",
//     },
//     {
//       img: medical,
//       title: "Medical Billing & Coding Services",
//       path: "/coding",
//     },
//     { img: IN, title: "Insurance Eligibility Services", path: "/eligibility" },
//     {
//       img: MT,
//       title: "Medical Transcription Services",
//       path: "/transcription",
//     },
//   ];

//   return (
//     <div className="px-6 py-12 max-w-7xl mx-auto">
//       {/* Heading */}
//       <div className="text-center mb-12">
//         <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
//           Our Services
//         </h1>
//         <p className="text-gray-500 mt-3">
//           Empowering Healthcare with Accuracy, Efficiency & Excellence.
//         </p>
//       </div>

//       {/* Grid */}
//       <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
//         {services.map((service, index) => (
//           <Link
//             to={service.path}
//             key={index}
//             className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 flex flex-col items-center text-center hover:scale-105"
//           >
//             {/* Image */}
//             <img
//               src={service.img}
//               alt={service.title}
//               className="h-20 w-20 object-contain mb-4"
//             />

//             {/* Title */}
//             <h4 className="text-lg font-semibold text-gray-700">
//               {service.title}
//             </h4>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Services;

import React from "react";
import { Link } from "react-router-dom";

import MB from "../../assets/MB.png";
import ME from "../../assets/ME.png";
import I from "../../assets/I.png";
import R from "../../assets/R.png";
import H from "../../assets/H.png";
import medical from "../../assets/medical.png";
import IN from "../../assets/IN.png";
import MT from "../../assets/MT.png";

const Services = () => {
  const services = [
    { img: MB, title: "Medical Billing Services", path: "/medical-billing" },
    { img: ME, title: "Medical Empanelment Services", path: "/empanelment" },
    {
      img: I,
      title: "Insurance Verification Services",
      path: "/insurance-verification",
    },
    { img: R, title: "Revenue Cycle Management Services", path: "/rcm" },
    {
      img: H,
      title: "Healthcare Claims Adjudication",
      path: "/claims-adjudication",
    },
    {
      img: medical,
      title: "Medical Billing & Coding Services",
      path: "/coding",
    },
    { img: IN, title: "Insurance Eligibility Services", path: "/eligibility" },
    {
      img: MT,
      title: "Medical Transcription Services",
      path: "/transcription",
    },
  ];

  return (
    <div className="px-6 py-12 max-w-7xl mx-auto">
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          Our Services
        </h1>
        <p className="text-gray-500 mt-3">
          Empowering Healthcare with Accuracy, Efficiency & Excellence.
        </p>
      </div>

      {/* Grid */}
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {services.map((service, index) => (
          <Link
            to={service.path}
            key={index}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 flex flex-col items-center text-center hover:scale-105"
          >
            {/* Image */}
            <img
              src={service.img}
              alt={service.title}
              className="h-20 w-20 object-contain mb-4"
            />

            {/* Title */}
            <h4 className="text-lg font-semibold text-gray-700">
              {service.title}
            </h4>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Services;
