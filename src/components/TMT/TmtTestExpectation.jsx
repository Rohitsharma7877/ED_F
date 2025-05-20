import React, { useState } from "react";
import "./tmtTestExpectation.css";
// import { TiTick } from "react-icons/ti";

const TmtTestExpectation = () => {
  const [activeSection, setActiveSection] = useState("before");

  const handleClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="tmt-test-container">
      {/* <TiTick className="tick-icon" /> */}
      <h1>What to Expect Before, During & After a TMT Test</h1>

      {/* Section Navigation */}
      <div className="tmt-section-nav">
        <button
          className={`tmt-section-button ${
            activeSection === "before" ? "active" : ""
          }`}
          onClick={() => handleClick("before")}
        >
          Before Test
        </button>
        <button
          className={`tmt-section-button ${
            activeSection === "during" ? "active" : ""
          }`}
          onClick={() => handleClick("during")}
        >
          During Test
        </button>
        <button
          className={`tmt-section-button ${
            activeSection === "after" ? "active" : ""
          }`}
          onClick={() => handleClick("after")}
        >
          After Test
        </button>
      </div>

      {/* Section Content */}
      <div className="tmt-test-sections">
        {/* Before the Test */}
        {activeSection === "before" && (
          <div className="tmt-test-section">
            <h2>Before the Test</h2>
            <ul>
              <li>
                <span style={{ color: "black", fontWeight: "bold" }}>
                Medical History:
                </span>{" "}
                Your doctor will ask about your medical history, including any
                heart conditions, medications.
              </li>
              <li>
                <span style={{ color: "black", fontWeight: "bold" }}>
                  Preparation Guidelines:
                </span>{" "}
                You may be advised to avoid eating or drinking for a few hours
                before the test.
              </li>
              <li>
                <span style={{ color: "black", fontWeight: "bold" }}>
                  {" "}
                  Clothing:{" "}
                </span>
                Wear comfortable clothes and shoes suitable for exercise.
              </li>
              <li>
                <span style={{ color: "black", fontWeight: "bold" }}>
                  {" "}
                  Baseline Measurements:{" "}
                </span>
                Blood pressure, heart rate, and ECG will be measured before
                starting the test.
              </li>
              <li>
                <span style={{ color: "black", fontWeight: "bold" }}>
                  {" "}
                  Consent:{" "}
                </span>
                You may need to sign a consent form, especially if you have heart disease or other conditions.
              </li>
            </ul>
          </div>
        )}

        {/* During the Test */}
        {activeSection === "during" && (
          <div className="tmt-test-section">
            <h2>During the Test</h2>
            <ul>
              <li>
                <span style={{ color: "black", fontWeight: "bold" }}>
                  {" "}
                  Exercise on the Treadmill:{" "}
                </span>
                You will walk or jog on the treadmill, which gradually increases
                in speed and incline.{" "}
              </li>
              <li>
                <span style={{ color: "black", fontWeight: "bold" }}>
                  Monitoring:{" "}
                </span>
                Your heart rate, blood pressure, and ECG will be monitored
                throughout the test.{" "}
              </li>
              <li>
                <span style={{ color: "black", fontWeight: "bold" }}>
                  Physical Stress:{" "}
                </span>
                You will be asked to exercise until you reach your maximum
                capacity or experience symptoms.{" "}
              </li>
              <li>
                <span style={{ color: "black", fontWeight: "bold" }}>
                  {" "}
                  Comfortable Pace:{" "}
                </span>
                The test is designed to push your heart but will be controlled
                to avoid overexertion.{" "}
              </li>
              <li>
                <span style={{ color: "black", fontWeight: "bold" }}>
                  Clear Communication:{" "}
                </span>
                The technician will guide you and ask you to stop if you feel discomfort.{" "}
              </li>
            </ul>
          </div>
        )}

        {/* After the Test */}
        {activeSection === "after" && (
          <div className="tmt-test-section">
            <h2>After the Test</h2>
            <ul>
              <li>
                <span style={{ color: "black", fontWeight: "bold" }}>
                  Cool Down:
                </span>
                After the test, you’ll be asked to cool down by walking at a
                slower pace for a few minutes.{" "}
              </li>
              <li>
                <span style={{ color: "black", fontWeight: "bold" }}>
                  {" "}
                  Results Review:
                </span>{" "}
                A doctor or cardiologist will analyze the test data and discuss
                the results with you.{" "}
              </li>
              <li>
                <span style={{ color: "black", fontWeight: "bold" }}>
                  {" "}
                  Normal Activity:
                </span>{" "}
                You can return to your regular activities immediately, unless
                advised otherwise.{" "}
              </li>
              <li>
                <span style={{ color: "black", fontWeight: "bold" }}>
                  {" "}
                  Possible Follow-Up:
                </span>{" "}
                If abnormalities are detected, additional tests or treatments
                may be recommended.{" "}
              </li>
              <li>
                <span style={{ color: "black", fontWeight: "bold" }}>
                  {" "}
                  Post-Test Monitoring:
                </span>{" "}
                If any issues arise during the test, you may be monitored
                further for safety.{" "}
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default TmtTestExpectation;
