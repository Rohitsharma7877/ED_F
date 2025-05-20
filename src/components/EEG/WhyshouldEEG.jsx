import React from "react";
import "./WhyshouldEEG.css";
import eegimg5 from "./eegimg5.png";

const WhyshouldEEG = () => {
  return (
    <div className="whyshouldEEG-main1">
      <div className="whyshouldEEG-main2">
        <div className="whyshouldEEG-box1">
          <div className="whyshouldEEG-box-image">
            <img src={eegimg5} alt="ultrasoundPreaper-Image" />
          </div>
        </div>
        <div className="whyshouldEEG-box2">
          <div className="whyshouldEEG-box2-write">
            <div className="whyshouldEEG-header">
              <h1>Who should get Electroencephalogram?</h1>
            </div>
          </div>
          <div className="whyshouldEEG-point">
            <p>
              An Electroencephalogram (EEG) is recommended for individuals
              experiencing unexplained seizures, frequent headaches, or changes
              in mental state. It is also used to diagnose conditions like
              epilepsy, sleep disorders, or brain injuries.
            </p>

            <div className="whyshouldEEG-checklist">
              <ul>
                <li>
                  Individuals with Seizures: Those experiencing unexplained
                  seizures or convulsions.
                </li>
                <li>
                  Patients with Sleep Disorders: Individuals suffering from
                  chronic insomnia, sleep apnea, or narcolepsy.
                </li>
                <li>
                  People with Neurological Conditions: Patients with conditions
                  like stroke, head injuries, or brain tumors.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyshouldEEG;
