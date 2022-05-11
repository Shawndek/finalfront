import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Layout = () => {
  const { isAuthenticated, logoutUser } = useAuth();
  const logoutHandler = () => {
    logoutUser();
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            GiveOrTake
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor01"
            aria-controls="navbarColor01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse d-flex justify-content-between"
            id="navbarColor01"
          >
            <ul className="navbar-nav col">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/auth/createItem">
                  Post Item
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/auth/MyItems">
                  My Posts
                </NavLink>
              </li>
            </ul>

            <li className="nav nav-item ">
              <NavLink
                className={!isAuthenticated ? 'nav-link navText' : 'd-none'}
                to="/register"
              >
                Register
              </NavLink>
            </li>

            <li className="nav nav-item">
              <NavLink
                className={!isAuthenticated ? 'nav-link navText' : 'd-none'}
                to="/login"
              >
                Login
              </NavLink>{' '}
            </li>

            <li className="nav nav-item">
              <button
                type="button"
                className={isAuthenticated ? 'btn btn-primary' : 'd-none'}
                onClick={logoutHandler}
              >
                Logout
              </button>
            </li>
          </div>
        </div>
      </nav>
      <Outlet />
      <footer></footer>
    </div>
  );
};
export default Layout;
