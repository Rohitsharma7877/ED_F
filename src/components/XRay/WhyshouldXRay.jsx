import React from "react";
import "./WhyshouldXRay.css";
import xrayimg5 from "./xrayimg5.png";

const WhyshouldXRay = () => {
  return (
    <div className="whyshouldCTScan-main1">
      <div className="whyshouldCTScan-main2">
        <div className="whyshouldCTScan-box1">
          <div className="whyshouldCTScan-box-image">
            <img src={xrayimg5} alt="ultrasoundPreaper-Image" />
          </div>
        </div>
        <div className="whyshouldCTScan-box2">
          <div className="whyshouldCTScan-box2-write">
            <div className="whyshouldCTScan-header">
              <h1>Who should get X-Ray?</h1>
            </div>
          </div>
          <div className="whyshouldCTScan-point">
            <p>
              Anyone with suspected bone fractures, joint issues, chest
              infections, or abdominal pain may require an X-ray for accurate
              diagnosis.
            </p>

            <div className="whyshouldCTScan-checklist">
              <ul>
                <li>Detects bone fractures and dislocations.</li>
                <li>Diagnoses chest infections like pneumonia.</li>
                <li>Evaluates joint or spinal problems.</li>
                <li>Identifies dental and abdominal issues.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyshouldXRay;
