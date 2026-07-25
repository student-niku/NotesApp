import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import Profil from '../SearchBar/Profil'

const NavBarRight = () => {
  return (
    <div className='rightnav'>
      <SearchBar />
      <Profil/>
    </div>
  )
}

export default NavBarRight