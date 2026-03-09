// import "./App.css";
// import Navbar from "./Component/Navbar/Navbar";
// import Hero from "./Component/Hero/Hero";
// import Programs from "./Component/Programs/Programs";
// import Programm from "./Component/Programm/Programm";
// import Footer from "./Component/Footer/Footer";
// import Copyright from "./Component/Copyright";
// import Consultation from "./Component/Consultation/Consultation";
// import { Route, Routes } from "react-router-dom";

// import MedicalBillingCodding from "./Component/SubComponent/MedicalBillingCodding/MedicalBillingCodding";
// import RevenueCycle from "./Component/SubComponent/RevenueCycle/RevenueCycle";
// import MedicalEmpanelment from "./Component/SubComponent/MedicalEmpanelment/MedicalEmpanelment";
// import InsuranceVerification from "./Component/SubComponent/InsuranceVerification/InsuranceVerification";
// import HealthCareClaimsAdj from "./Component/SubComponent/HealthcareClaimsAdj/HealthcareClaimAdj";
// import InsuranceElig from "./Component/SubComponent/InsuranceElig/InsuranceElig";
// import MedicalTranscription from "./Component/SubComponent/MedicalTranscription/MedicalTranscription";
// import MedicalBillingServices from "./Component/SubComponent/MedicalBillingServices/MedicalBillingServices";

// function App() {
//   return (
//     <>
//       {/* Navbar always visible */}
//       <Navbar />

//       {/* Routes */}
//       <Routes>
//         {/* Home Page Route */}
//         <Route
//           path="/"
//           element={
//             <>
//               <Hero />
//               <Programs />
//               <Programm />
//               <Consultation />
//             </>
//           }
//         />

//         {/* Sub-Pages */}
//         <Route path="/coding" element={<MedicalBillingCodding />} />

//         <Route path="/empanelment" element={<MedicalEmpanelment />} />

//         <Route
//           path="/insurance-verification"
//           element={<InsuranceVerification />}
//         />

//         <Route path="/medical-billing" element={<MedicalBillingServices />} />

//         <Route path="/rcm" element={<RevenueCycle />} />

//         <Route path="/claims-adjudication" element={<HealthCareClaimsAdj />} />

//         <Route path="/eligibility" element={<InsuranceElig />} />

//         <Route path="/transcription" element={<MedicalTranscription />} />
//       </Routes>

//       {/* Footer always visible */}
//       <Footer />
//       <Copyright />
//     </>
//   );
// }

// export default App;

// **************************************************************************************************************

// Popup Section

// import "./App.css";
// import { useState } from "react";
// import { Route, Routes } from "react-router-dom";

// import Navbar from "./Component/Navbar/Navbar";
// import Hero from "./Component/Hero/Hero";
// import Programs from "./Component/Programs/Programs";
// import Programm from "./Component/Programm/Programm";
// import Footer from "./Component/Footer/Footer";
// import Copyright from "./Component/Copyright";
// import Consultation from "./Component/Consultation/Consultation";

// // Sub Components
// import MedicalBillingCodding from "./Component/SubComponent/MedicalBillingCodding/MedicalBillingCodding";
// import RevenueCycle from "./Component/SubComponent/RevenueCycle/RevenueCycle";
// import MedicalEmpanelment from "./Component/SubComponent/MedicalEmpanelment/MedicalEmpanelment";
// import InsuranceVerification from "./Component/SubComponent/InsuranceVerification/InsuranceVerification";
// import HealthCareClaimsAdj from "./Component/SubComponent/HealthcareClaimsAdj/HealthcareClaimAdj";
// import InsuranceElig from "./Component/SubComponent/InsuranceElig/InsuranceElig";
// import MedicalTranscription from "./Component/SubComponent/MedicalTranscription/MedicalTranscription";
// import MedicalBillingServices from "./Component/SubComponent/MedicalBillingServices/MedicalBillingServices";

// // Auth Modal
// import AuthModal from "./Component/AuthModal/AuthModal";

// function App() {
//   const [showAuthModal, setShowAuthModal] = useState(false);

//   return (
//     <>
//       {/* Navbar always visible */}
//       <Navbar openAuthModal={() => setShowAuthModal(true)} />

//       {/* Auth Popup */}
//       {showAuthModal && (
//         <AuthModal closeModal={() => setShowAuthModal(false)} />
//       )}

//       {/* Routes */}
//       <Routes>
//         <Route
//           path="/"
//           element={
//             <>
//               <Hero />
//               <Programs />
//               <Programm />
//               <Consultation />
//             </>
//           }
//         />

//         <Route path="/coding" element={<MedicalBillingCodding />} />
//         <Route path="/empanelment" element={<MedicalEmpanelment />} />
//         <Route
//           path="/insurance-verification"
//           element={<InsuranceVerification />}
//         />
//         <Route path="/medical-billing" element={<MedicalBillingServices />} />
//         <Route path="/rcm" element={<RevenueCycle />} />
//         <Route path="/claims-adjudication" element={<HealthCareClaimsAdj />} />
//         <Route path="/eligibility" element={<InsuranceElig />} />
//         <Route path="/transcription" element={<MedicalTranscription />} />
//       </Routes>

//       {/* Footer always visible */}
//       <Footer />
//       <Copyright />
//     </>
//   );
// }

// export default App;

// *****************************************************************
import "./App.css";
import { Route, Routes } from "react-router-dom";

import Navbar from "./Component/Navbar/Navbar";
import Hero from "./Component/Hero/Hero";
import Programs from "./Component/Programs/Programs";
import Programm from "./Component/Programm/Programm";
import Footer from "./Component/Footer/Footer";
import Copyright from "./Component/Copyright";
import Consultation from "./Component/Consultation/Consultation";

// Sub Components
import MedicalBillingCodding from "./Component/SubComponent/MedicalBillingCodding/MedicalBillingCodding";
import RevenueCycle from "./Component/SubComponent/RevenueCycle/RevenueCycle";
import MedicalEmpanelment from "./Component/SubComponent/MedicalEmpanelment/MedicalEmpanelment";
import InsuranceVerification from "./Component/SubComponent/InsuranceVerification/InsuranceVerification";
import HealthCareClaimsAdj from "./Component/SubComponent/HealthcareClaimsAdj/HealthcareClaimAdj";
import InsuranceElig from "./Component/SubComponent/InsuranceElig/InsuranceElig";
import MedicalTranscription from "./Component/SubComponent/MedicalTranscription/MedicalTranscription";
import MedicalBillingServices from "./Component/SubComponent/MedicalBillingServices/MedicalBillingServices";

// 🔐 Auth Pages
import AuthModal from "./Component/AuthModal/AuthModal";

// 🩺 Doctor Pages (NEXT STEP READY)
import DoctorDashboard from "./Component/Doctor/Dashboard";
import CredentialingRequest from "./Component/Doctor/CredentialingRequest";
import ProtectedRoute from "./Component/AuthModal/ProtectedRoute/ProtectedRoute";

function App() {
  return (
    <>
      {/* Navbar always visible */}
      <Navbar />

      <Routes>
        {/* 🏠 Home */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Programs />
              <Programm />
              <Consultation />
            </>
          }
        />

        {/* 🏥 Services */}
        <Route path="/coding" element={<MedicalBillingCodding />} />
        <Route path="/empanelment" element={<MedicalEmpanelment />} />
        <Route
          path="/insurance-verification"
          element={<InsuranceVerification />}
        />
        <Route path="/medical-billing" element={<MedicalBillingServices />} />
        <Route path="/rcm" element={<RevenueCycle />} />
        <Route path="/claims-adjudication" element={<HealthCareClaimsAdj />} />
        <Route path="/eligibility" element={<InsuranceElig />} />
        <Route path="/transcription" element={<MedicalTranscription />} />

        {/* 🔐 AUTH ROUTES (PAGE BASED) */}
        <Route path="/login" element={<AuthModal defaultTab="login" />} />
        <Route path="/signup" element={<AuthModal defaultTab="signup" />} />
        <Route
          path="/forgot-password"
          element={<AuthModal defaultTab="forgot" />}
        />

        {/* 🩺 DOCTOR PANEL (Protected later) */}
        <Route
          path="/doctor/dashboard"
          element={
            <ProtectedRoute>
              <DoctorDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/doctor/CredentialingRequest"
          element={
            <ProtectedRoute>
              <CredentialingRequest />
            </ProtectedRoute>
          }
        />
      </Routes>

      {/* Footer always visible */}
      <Footer />
      <Copyright />
    </>
  );
}

export default App;
