import React from 'react'
import { CgProfile } from "react-icons/cg";
import AddNote from '../addNote/AddNote';
const Profil = () => {
  return (
    <div className='profil'>
      <AddNote />
      <div className='profile-icon'><CgProfile /></div>
    </div>
  )
}

export default Profil