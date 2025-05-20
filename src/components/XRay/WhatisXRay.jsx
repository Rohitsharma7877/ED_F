import React from 'react'
import "./WhatisXRay.css"
import XRay from './xrayimg7.jpg'

const WhatisXRay = () => {
  return (
    <div className="whatisXRay-container">
      <div className="whatisXRay-image">
        <img src={XRay} alt="MRI Scan" />
      </div>
      <div className="whatisXRay-text">
        <h1>What is X-Ray?</h1>
        <div className="whatisXRay-list">
          <p>
          An X-ray is a quick, non-invasive imaging technique that uses electromagnetic radiation to create images of the inside of the body. It is commonly used to visualize bones, detect fractures, and diagnose chest or abdominal issues. X-rays help doctors identify injuries or illnesses quickly and guide appropriate treatments.
          </p>
          <div className="whatisXRay-scanlist">
            <ul>
              <li>
                <span className="check-icon">✔</span>
                Uses electromagnetic radiation for imaging.
              </li>
              <li>
                <span className="check-icon">✔</span>
                Ideal for detecting bone fractures and joint issues.
              </li>
              <li>
                <span className="check-icon">✔</span>
                Quick and painless diagnostic tool.
              </li>
              <li>
                <span className="check-icon">✔</span>
                Commonly used for chest, bone, and dental exams.
              </li>
            
            </ul>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default WhatisXRay