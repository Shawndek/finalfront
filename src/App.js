import { Route, Routes } from 'react-router-dom';
import AuthState from './context/AuthContext';
import Layout from './components/Layout';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './components/Home';
import React from 'react';
import Item from './components/createItem';
import Register from './components/Register';
import Login from './components/Login';
import ItemPage from './components/ItemPage';
import MyItems from './components/MyItems';
import './styles.css';

const App = () => {
  return (
    <AuthState>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="auth" element={<ProtectedRoute />}>
            <Route path="MyItems" element={<MyItems />} />
            <Route path="createItem" element={<Item />} />
          </Route>
          <Route path="item/:id" element={<ItemPage />} />
          <Route path="register" element={<Register />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="*" element={<div>NotFound</div>}></Route>
        </Route>
      </Routes>
    </AuthState>
  );
};

export default App;
