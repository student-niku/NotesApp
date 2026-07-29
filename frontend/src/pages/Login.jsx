import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()

    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')

    const onSubmit = async (e)=>{

        e.preventDefault();

        try {
           const res =  await axios.post("https://notesapp-backend-5m9g.onrender.com/api/auth/login",{
                email,
                password
            })
            console.log(res.data.token)
            localStorage.setItem("token", res.data.token);
            alert(res.data.message)

                navigate("/")


        } catch (error) {
            console.log(error);  
        }
    

    }

  return (
    <div className="login-container">
    <div className="login-card">
        <h2>Login</h2>

        <form onSubmit={onSubmit} className="login-form">
            <label>Email</label>
            <input
                type="email"
                value={email}
                placeholder="Enter your email"
                required
                onChange={(e)=>(setEmail(e.target.value))}
            />

            <label>Password</label>
            <input
                type="password"
                value={password}
                placeholder="Enter your password"
                required
                onChange={(e)=>{setPassword(e.target.value)}}
            />

            <button type="submit">Login</button>

            <p>
                Don't have an account? <Link to="/register">Register</Link>
            </p>
        </form>
    </div>
</div>
  )
}

export default Login
