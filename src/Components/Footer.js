import React from 'react'

function Footer() {
  return (
    <div className='grid-4 lh p-h footer'>
      <div className="flex-col car-rent">
        <h2>CAR <span>Rental</span></h2>
        <p>We offers a big range of vehicles for all your driving needs. We have the perfect car to meet your needs.</p>
        <h3><i class="fa-solid fa-phone-volume"></i>&nbsp;(123) -456-789</h3>
        <h3>carrental@gmail.com</h3>
      </div>
      <div className="flex-col car-rent">
        <h2>COMPANY</h2>
        <a href="">New york</a>
        <a href="">Careers</a>
        <a href="">Mobile</a>
        <a href="">Blog</a>
        <a href="">How we work</a>
      </div>
      <div className="flex-col car-rent">
        <h2>WORKING HOURS</h2>
        <p>Mon - Fri: 9:00AM - 9:00PM</p>
        <p>Sat: 9:00AM - 19:00PM</p>
        <p>Sun: Closed</p>
      </div>
      <div className="flex-col car-rent">
        <h2>SUBSCRIPTION</h2>
        <p>Subscribe your Email address for latest news & updates.</p>
      </div>
    </div>
  )
}

export default Footer