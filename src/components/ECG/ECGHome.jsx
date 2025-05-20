import React from 'react'
import Electrocardiogram from './Electrocardiogram'
import WhatisECG from './WhatisECG'
import BenefitsECG from './BenefitsECG'
import WhyshouldECG from './WhyshouldECG'
import ECGExpectation from './ECGExpectation'

const ECGHome = () => {
  return (
    <>
       <Electrocardiogram/> 
       <WhatisECG/>
        <BenefitsECG/>
        <WhyshouldECG/>
        <ECGExpectation/>
    </>
  )
}

export default ECGHome