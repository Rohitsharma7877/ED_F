import React from "react";
import "./goodFact.css";
import { RxDotFilled } from "react-icons/rx";

const GoodFact = () => {
  return (
    <div className="mliora-main1">
      <div className="mliora-main2">
        <div className="mliora-box1">
          <p>Our Value</p>
        </div>
        <div className="mliora-box2">
          <h1>Expert-Diagnostics!</h1>
        </div>
        <div className="mliora-box3"></div>
        <div className="mliora-box4">
          <p>
            "Maintaining heart health is essential for a long, active life.
            Regular exercise, a balanced diet, and stress management can keep
            your heart strong. Protecting your heart today ensures a healthier
            tomorrow."
          </p>
        </div>
        <div className="mliora-box5">
          <div className="mliora-list">
            <ul>
              <li>
                <p>
                  <RxDotFilled />
                </p>
                <h1>HEALTHY LIFESTYLE</h1>
              </li>

              <li>
                <p>
                  <RxDotFilled />
                </p>
                <h1>PHYSICAL WELL-BEING</h1>
              </li>

              <li>
                <p>
                  <RxDotFilled />
                </p>
                <h1>MENTAL WELLNESS</h1>
              </li>

              <li>
                <p>
                  <RxDotFilled />
                </p>
                <h1>HEALTHY EATING</h1>
              </li>

              <li>
                <p>
                  <RxDotFilled />
                </p>
                <h1>EXERCISE & FITNESS</h1>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoodFact;
