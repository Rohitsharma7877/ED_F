import React from 'react'
import './UTBenefits.css'
import image3 from './utImage3.jpg'


const UTBenefits = () => {
  return (
    <div className="uTBenefits-container">
      <div className="uTBenefits-content">
        <div className="uTBenefits-details">
          <div className="uTBenefits-header">
            <h1>Why do I need an Ultrasonography Test?</h1>
          </div>
          <div className="uTBenefitslist">
            <ul>
              <li>
                <span className="check-icon">✔</span>
                Pregnancy Monitoring: To check fetal health, growth, and development.
              </li>
              <li>
                <span className="check-icon">✔</span>
                Abdominal Issues: To diagnose problems in organs like the liver, kidneys, or gallbladder.
              </li>
              <li>
                <span className="check-icon">✔</span>
                Heart Conditions: To assess heart function and detect abnormalities.
              </li>
              <li>
                <span className="check-icon">✔</span>
                Detect Abnormal Growths: To identify tumors, cysts, or fluid buildup.
              </li>
              <li>
                <span className="check-icon">✔</span>
                Guide Medical Procedures: To assist in biopsies or fluid drainage.
              </li>
              <li>
                <span className="check-icon">✔</span>
                Blood Flow Analysis: To check blood circulation in veins and arteries.
              </li>
            </ul>
          </div>
        </div>
        <div className="uTBenefits-image">
          <img src={image3} alt="CT Scan" />
        </div>
      </div>
    </div>
  )
}

export default UTBenefits