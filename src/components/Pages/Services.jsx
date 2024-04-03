import React from 'react'
import HomeNav from '../Layouts/HomeNav'
import Recycleservices from '../Layouts/Recycleservices'
import Footer from '../Layouts/Footer'
import GetStarted from '../Layouts/GetStarted'

const Services = () =>  {
  return (
    <>
        <HomeNav/>
        <div className="container-ser">
            <div className="content-ser">
            <h1>Our Services</h1>
            <p>We're transforming waste into opportunities</p>
            </div>
        </div>
        <Recycleservices/>
        <GetStarted/>
        <Footer/>

    </>

  )
}

export default Services
