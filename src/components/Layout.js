import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Layout = () => {
  const { logoutUser } = useAuth();
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

          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav me-auto">
              <div className="row d-flex justify-content-lg-between">
                <div className="col-md-9 d-flex">
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
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/register">
                      Register
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/login">
                      Login
                    </NavLink>{' '}
                  </li>
                </div>
                <div className="col-md-2 p-2">
                  <li className="nav-item">
                    <button
                      type="button"
                      class="btn btn-primary btn"
                      onClick={logoutHandler}
                    >
                      Logout
                    </button>
                  </li>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
      <footer></footer>
    </div>
  );
};
export default Layout;
