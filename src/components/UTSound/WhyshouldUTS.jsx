import React from "react";
import "./WhyshouldUTS.css";
import utsimage6 from "./utsimage6.png";

const WhyshouldUTS = () => {
  return (
    <div className="whyshouldUTS-main1">
      <div className="whyshouldUTS-main2">
        <div className="whyshouldUTS-box1">
          <div className="whyshouldUTS-box-image">
            <img src={utsimage6} alt="ultrasoundPreaper-Image" />
          </div>
        </div>
        <div className="whyshouldUTS-box2">
          <div className="whyshouldUTS-box2-write">
            <div className="whyshouldUTS-header">
              <h1>Who should get Ultrasonography?</h1>
            </div>
          </div>
          <div className="whyshouldUTS-point">
            <p>
              Individuals requiring evaluation of internal organs, blood flow,
              or pregnancy monitoring should consider ultrasonography. It’s also
              ideal for detecting soft tissue abnormalities and guiding medical
              procedures.
            </p>

            <div className="whyshouldUTS-checklist">
              <ul>
                <li>Pregnant women for monitoring fetal health.</li>
                <li>Patients with suspected organ or tissue abnormalities.</li>
                <li>Individuals needing blood flow or vascular assessments.</li>
                <li>Guidance for procedures like biopsies or fluid removal.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyshouldUTS;
