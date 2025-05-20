import React from 'react'
import './WhoShouldBMD.css'
import howprepare from './bmdImage4.png'


const WhoShouldBMD = () => {
  return (
    <div className='whoShouldBMD-main1'>
      <div className='whoShouldBMD-main2'>
        <div className='whoShouldBMD-box1'>
          <div className='whoShouldBMD-box-image'>
            <img src={howprepare} alt='ultrasoundPreaper-Image'/>
          </div>
        </div>
        <div className='whoShouldBMD-box2'>
          <div className='whoShouldBMD-box2-write'>
            <div className='whoShouldBMD-header'>
              <h1>
              Who should get Bone Mineral Density?
              </h1>
            </div>
          </div>
          <div className='whoShouldBMD-point'>
              <p>
              Osteoporosis can affect anyone, with risk factors increasing with age. It’s important to consider the BMD test, especially for those with specific risk factors.
              </p>

              {/* <hr/> */}
            <div className="whoShouldBMD-checklist">
              <ul>
                <li>
                Women aged 65 or older and men aged 70 or above.
                </li>
                <li>
                Postmenopausal women and men aged 50 or older with additional risk factors.
                </li>
                <li>Individuals who have had a fracture after age 50 or a history of hip fractures.</li>
                <li>People who smoke, experience unexplained back pain, or have a hunched posture</li>
                {/* <li>Those with conditions like Type-1 diabetes, kidney or liver disease, or a family history of osteoporosis.</li> */}
              </ul>
            </div>
            </div>
            
        </div>
        
      </div>
    </div>
  )
}

export default WhoShouldBMD