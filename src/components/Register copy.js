import React, { useState } from "react";
import { Navigate } from 'react-router-dom'
import axios from "axios";

export default function Register() { 
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const API_URL = process.env.REACT_APP_BACKEND_API

    const postUserData = (e) => {e.preventDefault()
        axios
            .post(`${API_URL}register`, {
                    username,
                    email,
                    password,
              })
              .then((res) => {
                console.log(res.data);
                const data = res.data;
                if(data) return <Navigate to='/login'/>
           })
              .catch((error) => {
                console.log(error.message);
              });      
               
    }
 
    
return(
    <div>
        <h2>Register</h2>
    <form onSubmit={postUserData}>
        <input 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text" 
            placeholder="Username" />
        <input 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email" 
            placeholder="Email" />
        <input 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password" 
            placeholder="Password" />
        <input type="submit" value="Register" />
    </form>
    </div>
)
}