import React, { useState } from 'react'

function FAQ() {

    // const [activeIndex, setActiveIndex] = useState(null);

    // function toggleAccordion(index) {
    //     setActiveIndex(prevIndex => (prevIndex === index ? null : index));
    // }

    const [activeIndex, setActiveIndex] = useState(null); // State to track the active panel

    const togglePanel = (index) => {
        setActiveIndex(activeIndex === index ? null : index); // Toggle the active panel
    };

    const data = [
        {
            title: 'What is special about comparing rental car deals?',
            content: 'Comparing rental car deals is important as it helps find the best deal that fits your budget and requirements, ensuring you get the most value for your money. By comparing various options, you can find deals that offer lower prices, additional services, or better car models. You can find car rental deals by researching online and comparing prices from different rental companies.',
        },
        {
            title: 'How do I find the car rental deals?',
            content: 'You can find car rental deals by researching online and comparing prices from different rental companies. Websites such as Expedia, Kayak, and Travelocity allow you to compare prices and view available rental options. It is also recommended to sign up for email newsletters and follow rental car companies on social media to be informed of any special deals or promotions.',
        },
        {
            title: 'How do I find such low rental car prices?',
            content: 'Book in advance: Booking your rental car ahead of time can often result in lower prices. Compare prices from multiple companies: Use websites like Kayak, Expedia, or Travelocity to compare prices from multiple rental car companies. Look for discount codes and coupons: Search for discount codes and coupons that you can use to lower the rental price.',
        },
    ];

    return (
        <div className='flex-col'>
            <div className='flex-col txt-c faq'>
                <h1>Frequently Asked Questions</h1>
                <p>Frequently Asked Questions About the Car Rental Booking Process on Our Website: Answers to Common Concerns and Inquiries.</p>
            </div>

            <div className="accordion">
                {data.map((item, index) => (
                    <div key={index} className="accordion-item">
                        <div className="accordion-title" onClick={() => togglePanel(index)}>
                            <h3>{item.title}</h3>
                            <span className="accordion-arrow">{activeIndex === index ? '▲' : '▼'}</span>
                        </div>
                        <div
                            className={`accordion-content ${activeIndex === index ? 'open' : ''}`}
                            style={{
                                maxHeight: activeIndex === index ? '100px' : '0',
                            }}
                        >
                            <p>{item.content}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FAQ
