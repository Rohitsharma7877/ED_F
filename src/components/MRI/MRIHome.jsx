import React from "react";
import MRIHeader from "./MRIHeader";
import MRIScanSection from "./MRIScanSection";
import BenefitsMRI from "./BenefitsMRI";
import WhyshouldMRI from "./WhyshouldMRI";
import MRItestExpectation from "./MRItestExpectation";

const MRIHome = () => {
  return (
    <div>
      <MRIHeader />
      <MRIScanSection />
      <BenefitsMRI />
      <WhyshouldMRI />
      <MRItestExpectation />
    </div>
  );
};

export default MRIHome;
