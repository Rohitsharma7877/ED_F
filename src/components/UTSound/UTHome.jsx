import React from 'react'
import UTHeader from './UTHeader'
import UTBenefits from './UTBenefits'
import WhatisUTS from './WhatisUTS'
import WhyshouldUTS from './WhyshouldUTS'
import UTSoundExpectation from './UTSoundExpectation'

const UTHome = () => {
  return (
    <>
        <UTHeader/>
        <WhatisUTS />
        <UTBenefits/>
        <WhyshouldUTS/>
        <UTSoundExpectation/>
    </>
  )
}

export default UTHome