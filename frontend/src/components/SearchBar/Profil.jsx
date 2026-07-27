import React, { useEffect, useState } from 'react'
import { CgProfile } from "react-icons/cg";
import AddNote from '../addNote/AddNote';
import axios from 'axios';
const Profil = () => {

  const [user , setUser] = useState({})

  useEffect(()=>{
    getme()
  },[])


  const getme = async ()=>{
    try {
      const token = localStorage.getItem("token")
      const res = await axios.get("https://notesapp-backend-o8cg.onrender.com/api/auth/get-me",{
        headers:{
            Authorization:`Bearer ${token}`
        }
      });
      setUser(res.data.data)
    } catch (error) {
      console.log(error);
      
    }

  }

  return (
    <div className='profil'>
      <AddNote />
      <div className='profile-icon'>
        <CgProfile />
        <div className='profile-name'>
          <p>Welcome</p>
          <p>{user.username}</p>
        </div>
      </div>
    </div>
  )
}

export default Profil