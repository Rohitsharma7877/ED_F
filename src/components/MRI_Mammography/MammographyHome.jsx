import React from "react";
import MammographyHeader from "./MammographyHeader";
import WhatisMMGP from "./WhatisMMGP";
import BenefitsMMGP from "./BenefitsMMGP";
import WhyshouldMMGP from "./WhyshouldMMGP";
import MMGPExpectation from "./MMGPExpectation";

const MammographyHome = () => {
  return (
    <>
      <MammographyHeader />
      <WhatisMMGP />
      <BenefitsMMGP />
      <WhyshouldMMGP />
      <MMGPExpectation />
    </>
  );
};

export default MammographyHome;
