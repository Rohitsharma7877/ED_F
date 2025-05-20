import React from "react";
import "./WhatUTSound.css";
import utimage2 from "./utsound2.jpg";

const WhatUTSound = () => {
  return (
    <div className="whatUTSound-container">
      <div className="whatUTSound-image">
        <img src={utimage2} alt="MRI Scan" />
      </div>
      <div className="whatUTSound-text">
        <h1>What is Ultrasonography?</h1>
        <div className="whatUTSound-list">
          <p>
            Ultrasonography, commonly referred to as ultrasound, is a widely
            used diagnostic imaging technique that relies on high-frequency
            sound waves to create visual representations of the internal organs,
            tissues, and blood flow within the body. It is a non-invasive and
            painless procedure, making it one of the safest imaging methods
            available, as it does not involve exposure to radiation. In
            obstetrics, ultrasonography plays a crucial role in monitoring fetal
            growth and development during pregnancy, ensuring the health of both
            mother and baby. It is also extensively used in cardiology for
            assessing heart conditions.
          </p>
          <br/>
          <p>
            Ultrasonography is highly versatile and can be used in real-time to
            guide interventional procedures such as biopsies, fluid drainage, or
            catheter placements, improving precision and patient outcomes. Its
            portable and cost-effective nature makes it accessible even in
            remote or resource-limited settings. Additionally, advancements in
            technology have led to the development of 3D and 4D ultrasound
            imaging, providing more detailed and dynamic views of the body's
            internal structures. 
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhatUTSound;
