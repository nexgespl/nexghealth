import React from 'react'
import './Programm.css'
// import p8 from '../../assets/p8.png'
import MB from '../../assets/MB.png'
import ME from '../../assets/ME.png'
import I from '../../assets/I.png'
import R from '../../assets/R.png'
import H from '../../assets/H.png'
import medical from '../../assets/medical.png'
import IN from '../../assets/IN.png'
import MT from '../../assets/MT.png'






const Programm = () => {
  return (
    <>
<div className='title'>

        



    <h1>Our Services</h1>
        <p>Empowering Healthcare with Accuracy, Efficiency & Excellence.</p>

    <div className='programm'>
        <div className='programms'>
            <img src={MB} alt="" />
            <h4>Medical Billing Services</h4>
        </div>
        <div className='programms'>
            <img src={ME} alt="" />
            <h4>Medical Empanelment Services
</h4>
        </div>
        <div className='programms'>
            <img src={I} alt="" />
            <h4>Insurance Verification Services</h4>
        </div>
        <div className='programms'>
            <img src={R} alt="" />
            <h4>Revenue Cycle Management Services</h4>
        </div>
        <div className='programms'>
            <img src={H} alt="" />
            <h4>Healthcare Claims Adjudication</h4>
        </div>
        <div className='programms'>
            <img src={medical} alt="" />
            <h4>Medical Billing & Codding Services</h4>
        </div>
        <div className='programms'>
            <img src={IN} alt="" />
            <h4>Insurance Eligibility Services</h4>
        </div>
        <div className='programms'>
            <img src={MT} alt="" />
            <h4>Medical Transcription Services</h4>
        </div>
    </div>
    </div>
    </>
  )
}

export default Programm