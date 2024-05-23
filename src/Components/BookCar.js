import React from 'react'

function BookCar() {
  return (
    <div className='book shadow'>
      <h2>&nbsp;&nbsp;Book a car</h2>
      <form action="">
        <div className='flex-col book-sm-cont'>
          <p><i class="fa-solid fa-car"></i>&nbsp;&nbsp;Select your car type *</p>
          <select id="cars" name="cars">
            <option value="volvo">Select model</option>
            <option value="volvo">Audi A1 S-Line</option>
            <option value="saab">VW Golf 6</option>
            <option value="fiat">Toyota Camry</option>
            <option value="audi">BMW 320 ModernLine</option>
            <option value="audi">Mercedes-Benz GLK</option>
            <option value="saab">VW Passat CC</option>
          </select>
        </div>

        <div className='flex-col book-sm-cont'>
          <p><i class="fa-solid fa-location-dot"></i>&nbsp;&nbsp;Pick-up *</p>
          <select id="cars" name="cars">
            <option value="volvo">Select address</option>
            <option value="volvo">Delhi</option>
            <option value="saab">Mumbai</option>
            <option value="fiat">Banglore</option>
            <option value="audi">Lucknow</option>
          </select>
        </div>

        <div className='flex-col book-sm-cont'>
          <p><i class="fa-solid fa-location-dot"></i>&nbsp;&nbsp;Drop-of *</p>
          <select id="cars" name="cars">
            <option value="volvo">Select address</option>
            <option value="volvo">Delhi</option>
            <option value="saab">Mumbai</option>
            <option value="fiat">Banglore</option>
            <option value="audi">Lucknow</option>
          </select>
        </div>

        <div className='flex-col book-sm-cont'>
          <p><i class="fa-solid fa-calendar-days"></i>&nbsp;&nbsp;Pick-up *</p>
          <input type="date" />
        </div>

        <div className='flex-col book-sm-cont'>
          <p><i class="fa-solid fa-calendar-days"></i>&nbsp;&nbsp;Drop-of *</p>
          <input type="date" />
        </div>

        <div className='flex-col book-sm-cont'>
          <p>&nbsp;</p>
          <button className='orange-long'>Search</button>
        </div>

      </form>
    </div>
  )
}

export default BookCar