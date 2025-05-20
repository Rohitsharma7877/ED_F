import React from "react";
import "./WhyshouldTMT.css";
import tmtimg5 from "./tmtimg5.png";

const WhyshouldTMT = () => {
  return (
    <div className="whyshouldTMT-main1">
      <div className="whyshouldTMT-main2">
        <div className="whyshouldTMT-box1">
          <div className="whyshouldTMT-box-image">
            <img src={tmtimg5} alt="ultrasoundPreaper-Image" />
          </div>
        </div>
        <div className="whyshouldTMT-box2">
          <div className="whyshouldTMT-box2-write">
            <div className="whyshouldTMT-header">
              <h1>Who should get Treadmill Testing?</h1>
            </div>
          </div>
          <div className="whyshouldTMT-point">
            <p>
              Individuals with symptoms like chest pain, shortness of breath, or
              dizziness should consider treadmill testing to evaluate heart
              health. It’s also recommended for those at high risk of
              cardiovascular disease, including those with hypertension,
              diabetes, or a family history of heart disease.{" "}
            </p>

            <div className="whyshouldTMT-checklist">
              <ul>
                <li>Individuals with chest pain or shortness of breath.</li>
                <li>People with a family history of heart disease. </li>
                <li>Patients with high blood pressure or diabetes.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyshouldTMT;
