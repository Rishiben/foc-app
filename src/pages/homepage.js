import React from 'react'
import Header from '../components/header'
import ImageGrid from '../components/grid'
import Contact from '../components/contact'
import Aboutus from '../components/aboutus'

const HomePage = () => {
  return (
  <div>
        <Header />
        <Contact />
        <ImageGrid />
        <Aboutus />
  </div>
  )
}

export default HomePage
