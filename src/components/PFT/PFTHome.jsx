import React from 'react'
import PFTHeader from './PFTHeader'
import WhatisPFT from './WhatisPFT'
import BenefitsPFT from './BenefitsPFT'
import WhyshouldPFT from './WhyshouldPFT'
import PFTExpectation from './PFTExpectation'

const PFTHome = () => {
  return (
    <>
        <PFTHeader/>
        <WhatisPFT/>
        <BenefitsPFT/>
        <WhyshouldPFT/>
        <PFTExpectation/>
    </>
  )
}

export default PFTHome