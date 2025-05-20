import React from 'react'
import './howtoprepear.css'
import howprepare from './assests/ultraSoundPreparee.png'

const Howtoprepear = () => {
  return (
    <div className='howtoprepear-main1'>
      <div className='howtoprepear-main2'>
        <div className='howtoprepear-box1'>
          <div className='howtoprepear-box-image'>
            <img src={howprepare} alt='ultrasoundPreaper-Image'/>
          </div>
        </div>
        <div className='howtoprepear-box2'>
          <div className='howtoprepear-box2-write'>
            <div className='howtoprepear-header'>
              <h1>
              How do I prepare for an ultrasound?
              </h1>
            </div>
          </div>
          <div className='howtoprepear-point'>
              <p>
              The preparation for an ultrasound varies based on the organ or area being examined. For abdominal organs such as the liver, gallbladder, pancreas, or spleen, you may be advised to have a light meal the night before and fast until the procedure, though drinking water and taking prescribed medications is usually allowed. For other areas, you might need to drink plenty of water and keep your bladder full. Be sure to follow your doctor’s instructions and clarify any questions beforehand.
              </p>
            </div>
        </div>
        
      </div>
    </div>
  )
}

export default Howtoprepear