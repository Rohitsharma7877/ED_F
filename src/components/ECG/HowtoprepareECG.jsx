import React from 'react'
import './howtoprepareECG.css'
import howprepareE from './ecgIconsImage5.png'


const HowtoprepareECG = () => {
  return (
    <div className='howtoprepareECG-main1'>
      <div className='howtoprepareECG-main2'>
        <div className='howtoprepareECG-box1'>
          <div className='howtoprepareECG-box-image'>
            <img src={howprepareE} alt='ecgIconsImage5-Image'/>
          </div>
        </div>
        <div className='howtoprepareECG-box2'>
          <div className='howtoprepareECG-box2-write'>
            <div className='howtoprepareECG-header'>
              <h1>
              Why Need Electrocardiogram?
              </h1>
            </div>
          </div>
          <div className='howtoprepareECG-point'>
              <p>
              An ECG test may be recommended if you have risk factors for heart disease, such as high blood pressure, or symptoms like palpitations, dizziness, or chest pain. It is also advised if you already have a heart condition, your doctor suspects heart disease, or you’ve had cardiac procedures or surgeries. Additionally, your doctor might suggest an ECG to assess your heart's rate, rhythm, and size before undergoing non-cardiac procedures or surgeries.
              </p>
            </div>
        </div>
        
      </div>
    </div>
  )
}

export default HowtoprepareECG