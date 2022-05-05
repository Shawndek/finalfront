import { useState } from 'react';
import {  Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {isAuthenticated, registerUser} = useAuth()
  const handleSubmit = async (e)=> {
    try {
      e.preventDefault();
      await registerUser({username, email, password})
    } catch (error) {
      console.error(error.response?.data.error || error.message);
    }
  }

  if(isAuthenticated) return <Navigate to='/'/>

    
return(
    <div>
        <h2>Register</h2>
    <form onSubmit={handleSubmit}>
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
export default Register;