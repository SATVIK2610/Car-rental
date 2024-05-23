import React from 'react'

function Hero() {
  return (
    <div id='car-div'>
      <div className='hero-div'>
        <div>
          <h3>Plan your trip now</h3>
          <h1>Save <span>big</span> with our</h1>
          <h1>car rental</h1>
          <p>Rent the car of your dreams. Unbeatable prices, unlimited miles, flexible pick-up options and much more.</p>
        </div>
        <div>
          <button className='orange'>Book Ride &nbsp;<i class="fa-regular fa-circle-check"></i></button>
          <button className='black'>Learn More &gt;</button>
        </div>
      </div>
    </div>
  )
}

export default Hero