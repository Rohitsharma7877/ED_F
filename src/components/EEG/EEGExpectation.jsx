import React, { useState }from 'react'
import './EEGExpectation.css'

const EEGExpectation = () => {
  const [activeSection, setActiveSection] = useState("before");
  
    const handleClick = (section) => {
      setActiveSection(section);
    };
  return (
    <div className="eeg-test-container">
      {/* <TiTick className="tick-icon" /> */}
      <h1>What to Expect Before, During & After a Electroencephalogram Test</h1>

      {/* Section Navigation */}
      <div className="ee-section-nav">
        <button
          className={`ee-section-button ${
            activeSection === "before" ? "active" : ""
          }`}
          onClick={() => handleClick("before")}
        >
          Before Test
        </button>
        <button
          className={`ee-section-button ${
            activeSection === "during" ? "active" : ""
          }`}
          onClick={() => handleClick("during")}
        >
          During Test
        </button>
        <button
          className={`ee-section-button ${
            activeSection === "after" ? "active" : ""
          }`}
          onClick={() => handleClick("after")}
        >
          After Test
        </button>
      </div>

      {/* Section Content */}
      <div className="eeg-test-sections">
        {/* Before the Test */}
        {activeSection === "before" && (
          <div className="eeg-test-section">
            <h2>Before the Test</h2>
            <ul>
              <li>
                <span style={{ color: "black", fontWeight: "bold" }}>
                Preparation:{" "}
                </span>
                Wash your hair to remove oils and hair products.
              </li>
              <li>
                <span style={{ color: "black", fontWeight: "bold" }}>
                Avoid Stimulants:
                </span>{" "}
                Refrain from caffeine or other stimulants before the test.
              </li>
              <li>
                <span style={{ color: "black", fontWeight: "bold" }}>
                  {" "}
                  Medication Disclosure:{" "}
                </span>
                Inform your doctor about all medications you are taking.
              </li>
              <li>
                <span style={{ color: "black", fontWeight: "bold" }}>
                  {" "}
                  Sleep Considerations:  {" "}
                </span>
                You may be asked to sleep less the night before to help induce sleep during the test.
              </li>
              <li>
                <span style={{ color: "black", fontWeight: "bold" }}>
                  {" "}
                  Comfortable Clothing:{" "}
                </span>
                Wear loose-fitting clothes to facilitate electrode placement.              </li>
            </ul>
          </div>
        )}

        {/* During the Test */}
        {activeSection === "during" && (
          <div className="eeg-test-section">
            <h2>During the Test</h2>
            <ul>
              <li>
                <span style={{ color: "black", fontWeight: "bold" }}>
                  {" "}
                  Electrode Placement:{" "}
                </span>
                Small electrodes are attached to your scalp using a conductive gel.              </li>
              <li>
                <span style={{ color: "black", fontWeight: "bold" }}>
                Relaxation:{" "}
                </span>
                You will be asked to lie still and relax during the procedure.              </li>
              <li>
                <span style={{ color: "black", fontWeight: "bold" }}>
                Duration: {" "}
                </span>
                The test typically lasts between 20 to 40 minutes.              </li>
              <li>
                <span style={{ color: "black", fontWeight: "bold" }}>
                  {" "}
                  Stimulation:{" "}
                </span>
                You may be asked to hyperventilate or look at a flashing light to provoke brain activity.              </li>
              <li>
                <span style={{ color: "black", fontWeight: "bold" }}>
                Communication:{" "}
                </span>
                Inform the technician if you feel discomfort or need assistance.              </li>
            </ul>
          </div>
        )}

        {/* After the Test */}
        {activeSection === "after" && (
          <div className="eeg-test-section">
            <h2>After the Test</h2>
            <ul>
              <li>
                <span style={{ color: "black", fontWeight: "bold" }}>
                Hair Care:
                </span>
                Wash out the gel from your hair.              </li>
              <li>
                <span style={{ color: "black", fontWeight: "bold" }}>
                  {" "}
                  Normal Activity:
                </span>{" "}
                Resume regular activities unless instructed otherwise.
              </li>
              <li>
                <span style={{ color: "black", fontWeight: "bold" }}>
                  {" "}
                  Follow-Up Tests:
                </span>{" "}
                Additional tests may be recommended based on the findings.              </li>
              <li>
                <span style={{ color: "black", fontWeight: "bold" }}>
                  {" "}
                  Lifestyle Adjustments: 
                </span>{" "}
                Implement any lifestyle changes or treatments as advised by your healthcare provider.              </li>
              <li>
                <span style={{ color: "black", fontWeight: "bold" }}>
                  {" "}
                  Results Discussion: 
                </span>{" "}
                Your doctor will discuss the results with you at a follow-up appointment.              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

export default EEGExpectation