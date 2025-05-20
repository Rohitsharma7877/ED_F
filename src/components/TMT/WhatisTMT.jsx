import React from 'react'
import './WhatisTMT.css'
import tmtimg2 from './tmtt.jpeg'

const WhatisTMT = () => {
  return (
    <div className="whatisTMT-container">
      <div className="whatisTMT-image">
        <img src={tmtimg2} alt="MRI Scan" />
      </div>
      <div className="whatisTMT-text">
        <h1>What is Treadmill Testing?</h1>
        <div className="whatisTMT-list">
          <p>
          Treadmill Testing (TMT), also known as a stress test, is a diagnostic procedure used to evaluate heart function during physical activity. It monitors the heart's response to stress by recording heart rate, blood pressure, and ECG while walking or running on a treadmill. This test helps identify issues like blocked arteries or irregular heart rhythms and assess overall cardiovascular health.
          </p>
          <div className="whatisTMT-scanlist">
            <ul>
              <li>
                <span className="check-icon">✔</span>
                Evaluates heart function under physical stress.
              </li>
              <li>
                <span className="check-icon">✔</span>
                Detects blocked arteries and irregular heart rhythms.
              </li>
              <li>
                <span className="check-icon">✔</span>
                Helps assess cardiovascular fitness and risk of heart disease.
              </li>
              
            
            </ul>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default WhatisTMT