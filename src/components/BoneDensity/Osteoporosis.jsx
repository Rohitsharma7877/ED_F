import React from "react";
import "./osteoporosis.css";
import bonedensity from "./assests/bonedensityImage3.jpg";

const Osteoporosis = () => {
  return (
    <div className="osteoporosis-main1">
      <div className="osteoporosis-main2">
        <div className="osteoporosis-box1">
          <div className="osteoporosis-box1-header">
            <h1>What is Osteoporosis?</h1>
          </div>
          <div className="osteoporosis-box">
            <div className="osteoporosis-box1-pragha">
              <p>
                Osteoporosis causes bones to become weaker by lowering their
                density and strength, making them more prone to fractures.
                Common fractures occur in the wrist, spine, and hip, often
                without obvious signs. The condition develops gradually as bone
                loss exceeds the creation of new bone, leading to increased
                fragility over time.
              </p>
            </div>
            <hr/>
            <div className="osteoporosis-checklist">
              <ul>
                <li>
                  Lack of exercise, smoking, excessive alcohol consumption, and
                  low body weight.
                </li>
                <li>
                  Deficiency in calcium and vitamin D, along with a history of
                  fractures or rheumatoid arthritis.
                </li>
                <li>Family history of osteoporosis and genetic factors.</li>
              </ul>
            </div>
          </div>

          <div className="osteoporosis-box1-header">
            <h1>Symptoms of Osteoporosis?</h1>
          </div>
          <div className="osteoporosis-box">
            <div className="osteoporosis-box1-pragha">
              <p>
                In the early stages, osteoporosis often shows no noticeable
                symptoms. However, as the bones weaken, symptoms may include:
              </p>
            </div>
            <hr/>
            <div className="osteoporosis-checklist">
              <ul>
                <li>A hunched or bent posture.</li>
                <li>Loss of height over time.</li>
                <li>Increased risk of bone fractures with minimal impact.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="osteoporosis-box2">
          <div className="osteoporosis-doctor">
            <img src={bonedensity} alt="osteoporosisImage" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Osteoporosis;
