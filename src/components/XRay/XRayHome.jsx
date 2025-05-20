import React from "react";
import XRayHeader from "./XRayHeader";
import WhatisXRay from "./WhatisXRay";
import BenefitsXRay from "./BenefitsXRay";
import WhyshouldXRay from "./WhyshouldXRay";
import XrayExpectation from "./XrayExpectation";

const XRayHome = () => {
  return (
    <div>
      <XRayHeader />
      <WhatisXRay />
      <BenefitsXRay />
      <WhyshouldXRay />
      <XrayExpectation />
    </div>
  );
};

export default XRayHome;
