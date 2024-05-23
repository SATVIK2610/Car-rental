import React from 'react'
import myImage from '../assets/chooseImg.png'
import img1 from '../assets/img11.png'
import img2 from '../assets/img22.png'
import img3 from '../assets/img33.png'

function WhyChooseUs() {
  return (
    <div id='bg-tire'>
      <div className='txt-c'>
        <img src={myImage} alt="" />
      </div>
      <div className='flex-row'>
        <div className='flex-col choose'>
          <h3>Why Choose Us</h3>
          <h1>Best valued deals you will ever find</h1>
          <p>Discover the best deals you'll ever find with our unbeatable offers. We're dedicated to providing you with the best value for your money, so you can enjoy top-quality services and products without breaking the bank. Our deals are designed to give you the ultimate renting experience, so don't miss out on your chance to save big.</p>
          <button className='orange m-top'>Find Details &gt;</button>
        </div>
        <div className='flex-col side-cont'>
          <div className='flex-row m-below'>
            <img src={img1} alt="" />
            <div className='flex-col inside-side-cont'>
              <h2>Cross Country Drive</h2>
              <p>Take your driving experience to the next level with our top-notch vehicles for your cross-country adventures.</p>
            </div>
          </div>
          <div className='flex-row m-below'>
            <img src={img2} alt="" />
            <div className='flex-col inside-side-cont'>
              <h2>All Inclusive Pricing</h2>
              <p>Get everything you need in one convenient, transparent price with our all-inclusive pricing policy.</p>
            </div>
          </div>
          <div className='flex-row m-below'>
            <img src={img3} alt="" />
            <div className='flex-col inside-side-cont'>
              <h2>No Hidden Charges</h2>
              <p>Enjoy peace of mind with our no hidden charges policy. We believe in transparent and honest pricing.</p>
            </div>
          </div>
        </div>


      </div>
    </div>
  )
}

export default WhyChooseUs