import React from 'react'
 import  NavBarLeft from "./NavBarLeft";
import  NavBarRight from "./NavBarRight";
const NavBar = () => {
  return (
    <div className='navbar'>
        <NavBarLeft />
        <NavBarRight />
    </div>
  )
}

export default NavBar