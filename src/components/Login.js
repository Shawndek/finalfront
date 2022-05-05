import { useState } from 'react';
import {  Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {isAuthenticated, loginUser} = useAuth()
  const handleSubmit = async (e)=> {
    try {
      e.preventDefault();
      await loginUser({email, password})
    } catch (error) {
      console.error(error.response?.data.error || error.message);
    }
  }

  if(isAuthenticated) return <Navigate to='/'/>

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email"
        />
        <br />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
        />
        <br />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;
