import React from "react";
import "./whyChooseUs.css";
import customerImage from "./customer.webp";
import techImage from "./technology-qtuslclongh42chck3s74kpzah60cw00o9lcscdd6o.png";
import assuredImage from "./assurance-qtuslaq09sejf4k2v2yxzl723pf9xhsk00adtsg5j4.png";
import qualifiedImage from "./badge-qtuslbnugmftqqippldkk2yip3an56wac4xvb2ercw.png";
// import other images similarly

const WhyChoose = () => {
    return (
        <div className="diagnosticwhy-main">
                <div className="diagnosticwhy-container">
          <div className="diagnosticwhy-text">
            <h1>Why Choose Us?</h1>
            <div className="diagnosticwhy-advantages-list">
              <div className="diagnosticwhy-box">
                <img src={customerImage} alt="Customer-Centric Approach" />
                <h3>Patient-Centric Approach</h3>
                {/* <p>
                  We strive to thrive on quality service and enhance the same on a
                  continuous basis in terms of accuracy, reliability, and fast
                  turnaround in reporting.
                </p> */}
              </div>
    
              <div className="diagnosticwhy-box">
                <img src={techImage} alt="Technology & Innovation" />
                <h3>Best Equipment and Infrastructure</h3>
                {/* <p>
                  Advanced hospital equipment ensures precise diagnostics and
                  effective treatments, building patient trust and improving care.
                </p> */}
              </div>
              <div className="diagnosticwhy-box">
                <img src={assuredImage} alt="Technology & Innovation" />
                <h3>Assured Quality with Accurate Results</h3>
                {/* <p>
                  QC involves visual inspection, environmental testing, and
                  performance evaluation to ensure equipment delivers accurate
                  results.
                </p> */}
              </div>
              <div className="diagnosticwhy-box">
                <img src={qualifiedImage} alt="Technology & Innovation" />
                <h3>Qualified Healthcare Experts</h3>
                {/* <p>
                  Well-qualified and trained professionals who meticulously manage
                  patient study through seamless imaging and collection of samples.
                </p> */}
              </div>
              {/* Add other boxes similarly */}
            </div>
          </div>
        </div>
        </div>
        
      );
    
}

export default WhyChoose