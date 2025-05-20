import React from "react";
import "./BenefitsEEG.css";
import img3 from './eegimg9.jpeg'

const BenefitsEEG = () => {
  return (
    <div className="benefitsEEG-container">
      <div className="benefitsEEG-content">
        <div className="benefitsEEG-details">
          <div className="benefitsEEG-header">
            <h1>Benefits of Getting an Electroencephalogram</h1>
          </div>
          <div className="benefitsEEGlist">
            <ul>
              <li>
                <span className="check-icon">✔</span>
                Diagnosing Epilepsy: EEG helps identify abnormal brain activity
                patterns associated with seizures.
              </li>
              <li>
                <span className="check-icon">✔</span>
                Assessing Sleep Disorders: It aids in diagnosing conditions like
                sleep apnea and narcolepsy by monitoring brain activity during
                sleep.
              </li>
              <li>
                <span className="check-icon">✔</span>
                Evaluating Brain Function: EEG is used to assess brain activity
                in patients with head injuries, stroke, or brain tumors
              </li>
              <li>
                <span className="check-icon">✔</span>
                Detecting Encephalopathy: EEG can help diagnose encephalopathy,
                a brain disease that can have various causes.
              </li>
              <li>
                <span className="check-icon">✔</span>
                Identifying Creutzfeldt-Jakob Disease: EEG may assist in
                diagnosing Creutzfeldt-Jakob disease, a rare and fatal
                neurodegenerative disorder.
              </li>
            </ul>
          </div>
        </div>
        <div className="benefitsEEG-image">
          <img src={img3} alt="CT Scan" />
        </div>
      </div>
    </div>
  );
};

export default BenefitsEEG;
