import React from "react";
import "./WhatisEEG.css";
import img1 from "./eegimg8.jpeg";

const WhatisEEG = () => {
  return (
    <div className="WhatisEEG-container">
      <div className="WhatisEEG-image">
        <img src={img1} alt="MRI Scan" />
      </div>
      <div className="WhatisEEG-text">
        <h1>What is Electroencephalogram?</h1>
        <div className="WhatisEEG-list">
          <p>
            An electroencephalogram (EEG) is a non-invasive test that records
            the brain's electrical activity via electrodes placed on the scalp.
            It is commonly used to diagnose conditions such as epilepsy, sleep
            disorders, and brain injuries.{" "}
          </p>
          <div className="WhatisEEG-scanlist">
            <ul>
              <li>
                <span className="check-icon">✔</span>
                EEG helps identify abnormal brain activity patterns associated
                with seizures
              </li>
              <li>
                <span className="check-icon">✔</span>
                It aids in diagnosing conditions like sleep apnea and narcolepsy
                by monitoring brain activity during sleep
              </li>
              <li>
                <span className="check-icon">✔</span>
                EEG is used to assess brain activity in patients with head
                injuries, stroke, or brain tumors.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatisEEG;
