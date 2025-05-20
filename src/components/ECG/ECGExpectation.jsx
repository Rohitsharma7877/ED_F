import React, { useState } from "react";
import "./ECGExpectation.css";

const ECGExpectation = () => {
  const [activeSection, setActiveSection] = useState("before");

  const handleClick = (section) => {
    setActiveSection(section);
  };
  return (
    <div className="ecg-test-container">
      {/* <TiTick className="tick-icon" /> */}
      <h1>What to Expect Before, During & After a Electrocardiogram Test</h1>

      {/* Section Navigation */}
      <div className="eg-section-nav">
        <button
          className={`eg-section-button ${
            activeSection === "before" ? "active" : ""
          }`}
          onClick={() => handleClick("before")}
        >
          Before Test
        </button>
        <button
          className={`eg-section-button ${
            activeSection === "during" ? "active" : ""
          }`}
          onClick={() => handleClick("during")}
        >
          During Test
        </button>
        <button
          className={`eg-section-button ${
            activeSection === "after" ? "active" : ""
          }`}
          onClick={() => handleClick("after")}
        >
          After Test
        </button>
      </div>

      {/* Section Content */}
      <div className="ecg-test-sections">
        {/* Before the Test */}
        {activeSection === "before" && (
          <div className="ecg-test-section">
            <h2>Before the Test</h2>
            <ul>
              <li>
                <span style={{ color: "black", fontWeight: "bold" }}>
                  Clothing:{" "}
                </span>
                Remove upper body clothing for electrode placement.{" "}
              </li>
              <li>
                <span style={{ color: "black", fontWeight: "bold" }}>
                  Avoid Stimulants:
                </span>{" "}
                Skip caffeine or alcohol beforehand.{" "}
              </li>
              <li>
                <span style={{ color: "black", fontWeight: "bold" }}>
                  {" "}
                  Inform About Medical History:{" "}
                </span>
                Inform the doctor about any existing heart conditions,
                medications, or allergies.{" "}
              </li>
              <li>
                <span style={{ color: "black", fontWeight: "bold" }}>
                  {" "}
                  No Fasting:{" "}
                </span>
                Usually, no special prep is required.{" "}
              </li>
              <li>
                <span style={{ color: "black", fontWeight: "bold" }}>
                  {" "}
                  Normal Breathing:{" "}
                </span>
                Ensure you are in a relaxed and calm environment before the
                procedure.{" "}
              </li>
            </ul>
          </div>
        )}

        {/* During the Test */}
        {activeSection === "during" && (
          <div className="ecg-test-section">
            <h2>During the Test</h2>
            <ul>
              <li>
                <span style={{ color: "black", fontWeight: "bold" }}>
                  {" "}
                  Electrode Placement:{" "}
                </span>
                Small adhesive electrodes will be placed on your chest, arms,
                and legs.{" "}
              </li>
              <li>
                <span style={{ color: "black", fontWeight: "bold" }}>
                  Pain-Free Test:{" "}
                </span>
                The procedure is painless.{" "}
              </li>
              <li>
                <span style={{ color: "black", fontWeight: "bold" }}>
                  Stay Still:{" "}
                </span>
                You will be asked to lie still and relax while the ECG records
                your heart's electrical activity.{" "}
              </li>
              <li>
                <span style={{ color: "black", fontWeight: "bold" }}>
                  {" "}
                  Short Duration:{" "}
                </span>
                The test typically lasts only 5-10 minutes{" "}
              </li>
              <li>
                <span style={{ color: "black", fontWeight: "bold" }}>
                  Normal Breathing:{" "}
                </span>
                Breathe normally unless instructed otherwise.{" "}
              </li>
            </ul>
          </div>
        )}

        {/* After the Test */}
        {activeSection === "after" && (
          <div className="ecg-test-section">
            <h2>After the Test</h2>
            <ul>
              <li>
                <span style={{ color: "black", fontWeight: "bold" }}>
                  No Downtime Required:
                </span>
                The test is non-invasive, so you can return to your regular
                activities immediately.{" "}
              </li>
              <li>
                <span style={{ color: "black", fontWeight: "bold" }}>
                  {" "}
                  Review of Results:
                </span>{" "}
                A healthcare provider will interpret the results and discuss any
                findings with you.{" "}
              </li>
              <li>
                <span style={{ color: "black", fontWeight: "bold" }}>
                  {" "}
                  Possible Follow-Up:
                </span>{" "}
                If abnormal results are found, you may need further tests or
                follow-up appointments.
              </li>
              <li>
                <span style={{ color: "black", fontWeight: "bold" }}>
                  {" "}
                  Skin Sensitivity:
                </span>{" "}
                You might experience slight skin irritation from the electrodes
                but it usually goes away quickly.{" "}
              </li>
              <li>
                <span style={{ color: "black", fontWeight: "bold" }}>
                  {" "}
                  Continued Monitoring:
                </span>{" "}
                Additional heart tests may be recommended.{" "}
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default ECGExpectation;
