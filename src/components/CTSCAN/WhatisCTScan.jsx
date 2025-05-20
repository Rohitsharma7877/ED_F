import React from 'react'
import './whatisCTScan.css'
import img1 from './ctImg3.jpg'

const WhatisCTScan = () => {
  return (
    <div className="whatisCTScan-container">
      <div className="whatisCTScan-image">
        <img src={img1} alt="MRI Scan" />
      </div>
      <div className="whatisCTScan-text">
        <h1>What is CT Scan?</h1>
        <div className="whatisCTScan-list">
          <p>
          A CT (Computed Tomography) scan uses X-rays and computer technology to create detailed cross-sectional images of the body. It helps diagnose injuries, infections, and diseases by providing clear visuals of bones, organs, and tissues. CT scans are quick, non-invasive, and widely used in medical diagnostics.
          </p>
          <div className="whatisCTScan-scanlist">
            <ul>
              <li>
                <span className="check-icon">✔</span>
                Provides 3D images of internal structures.
              </li>
              <li>
                <span className="check-icon">✔</span>
                Detects tumors, fractures, and infections.
              </li>
              <li>
                <span className="check-icon">✔</span>
                Quick and painless procedure.
              </li>
              <li>
                <span className="check-icon">✔</span>
                Ideal for emergency medical situations.
              </li>
            
            </ul>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default WhatisCTScan