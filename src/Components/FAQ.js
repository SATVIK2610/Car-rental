import React, { useState } from 'react'

function FAQ() {

    const [activeIndex, setActiveIndex] = useState(null);

    function toggleAccordion(index) {
        setActiveIndex(prevIndex => (prevIndex === index ? null : index));
    }
    return (
        <div className='flex-col'>
            <div className='flex-col txt-c faq'>
                <h3>FAQ</h3>
                <h1>Frequently Asked Questions</h1>
                <p>Frequently Asked Questions About the Car Rental Booking Process on Our Website: Answers to Common Concerns and Inquiries.</p>
            </div>
            {/* <div className='acc'>
                <button class="accordion">Section 1</button>
                <div class="panel">
                    <p>Lorem ipsum...</p>
                </div>

                <button class="accordion">Section 2</button>
                <div class="panel">
                    <p>Lorem ipsum...</p>
                </div>

                <button class="accordion">Section 3</button>
                <div class="panel">
                    <p>Lorem ipsum...</p>
                </div>
            </div> */}
            <div className='bg-img-mini'>
                <div className="accordion shadow">
                    <article>
                        <input id="article1" type="radio" name="articles" checked />
                        <label for="article1">
                            <h2>1. What is special about comparing rental car deals?</h2>
                        </label>
                        <div>
                            <p>Comparing rental car deals is important as it helps find the best deal that fits your budget and requirements, ensuring you get the most value for your money. By comparing various options, you can find deals that offer lower prices, additional services, or better car models. You can find car rental deals by researching online and comparing prices from different rental companies.</p>
                        </div>
                    </article>

                    <article>
                        <input id="article2" type="radio" name="articles" />
                        <label for="article2">
                            <h2>2. How do I find the car rental deals?</h2>
                        </label>
                        <div>
                            <p>You can find car rental deals by researching online and comparing prices from different rental companies. Websites such as Expedia, Kayak, and Travelocity allow you to compare prices and view available rental options. It is also recommended to sign up for email newsletters and follow rental car companies on social media to be informed of any special deals or promotions.</p>
                        </div>
                    </article>

                    <article>
                        <input id="article3" type="radio" name="articles" />
                        <label for="article3">
                            <h2>3. How do I find such low rental car prices?</h2>
                        </label>
                        <div>
                            <p>Book in advance: Booking your rental car ahead of time can often result in lower prices. Compare prices from multiple companies: Use websites like Kayak, Expedia, or Travelocity to compare prices from multiple rental car companies. Look for discount codes and coupons: Search for discount codes and coupons that you can use to lower the rental price. Renting from an off-airport location can sometimes result in lower prices.</p>
                        </div>
                    </article>
                </div>

            </div>
        </div>
    )
}

export default FAQ