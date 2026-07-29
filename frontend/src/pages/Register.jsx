import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Register = () => {
    const navigate = useNavigate()
    const [username , setUserName] = useState('')
    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')


    const onSubmitHandler = async (e)=>{
        e.preventDefault();

        
        try {
              const res = await axios.post("https://notesapp-backend-5m9g.onrender.com/api/auth/register",{
                username,
                email,
                password
            })

            setUserName('')
            setEmail('')
            setPassword('')

            navigate("/");

            alert(res.data.message)

        } catch (error) {
            console.log(error);
            
        }

        
    }
    
    

  return (
    <div className='register-container'>
        <div className='register-card'>
            <h2>Register</h2>
            <div className='register-form'>
                <form onSubmit={onSubmitHandler}>
                    <h3>Name</h3>
                    <input 
                    type="text" 
                     required 
                     placeholder='Enter Name'
                     value={username}
                     onChange={(e)=>setUserName(e.target.value)}
                     />
                    <h3>Email</h3>
                    <input 
                    type="email" 
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    required 
                    placeholder='Enter Email' 
                    />
                    <h3>Password</h3>
                    <input type="text" 
                    required 
                    placeholder='Enter Password' 
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    />
                    <button type='submit'>Register</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Register
