import { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

const AuthState = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getUser = async () => {
      try {
        setLoading(true);
        const {
          data: { user },
        } = await axios.get(`${process.env.REACT_APP_BACKEND_API}user`, {
          headers: {
            Authorization: token,
          },
        });
        setUser(user);
        setIsAuthenticated(true);
        setLoading(false);
      } catch (error) {
        console.error(error.response?.data.error || error.message);
        localStorage.removeItem('token');
        setToken(null);
        setIsAuthenticated(false);
        setLoading(false);
      }
    };

    token && getUser();
  }, [token]);

  const registerUser = async (formData) => {
    try {
      setLoading(true);
      const {
        data: { token },
      } = await axios.post(
        `${process.env.REACT_APP_BACKEND_API}register`,
        formData
      );
      if (token) {
        localStorage.setItem('token', token);
        setIsAuthenticated(true);
        setToken(token);
        setLoading(false);
        navigate('/');
      }
    } catch (error) {
      console.error(error.response?.data.error || error.message);
      setLoading(false);
    }
  };

  const loginUser = async (formData) => {
    try {
      setLoading(true);
      const {
        data: { token },
      } = await axios.post(
        `${process.env.REACT_APP_BACKEND_API}login`,
        formData
      );

      if (token) {
        localStorage.setItem('token', token);
        setIsAuthenticated(true);
        setToken(token);
        setLoading(false);
        navigate('/');
      }
    } catch (error) {
      console.error(error.response?.data.error || error.message);
      setLoading(false);
    }
  };

  const logoutUser = () => {
    try {
      localStorage.removeItem('token');
      setIsAuthenticated(false);
      console.log('Logout');
      navigate('/');
    } catch (error) {
      console.error(error.response?.data.error || error.message);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        loading,
        loginUser,
        logoutUser,
        registerUser,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthState;
