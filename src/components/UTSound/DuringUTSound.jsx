import React from "react";
import "./duringUTSound.css";
import utimage4 from "./utimage4.png";

const DuringUTSound = () => {
  return (
    <div className="duringUTSound-main1">
      <div className="duringUTSound-main2">
        <div className="duringUTSound-box1">
          <div className="duringUTSound-box1-header">
            <h1>During an Ultrasound?</h1>
          </div>
          <div className="duringUTSound-box">
            <div className="duringUTSound-box1-pragha">
              <p>
                During an ultrasound, a healthcare professional uses a handheld
                device called a transducer to emit sound waves and capture
                real-time images of internal body structures. The procedure is
                painless, non-invasive, and typically lasts 15-45 minutes.
              </p>
            </div>
            <hr />
            <div className="duringUTSound-checklist">
              <ul>
                <li>
                A transducer is moved over the skin to capture images
                </li>
                <li>
                Sound waves create visuals of internal structures in real time.
                </li>
                <li>The procedure is safe, painless, and quick.</li>
              </ul>
            </div>
          </div>

          <div className="duringUTSound-box1-header">
            <h1>Analyzes Ultrasound Results?</h1>
          </div>
          <div className="duringUTSound-box">
            <div className="duringUTSound-box1-pragha">
              <p>
              Ultrasound results are analyzed by a radiologist or a trained healthcare professional who examines the images to identify abnormalities. They provide a detailed report to the referring doctor for further evaluation.
              </p>
            </div>
            <hr />
            <div className="duringUTSound-checklist">
              <ul>
                <li>Radiologists interpret ultrasound images.</li>
                <li>Results identify conditions like cysts, tumors, or organ issues.</li>
                <li>A report is sent to your doctor for diagnosis and treatment planning.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="duringUTSound-box2">
          <div className="duringUTSound-doctor">
            <img src={utimage4} alt="duringUTSoundImage" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DuringUTSound;
