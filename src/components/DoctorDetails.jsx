import React from 'react'
import './doctordetails.css'
import doctor from './assests/doctorImage.png'

const DoctorDetails = () => {
  return (
    <div className='doctordetails-main1'>
        <div className='doctordetails-main2'>
            <div className='doctordetails-box1'>
                <div className='doctordetails-box1-image'>
                    <img src={doctor} alt='doctorIamge'/>
                </div>
            </div>
            <div className='doctordetails-box2'>
                <h1 className='doctordetails-doct-name'>
                    Dr. Vijay
                </h1>
            </div>
            <div className='doctordetails-box3'>
                <p>
                Monday to Saturday, 6 pm to 8 pm
                </p>
            </div>
            <div className='doctordetails-box4-button'>
            <button className='doctordetails-image-btn'>Book Me</button>
            </div>

        </div>
    </div>
  )
}

export default DoctorDetails