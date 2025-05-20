import React from "react";
import "./WhyshouldMG.css";
import img4 from "./img4.png";

const WhyshouldMG = () => {
  return (
    <div className="whyshouldMG-main1">
      <div className="whyshouldMG-main2">
        <div className="whyshouldMG-box1">
          <div className="whyshouldMG-box-image">
            <img src={img4} alt="ultrasoundPreaper-Image" />
          </div>
        </div>
        <div className="whyshouldMG-box2">
          <div className="whyshouldMG-box2-write">
            <div className="whyshouldMG-header">
              <h1>Who should get Mammography?</h1>
            </div>
          </div>
          <div className="whyshouldMG-point">
            <p>
              Mammography is recommended for women, especially those aged 40 and
              above, to detect early signs of breast cancer. It is also advised
              for individuals with a family history of breast cancer or other
              risk factors.{" "}
            </p>

            <div className="whyshouldMG-checklist">
              <ul>
                <li>Women aged 40+ should get regular screenings.</li>
                <li>
                  Those with a family history of breast cancer need earlier and
                  frequent check-ups.
                </li>
                <li>
                  Individuals with symptoms like lumps or pain should consult a
                  doctor.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyshouldMG;
