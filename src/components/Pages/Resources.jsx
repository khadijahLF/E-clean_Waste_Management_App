import React from 'react'
import HomeNav from '../Layouts/HomeNav'
import Footer from '../Layouts/Footer'
import Blog from '../Layouts/Blog'

function Resources() {
  return (
   
      <>
      <HomeNav/>
      <div className="container-resources">
            <div className="content-resources">
            <h1>Resources</h1>
            <p>All you need to effectively manage your waste</p>
            </div>
      </div>
      <Blog/>
      <Footer/>
      </>
    
    
  )
}

export default Resources
