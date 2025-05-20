import React from "react";
import "./WhyshouldMMGP.css";
import mrimmgp from "./mrimgp1.png";

const WhyshouldMMGP = () => {
  return (
    <div className="whyshouldMMGP-main1">
      <div className="whyshouldMMGP-main2">
        <div className="whyshouldMMGP-box1">
          <div className="whyshouldMMGP-box-image">
            <img src={mrimmgp} alt="ultrasoundPreaper-Image" />
          </div>
        </div>
        <div className="whyshouldMMGP-box2">
          <div className="whyshouldMMGP-box2-write">
            <div className="whyshouldMMGP-header">
              <h1>Who should get MRI-Mammography?</h1>
            </div>
          </div>
          <div className="whyshouldMMGP-point">
            <p>
              MRI-Mammography is recommended for individuals at high risk of
              breast cancer, such as those with a family history or genetic
              mutations. It is also beneficial for evaluating dense breast
              tissue or inconclusive mammogram results.{" "}
            </p>

            <div className="whyshouldMMGP-checklist">
              <ul>
                <li>
                  High-risk individuals with a family history of breast cancer.
                </li>
                <li>
                  People with dense breast tissue or unclear mammogram results.{" "}
                </li>
                <li>Patients with BRCA1/BRCA2 genetic mutations.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyshouldMMGP;
