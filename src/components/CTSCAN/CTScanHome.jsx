import React from "react";
import CTScanHeader from "./CTScanHeader";
import WhatisCTScan from "./WhatisCTScan";
import BenefitsCTScan from "./BenefitsCTScan";
import WhyshouldCTScan from "./WhyshouldCTScan";
import CTScanExpectation from "./CTScanExpectation";

const CTScanHome = () => {
  return (
    <>
      <CTScanHeader />
      <WhatisCTScan />
      <BenefitsCTScan />
      <WhyshouldCTScan />
      <CTScanExpectation />
    </>
  );
};

export default CTScanHome;
