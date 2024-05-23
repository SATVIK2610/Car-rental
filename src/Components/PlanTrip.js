import React from 'react'

function PlanTrip() {
  return (
    <div className='flex-col plan'>
      <div className='txt-c'>
        <h3>Plan your trip now</h3>
        <h1>Quick & easy car rental</h1>
      </div>
      <div className='flex-row'>
        <div className='options flex-col txt-c'>
          <div id='bg-1'></div>
          <h2>Select Car</h2>
          <p>We offers a big range of vehicles for all your driving needs. We have the perfect car to meet your needs</p>
        </div>
        <div className='options flex-col txt-c'>
          <div id='bg-2'></div>
          <h2>Contact Operator</h2>
          <p>Our knowledgeable and friendly operators are always ready to help with any questions or concerns</p>
        </div>
        <div className='options flex-col txt-c'>
          <div id='bg-3'></div>
          <h2>Let's Drive</h2>
          <p>Whether you're hitting the open road, we've got you covered with our wide range of cars</p>
        </div>
      </div>
    </div>
  )
}

export default PlanTrip