import React from 'react'
import harry from '../assets/harry.jpg'
import ron from '../assets/ron.jpg'
import comma from '../assets/comma.svg'

function Testimonials() {
    return (
        <div className='flex-col main-test'>
            <div className='flex-col head-test txt-c'>
                <h3>Reviewed by People</h3>
                <h1>Client's Testimonials</h1>
                <p>Discover the positive impact we've made on the our clients by reading through their testimonials. Our clients have experienced our service and results, and they're eager to share their positive experiences with you.</p>
            </div>
            <div className='flex-row width-sm '>
                <div className="flex-col rev-cards shadow">
                    <h3>"We rented a car from this website and had an amazing experience! The booking was easy and the rental rates were very affordable. "</h3>
                    <div className='flex-row sp-btw'>
                        <div className="flex-row test-cont sp-btw">
                            <img src={harry} alt="" />
                            <div className='flex-col test-in'>
                                <h2>Harry Potter</h2>
                                <p>Belgrade</p>
                            </div>
                        </div>
                        <img src={comma} alt="" />
                    </div>
                </div>
                <div className="flex-col rev-cards shadow">
                    <h3>"The car was in great condition and made our trip even better. Highly recommend for this car rental website!"</h3>
                    <div className='flex-row sp-btw'>
                        <div className="flex-row test-cont sp-btw">
                            <img src={ron} alt="" />
                            <div className='flex-col test-in'>
                                <h2>Ron Rizzly</h2>
                                <p>Rovi Sad</p>
                            </div>
                        </div>
                        <img src={comma} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials