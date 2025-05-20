import React from "react";
import TmtHeader from "./TmtHeader";
import TmtTestExpectation from "./TmtTestExpectation";
import WhatisTMT from "./WhatisTMT";
import BenefitsTMT from "./BenefitsTMT";
import WhyshouldTMT from "./WhyshouldTMT";

const TmtHome = () => {
  return (
    <div>
      <TmtHeader />
      <WhatisTMT />
      <BenefitsTMT />
      <WhyshouldTMT/>
      <TmtTestExpectation />
    </div>
  );
};

export default TmtHome;
