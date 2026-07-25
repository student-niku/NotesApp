import React from 'react'
import NavBar from '../components/NavComponent/Navbar'
import HeroSection from '../components/HeroComponent/HeroSection'
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