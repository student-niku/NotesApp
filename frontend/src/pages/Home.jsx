import React from 'react'
import NavBar from '../components/navbar/NavBar'
import HeroSection from '../components/heroSection/HeroSection'
import { useLocation } from "react-router-dom";
const Home = () => {
   const location = useLocation();
   console.log(location.state);
   
  return (
    <div>
        <NavBar/>
        <HeroSection/>
    </div>
  )
}

export default Home