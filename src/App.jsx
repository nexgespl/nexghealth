import "./App.css";
import Navbar from "./Component/Navbar/Navbar";
import Hero from "./Component/Hero/Hero";
import Programs from "./Component/Programs/Programs";
import Programm from "./Component/Programm/Programm";
import Footer from "./Component/Footer/Footer";
import Copyright from "./Component/Copyright";
import Consultation from "./Component/Consultation/Consultation";
import { Route, Routes } from "react-router-dom";

import MedicalBillingCodding from "./Component/SubComponent/MedicalBillingCodding/MedicalBillingCodding";
import RevenueCycle from "./Component/SubComponent/RevenueCycle/RevenueCycle";
import MedicalEmpanelment from "./Component/SubComponent/MedicalEmpanelment/MedicalEmpanelment";
import InsuranceVerification from "./Component/SubComponent/InsuranceVerification/InsuranceVerification";
import HealthCareClaimsAdj from "./Component/SubComponent/HealthcareClaimsAdj/HealthcareClaimAdj";
import InsuranceElig from "./Component/SubComponent/InsuranceElig/InsuranceElig";
import MedicalTranscription from "./Component/SubComponent/MedicalTranscription/MedicalTranscription";
import MedicalBillingServices from "./Component/SubComponent/MedicalBillingServices/MedicalBillingServices";

function App() {
  return (
    <>
      {/* Navbar always visible */}
      <Navbar />

      {/* Routes */}
      <Routes>
        {/* Home Page Route */}
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

        {/* Sub-Pages */}
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
      </Routes>

      {/* Footer always visible */}
      <Footer />
      <Copyright />
    </>
  );
}

export default App;

// import "./App.c6ss";
// import Navbar from "./Component/Navbar/Navbar";
// import Hero from "./Component/Hero/Hero";
// import Programs from "./Component/Programs/Programs";
// // import Title from './Component/Title/Title'
// import Programm from "./Component/Programm/Programm";
// import Footer from "./Component/Footer/Footer";
// // import Copyright from './Component/Copyright/Copyright'
// import Copyright from "./Component/Copyright";
// import Consultation from "./Component/Consultation/Consultation";
// import { Route, Routes } from "react-router-dom";
// import MedicalBilling from "./Component/SubComponent/MedicalBillingCodding/MedicalBillingCodding";
// import RevenueCycle from "./Component/SubComponent/RevenueCycle/RevenueCycle";
// import MedicalEmpanelment from "./Component/SubComponent/MedicalEmpanelment/MedicalEmpanelment";
// import InsuranceVerification from "./Component/SubComponent/InsuranceVerification/InsuranceVerification";
// import HealthCareClaimsAdj from "./Component/SubComponent/HealthcareClaimsAdj/HealthcareClaimAdj";
// import MedicalBillingCodding from "./Component/SubComponent/MedicalBillingCodding/MedicalBillingCodding";
// import InsuranceElig from "./Component/SubComponent/InsuranceElig/InsuranceElig";
// import MedicalTranscription from "./Component/SubComponent/MedicalTranscription/MedicalTranscription";

// function App() {
//   return (
//     <>
//       <Navbar />
//       <Routes>
//         <Route
//           path="/MedicalBillingCodding"
//           element={<MedicalBillingCodding />}
//         />
//         <Route path="/empanelment" element={<MedicalEmpanelment />} />
//         <Route
//           path="/insurance-verification"
//           element={<InsuranceVerification />}
//         />
//         <Route path="/rcm" element={<RevenueCycle />} />
//         <Route path="/claims-adjudication" element={<HealthCareClaimsAdj />} />
//         <Route path="/coding" element={<MedicalBillingCodding />} />
//         <Route path="/eligibility" element={<InsuranceElig />} />
//         <Route path="/transcription" element={<MedicalTranscription />} />
//       </Routes>
//       <Hero />
//       <Programs />
//       <Programm />
//       <Consultation />
//       <Footer />
//       <Copyright />
//     </>
//   );
// }

// export default App;
