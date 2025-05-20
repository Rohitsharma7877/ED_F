import React from 'react'
import './whyshouldCTScan.css'
import ctscanimg5 from './ctscanimg5.png'

const WhyshouldCTScan = () => {
  return (
    <div className="whyshouldCTScan-main1">
      <div className="whyshouldCTScan-main2">
        <div className="whyshouldCTScan-box1">
          <div className="whyshouldCTScan-box-image">
            <img src={ctscanimg5} alt="ultrasoundPreaper-Image" />
          </div>
        </div>
        <div className="whyshouldCTScan-box2">
          <div className="whyshouldCTScan-box2-write">
            <div className="whyshouldCTScan-header">
              <h1>Who should get CT Scan?</h1>
            </div>
          </div>
          <div className="whyshouldCTScan-point">
            <p>
            Individuals with injuries, unexplained symptoms, or conditions like tumors, blood clots, or organ issues may require a CT scan for accurate diagnosis.
            </p>

            <div className="whyshouldCTScan-checklist">
              <ul>
                <li>Detects fractures and bone injuries.</li>
                <li>
                Diagnoses tumors and internal bleeding.
                </li>
                <li>Evaluates organ health, including the brain, lungs, and abdomen.</li>
                <li>
                Monitors treatment progress for certain diseases.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhyshouldCTScan