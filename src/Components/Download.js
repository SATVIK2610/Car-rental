import React from 'react'
import google from '../assets/google.svg'
import apple from '../assets/apple.svg'
import bg from '../assets/down-bg.png'


function Download() {
  return (
    <div className='bg-img'>
        <div className='flex-col left-cont'>
            <h1>Download our app to get most out of it</h1>
            <p>Thrown shy denote ten ladies though ask saw. Or by to he going think order event music. Incommode so intention defective at convinced. Led income months itself and houses you.</p>
            <div className='flex-row logos'>
                <img src={google} alt="" />
                <img src={apple} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Download