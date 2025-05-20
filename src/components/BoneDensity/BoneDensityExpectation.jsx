import React, { useState } from "react";
import "./BoneDensityExpectation.css";

const BoneDensityExpectation = () => {
  const [activeSection, setActiveSection] = useState("before");

  const handleClick = (section) => {
    setActiveSection(section);
  };
  return (
    <div className="bonedst-test-container">
      {/* <TiTick className="tick-icon" /> */}
      <h1>What to Expect Before, During & After a Bone Density Test?</h1>

      {/* Section Navigation */}
      <div className="bd-section-nav">
        <button
          className={`bd-section-button ${
            activeSection === "before" ? "active" : ""
          }`}
          onClick={() => handleClick("before")}
        >
          Before Test
        </button>
        <button
          className={`bd-section-button ${
            activeSection === "during" ? "active" : ""
          }`}
          onClick={() => handleClick("during")}
        >
          During Test
        </button>
        <button
          className={`bd-section-button ${
            activeSection === "after" ? "active" : ""
          }`}
          onClick={() => handleClick("after")}
        >
          After Test
        </button>
      </div>

      {/* Section Content */}
      <div className="bonedst-test-sections">
        {/* Before the Test */}
        {activeSection === "before" && (
          <div className="bonedst-test-section">
            <h2>Before the Test</h2>
            <ul>
              <li>
                <span style={{ color: "black", fontWeight: "bold" }}>
                  Avoid Calcium Supplements:{" "}
                </span>
                Do not take calcium supplements for at least 24 hours before
                your exam.{" "}
              </li>
              <li>
                <span style={{ color: "black", fontWeight: "bold" }}>
                Inform Doctor:
                </span>{" "}
                if you've recently had a barium exam or contrast injection, as these can interfere with bone test.                 </li>
              <li>
                <span style={{ color: "black", fontWeight: "bold" }}>
                  {" "}
                  Eat Normally:{" "}
                </span>
                You can eat as usual on the day of the exam.
              </li>
              <li>
                <span style={{ color: "black", fontWeight: "bold" }}>
                  {" "}
                  Wear Comfortable Clothing:{" "}
                </span>
                Opt for loose-fitting clothes without metal zippers, belts, or
                buttons.{" "}
              </li>
              <li>
                <span style={{ color: "black", fontWeight: "bold" }}>
                  {" "}
                  Schedule Appropriately:{" "}
                </span>
                Ensure the test is scheduled before any contrast exams, or wait at least 10 days.              </li>
            </ul>
          </div>
        )}

        {/* During the Test */}
        {activeSection === "during" && (
          <div className="bonedst-test-section">
            <h2>During the Test</h2>
            <ul>
              <li>
                <span style={{ color: "black", fontWeight: "bold" }}>
                  {" "}
                  Positioning:{" "}
                </span>
                You'll lie on a padded table; the scanner will pass over your
                lower spine and hip{" "}
              </li>
              <li>
                <span style={{ color: "black", fontWeight: "bold" }}>
                  Remain Still:{" "}
                </span>
                Stay as still as possible during the scan to ensure accurate
                results.{" "}
              </li>
              <li>
                <span style={{ color: "black", fontWeight: "bold" }}>
                  Breathing:{" "}
                </span>
                Continue to breathe normally throughout the procedure.{" "}
              </li>
              <li>
                <span style={{ color: "black", fontWeight: "bold" }}>
                  {" "}
                  Quick Procedure:{" "}
                </span>
                The scan typically takes about 10 to 30 minutes.{" "}
              </li>
              <li>
                <span style={{ color: "black", fontWeight: "bold" }}>
                  No Discomfort:{" "}
                </span>
                The test is painless and non-invasive.{" "}
              </li>
            </ul>
          </div>
        )}

        {/* After the Test */}
        {activeSection === "after" && (
          <div className="bonedst-test-section">
            <h2>After the Test</h2>
            <ul>
              <li>
                <span style={{ color: "black", fontWeight: "bold" }}>
                  Resume Normal Activities:
                </span>
                You can go back to your regular routine immediately after the
                test.
              </li>
              <li>
                <span style={{ color: "black", fontWeight: "bold" }}>
                  {" "}
                  No Side Effects:
                </span>{" "}
                There are usually no after-effects from the procedure.
              </li>
              <li>
                <span style={{ color: "black", fontWeight: "bold" }}>
                  {" "}
                  Discuss Results:
                </span>{" "}
                Your healthcare provider will review and discuss the results
                with you.
              </li>
              <li>
                <span style={{ color: "black", fontWeight: "bold" }}>
                  {" "}
                  Follow-Up:
                </span>{" "}
                If necessary, follow-up tests or treatments may be recommended
                based on the findings.
              </li>
              <li>
                <span style={{ color: "black", fontWeight: "bold" }}>
                  {" "}
                  Maintain Bone Health:
                </span>{" "}
                Continue with a bone-healthy lifestyle, including adequate
                calcium and vitamin D intake.{" "}
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default BoneDensityExpectation;
