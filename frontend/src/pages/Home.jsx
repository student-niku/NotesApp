import React from 'react'
import NavBar from '../components/Navbar/navbar'
import HeroSection from '../components/HeroSection/heroSection'
import { useLocation } from "react-router-dom";
const Home = () => {
   const location = useLocation();
   console.log(location.state);
   
  return (
    <div>
        <navbar/>
        <heroSection/>
    </div>
  )
}

export default Home