import React from 'react'
import './whatdoesecg.css'
import ecggraph from './ecgImage4.jpg'

const WhatDoesECG = () => {
  return (
    <div className="whatDoesECG-main1">
      <div className="whatDoesECG-main2">
        <div className="whatDoesECG-box1">
          <div className="whatDoesECG-box1-header">
            <h1>What is whatDoesECG?</h1>
          </div>
          <div className="whatDoesECG-box">
            <div className="whatDoesECG-box1-pragha">
              <p>
                whatDoesECG causes bones to become weaker by lowering their
                density and strength, making them more prone to fractures.
                Common fractures occur in the wrist, spine, and hip, often
                without obvious signs. The condition develops gradually as bone
                loss exceeds the creation of new bone, leading to increased
                fragility over time.
              </p>
            </div>
            <hr/>
            <div className="whatDoesECG-checklist">
              <ul>
                <li>
                  Lack of exercise, smoking, excessive alcohol consumption, and
                  low body weight.
                </li>
                <li>
                  Deficiency in calcium and vitamin D, along with a history of
                  fractures or rheumatoid arthritis.
                </li>
                <li>Family history of whatDoesECG and genetic factors.</li>
              </ul>
            </div>
          </div>

          <div className="whatDoesECG-box1-header">
            <h1>Symptoms of whatDoesECG?</h1>
          </div>
          <div className="whatDoesECG-box">
            <div className="whatDoesECG-box1-pragha">
              <p>
                In the early stages, whatDoesECG often shows no noticeable
                symptoms. However, as the bones weaken, symptoms may include:
              </p>
            </div>
            <hr/>
            <div className="whatDoesECG-checklist">
              <ul>
                <li>A hunched or bent posture.</li>
                <li>Loss of height over time.</li>
                <li>Increased risk of bone fractures with minimal impact.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="whatDoesECG-box2">
          <div className="whatDoesECG-doctor">
            <img src={ecggraph} alt="whatDoesECGImage" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhatDoesECG