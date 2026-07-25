import React from 'react'
import NavBar from '../components/Navbar/navbar'
import HeroSection from '../components/HeroComponent/heroSection'
import { useLocation } from "react-router-dom";
const Home = () => {
   const location = useLocation();
   console.log(location.state);
   
  return (
    <div>
        <Navbar/>
        <HeroSection/>
    </div>
  )
}

export default Home