import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [postalcode, setPostalcode] = useState('');
  const [city, setCity] = useState('');
  const { isAuthenticated, registerUser } = useAuth();
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      await registerUser({
        username,
        email,
        password,
        address,
        postalcode,
        city,
      });
    } catch (error) {
      console.error(error.response?.data.error || error.message);
    }
  };

  if (isAuthenticated) return <Navigate to="/" />;

  return (
    <div className="container">
      <h2>Register</h2>
      <form className="d-flex flex-column col-4" onSubmit={handleSubmit}>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          placeholder="Username"
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
        />

        <input
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          type="text"
          placeholder="address (street + number)"
        />
        <input
          value={postalcode}
          onChange={(e) => setPostalcode(e.target.value)}
          type="text"
          placeholder="postal code)"
        />
        <input
          value={city}
          onChange={(e) => setCity(e.target.value)}
          type="text"
          placeholder="city)"
        />
        <input className="btn btn-primary" type="submit" value="Register" />
      </form>
    </div>
  );
};
export default Register;
