import React from 'react'
import Banner from './Components/Banner'
import BookCar from './Components/BookCar'
import CarFleet from './Components/CarFleet'
import Download from './Components/Download'
import FAQ from './Components/FAQ'
import Footer from './Components/Footer'
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
import PlanTrip from './Components/PlanTrip'
import Testimonials from './Components/Testimonials'
import WhyChooseUs from './Components/WhyChooseUs'

function App() {
  return (
    <>
      {/* <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="models" element={<Models />} />
        <Route path="testimonials" element={<TestimonialsPage />} />
        <Route path="team" element={<Team />} />
        <Route path="contact" element={<Contact />} />
      </Routes> */}
      {/* <div style={{margin:'25px'}}> */}
      <div className='bg-car'>
        <Navbar/>
        <Hero/>
        <BookCar/>
      </div>
        <PlanTrip/>
        <CarFleet/>
        <Banner/>
        <WhyChooseUs/>
        <Testimonials/>
        <FAQ/>
        <Download/>
        <Footer/>
      {/* </div> */}
    </>
  )
}

export default App