// import React from 'react'
// import './Hero.css'
// import dark_arrow from '../../assets/dark-arrow.png'

// const Hero = () => {
//   return (
//     <div className='hero'>
//       <div className='hero-text'>
//          <h1>We Ensure Better Health For Better World</h1>
//             <p>Streamline your billing processes, reduce claim denials, and accelerate collections with our comprehensive Revenue Cycle Management services.
//             </p>
//             <button className='btn'>Explore More <img src={dark_arrow} alt='' /></button>
//       </div>
//     </div>
//   )
// }

// export default Hero

// *************************

// import React from "react";
// import "./Hero.css";
// import dashboardImg from "../../assets/dashboardImg.png"; // 👉 apni image yahan daalo

// export default function Hero() {
//   return (
//     <section className="hero">
//       {/* LEFT SIDE */}
//       <div className="hero-left">
//         <span className="badge">✨ Healthcare RCM Platform</span>

//         <h1>
//           Transform Your <br />
//           <span className="gradient">Revenue Cycle</span> <br />
//           with AI-Powered Precision
//         </h1>

//         <p>
//           Achieve 99.5% claims accuracy, reduce denial rates by 40%, and
//           accelerate reimbursements with our intelligent RCM platform.
//         </p>

//         <div className="buttons">
//           <button className="btn-primary">Get Started Free →</button>
//           <button className="btn-secondary">▶ Watch Demo</button>
//         </div>

//         <div className="stats">
//           <div>
//             <h2>35%</h2>
//             <span>Faster Payments</span>
//           </div>
//           <div>
//             <h2>28%</h2>
//             <span>Higher Revenue</span>
//           </div>
//           <div>
//             <h2>99.5%</h2>
//             <span>Claims Accuracy</span>
//           </div>
//         </div>
//       </div>

//       {/* RIGHT SIDE */}
//       <div className="hero-right">
//         <div className="dashboard">
//           <div className="cards">
//             <div className="card">
//               <p>Revenue MTD</p>
//               <h4>$2.4M</h4>
//             </div>
//             <div className="card">
//               <p>Claims Filed</p>
//               <h4>1,847</h4>
//             </div>
//             <div className="card">
//               <p>Clean Rate</p>
//               <h4>99.5%</h4>
//             </div>
//           </div>

//           {/* IMAGE SECTION ✅ */}
//           <div className="chart">
//             <img src={dashboardImg} alt="dashboard" />
//           </div>

//           <div className="claims">
//             <p>Recent Claims</p>
//             <div className="claim green">Approved - $2,840</div>
//             <div className="claim blue">Processing - $1,250</div>
//             <div className="claim green">Approved - $4,100</div>
//             <div className="claim yellow">Review - $890</div>
//           </div>
//         </div>

//         {/* FLOATING BADGES */}
//         <div className="floating f1">+35% Faster Pay</div>
//         <div className="floating f2">+28% Revenue</div>
//         <div className="floating f3">99.5% Accuracy</div>
//       </div>
//     </section>
//   );
// }

//
//

// import React from "react";
// import "./Hero.css"; // Apni CSS file import karein
// import dashboardImg from "../../assets/dashboardImg.png";

// const Hero = () => {
//   return (
//     <section className="hero-container">
//       {/* Left Content Area */}
//       <div className="hero-content">
//         {/* Top Badge */}
//         <div className="hero-badge">
//           <svg
//             width="16"
//             height="16"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//           >
//             <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
//           </svg>
//           Healthcare RCM Platform
//         </div>

//         {/* Main Heading */}
//         <h1 className="hero-title">
//           Transform Your <br />
//           <span className="text-blue">Revenue Cycle</span> with <br />
//           <span className="text-dark">
//             AI-Powered
//             <br />
//             Precision
//           </span>
//         </h1>

//         {/* Subheading */}
//         <p className="hero-description">
//           Achieve 99.5% claims accuracy, reduce denial rates by 40%, and
//           accelerate reimbursements with our intelligent RCM platform built for
//           modern healthcare organizations.
//         </p>

//         {/* Call to Action Buttons */}
//         <div className="hero-buttons">
//           <button className="btn-primary">
//             Get Started Free
//             <svg
//               width="16"
//               height="16"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             >
//               <line x1="5" y1="12" x2="19" y2="12"></line>
//               <polyline points="12 5 19 12 12 19"></polyline>
//             </svg>
//           </button>
//           <button className="btn-secondary">
//             <svg
//               width="16"
//               height="16"
//               viewBox="0 0 24 24"
//               fill="currentColor"
//               stroke="none"
//             >
//               <polygon points="5 3 19 12 5 21 5 3"></polygon>
//             </svg>
//             Watch Demo
//           </button>
//         </div>

//         {/* Statistics Section */}
//         <div className="hero-stats">
//           <div className="stat-item">
//             <h3>35%</h3>
//             <p>Faster Payments</p>
//           </div>
//           <div className="stat-item">
//             <h3>28%</h3>
//             <p>Higher Revenue</p>
//           </div>
//           <div className="stat-item">
//             <h3>99.5%</h3>
//             <p>Claims Accuracy</p>
//           </div>
//         </div>
//       </div>

//       {/* Right Image Area */}
//       <div className="hero-image-wrapper">
//         {/* 👇 YAHAN APNI IMAGE KA PATH ADD KAREIN 👇 */}
//         <img
//           src={dashboardImg}
//           alt="Dashboard UI"
//           className="dashboard-image"
//         />
//         {/* 👆 YAHAN APNI IMAGE KA PATH ADD KAREIN 👆 */}
//       </div>
//     </section>
//   );
// };

// export default Hero;

import React from "react";
import "./Hero.css"; // Apni CSS file import karein
import dashboardImg from "../../assets/dashboardImg1.png";

// Dynamic Metric Card component
// Dynamic Metric Card component
const MetricCard = ({ id, icon, value, label }) => (
  // Maine yahan className se hata kar alag se id={id} add kar diya hai
  <div className="dynamic-card" id={id}>
    <div className="dynamic-icon">{icon}</div>
    <div>
      <h3>{value}</h3>
      <p>{label}</p>
    </div>
  </div>
);

const Hero = () => {
  return (
    <section className="hero-container">
      {/* Left Content Area */}
      <div className="hero-content">
        {/* Top Badge */}
        <div className="hero-badge">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
          </svg>
          Healthcare RCM Platform
        </div>

        {/* Main Heading */}
        <h1 className="hero-title">
          Transform Your <br />
          <span className="text-blue">Revenue Cycle</span> with <br />
          <span className="text-dark">
            AI-Powered
            <br />
            Precision
          </span>
        </h1>

        {/* Subheading */}
        <p className="hero-description">
          Achieve 99.5% claims accuracy, reduce denial rates by 40%, and
          accelerate reimbursements with our intelligent RCM platform built for
          modern healthcare organizations.
        </p>

        {/* Call to Action Buttons */}
        <div className="hero-buttons">
          <button className="btn-primary">
            Get Started Free
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
          <button className="btn-secondary">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke="none"
            >
              <polygon points="5 3 19 12 5 21 5 3"></polygon>
            </svg>
            Watch Demo
          </button>
        </div>

        {/* Statistics Section */}
        <div className="hero-stats">
          <div className="stat-item">
            <h3>35%</h3>
            <p>Faster Payments</p>
          </div>
          <div className="stat-item">
            <h3>28%</h3>
            <p>Higher Revenue</p>
          </div>
          <div className="stat-item">
            <h3>99.5%</h3>
            <p>Claims Accuracy</p>
          </div>
        </div>
      </div>

      {/* Right Image/Animation Area */}
      <div className="hero-image-wrapper">
        {/* Naye Flow Metrics (Animated) */}
        <MetricCard
          id="claims-approved"
          icon="+"
          value="+42%"
          label="Claims Approved"
        />
        <MetricCard
          id="claims-processed"
          icon="✔"
          value="40M"
          label="Claims Processed"
        />
        <MetricCard
          id="denial-rate"
          icon="⬇"
          value="40%"
          label="Reduced Denial Rate"
        />
        <MetricCard
          id="recovered-denials"
          icon="📈"
          value="$1.2M"
          label="Recovered Denials"
        />

        {/* 👇 YAHAN APNI IMAGE KA PATH ADD KAREIN 👇 */}
        <img
          src={dashboardImg}
          alt="Dashboard UI with motion effects"
          className="dashboard-image"
        />
        {/* 👆 YAHAN APNI IMAGE KA PATH ADD KAREIN 👆 */}

        {/* CSS-based particle effects can be added as child divs if needed */}
        <div className="motion-particles"></div>
      </div>
    </section>
  );
};

export default Hero;
