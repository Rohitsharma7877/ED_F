import React, { useState } from 'react'
import './MGExpectation.css'

const MGExpectation = () => {
    const [activeSection, setActiveSection] = useState("before");
    
      const handleClick = (section) => {
        setActiveSection(section);
      };
  return (
    <div className="mmg-test-container">
      {/* <TiTick className="tick-icon" /> */}
      <h1>What to Expect Before, During & After a Mammography Test</h1>

      {/* Section Navigation */}
      <div className="mgr-section-nav">
        <button
          className={`mgr-section-button ${
            activeSection === "before" ? "active" : ""
          }`}
          onClick={() => handleClick("before")}
        >
          Before Test
        </button>
        <button
          className={`mgr-section-button ${
            activeSection === "during" ? "active" : ""
          }`}
          onClick={() => handleClick("during")}
        >
          During Test
        </button>
        <button
          className={`mgr-section-button ${
            activeSection === "after" ? "active" : ""
          }`}
          onClick={() => handleClick("after")}
        >
          After Test
        </button>
      </div>

      {/* Section Content */}
      <div className="mmg-test-sections">
        {/* Before the Test */}
        {activeSection === "before" && (
          <div className="mmg-test-section">
            <h2>Before the Test</h2>
            <ul>
              <li>
                <span style={{ color: "black", fontWeight: "bold",  }}>
                Consultation: {""}
                </span>
                Discuss any breast symptoms, family history, or previous mammograms with your doctor.
              </li>
              <li>
                <span style={{ color: "black", fontWeight: "bold" }}>
                Clothing:
                </span>{" "}
                Wear a two-piece outfit for easy removal of the top during the test.              </li>
              <li>
                <span style={{ color: "black", fontWeight: "bold" }}>
                  {" "}
                  Avoid Products:{" "}
                </span>
                Refrain from using deodorant, lotion, or powder on your breasts or underarms.
              </li>
              <li>
                <span style={{ color: "black", fontWeight: "bold" }}>
                  {" "}
                  Scheduling:  {" "}
                </span>
                Schedule the test when your breasts are least tender, typically a week after your period.
              </li>
              <li>
                <span style={{ color: "black", fontWeight: "bold" }}>
                  {" "}
                  Bring Previous Records:{" "}
                </span>
                Bring any prior mammogram images for comparison.
              </li>
            </ul>
          </div>
        )}

        {/* During the Test */}
        {activeSection === "during" && (
          <div className="mmg-test-section">
            <h2>During the Test</h2>
            <ul>
              <li>
                <span style={{ color: "black", fontWeight: "bold" }}>
                  {" "}
                  Positioning:{" "}
                </span>
                You'll stand in front of an X-ray machine, and your breast will be placed on a flat surface.
              </li>
              <li>
                <span style={{ color: "black", fontWeight: "bold" }}>
                Compression:{" "}
                </span>
                The breast will be compressed between two plates for clear imaging.
              </li>
              <li>
                <span style={{ color: "black", fontWeight: "bold" }}>
                Imaging:{" "}
                </span>
                X-rays are taken from different angles for thorough examination.
              </li>
              <li>
                <span style={{ color: "black", fontWeight: "bold" }}>
                  {" "}
                  Duration:{" "}
                </span>
                The procedure typically takes 15-30 minutes.
              </li>
              <li>
                <span style={{ color: "black", fontWeight: "bold" }}>
                Discomfort:  {" "}
                </span>
                TMild discomfort may occur due to the compression, but it’s brief.</li>
            </ul>
          </div>
        )}

        {/* After the Test */}
        {activeSection === "after" && (
          <div className="mmg-test-section">
            <h2>After the Test</h2>
            <ul>
              <li>
                <span style={{ color: "black", fontWeight: "bold" }}>
                Resuming Activities:
                </span>
                You can go back to normal activities immediately unless advised otherwise. </li>
              <li>
                <span style={{ color: "black", fontWeight: "bold" }}>
                  {" "}
                  Results: 
                </span>{" "}
                Results are usually available within a few days, and you will be notified if further tests are needed.</li>
              <li>
                <span style={{ color: "black", fontWeight: "bold" }}>
                  {" "}
                  Follow-Up: 
                </span>{" "}
                If abnormalities are found, your doctor will discuss additional tests or steps. </li>
              <li>
                <span style={{ color: "black", fontWeight: "bold" }}>
                  {" "}
                  No Side Effects:
                </span>{" "}
                There are typically no side effects after the procedure.    </li>
              <li>
                <span style={{ color: "black", fontWeight: "bold" }}>
                  {" "}
                  Keep Records: 
                </span>{" "}
                Retain your mammogram images for future reference or comparisons.   </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

export default MGExpectation