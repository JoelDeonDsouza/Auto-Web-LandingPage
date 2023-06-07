import React from 'react'
// Compoents //
import HeroSection from "../../Components/HomeSection/HeroSection"
import Search from "../../Components/HomeSection/Search"
// Styles//
import "./styles.css"

const Home = () => {
  return (
    <div className='homeConatiner'>
      <HeroSection />
      <Search />
    </div>
  )
}

export default Home
