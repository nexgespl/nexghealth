import React from "react";
import "./Program.css";

function Heading({ children, className }) {
  return <h1 className={"" + className}>{children}</h1>;
}

const Programs = () => {
  return (
    <div className="Programs">
      <Heading>Welcome to Nex-G Health</Heading>
      <p>
        Nex-G Health (a division of Nex-G Exuberant Solutions Pvt. Ltd.) is a
        prominent revenue cycle management (RCM) service provider that helps
        healthcare organizations optimize their financial performance.
        <br />
        <br />
        By offering a comprehensive suite of RCM services — including patient
        demographics and claims entry, payment posting, denial management, and
        accounts receivable (A/R) follow-up — Nex-G Health streamlines the
        billing lifecycle to improve cash flow and reduce revenue leakage.
        <br />
        <br />
        With a strong team of certified coders and domain experts, they also
        deliver health information management (HIM) services such as coding
        audits and clinical documentation improvement (CDI) to ensure compliance
        and maximize reimbursement.
        <br />
        <br />
        Our global delivery centers across globe and clients in the U.S.,
        emphasize both cost efficiency (claiming up to 40% internal cost
        reduction) and revenue uplift, while maintaining data security and HIPAA
        compliance.
        <br />
        <br />
        Nex-G Health continues to leverage innovation, technology, and a
        single-source model to provide end-to-end RCM and IT solutions for
        healthcare providers.
        <br />
        <br />
        {/* Our optimized bot codes are developed based on specific requirements and workflows, creating virtual robots capable of communicating and integrating across multiple websites and applications.<br/>
    RPA is especially effective for repetitive tasks and can manage multiple processes across different domains with precision and reliability.
    <br/>
    <br />
    If you’re looking to transform the scope of customer service in your organization, we encourage you to start using Nex-G and experience the true potential and value of automation in your business.<br/> */}
      </p>
    </div>
  );
};

export default Programs;
