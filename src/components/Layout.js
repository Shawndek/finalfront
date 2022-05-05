import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'

 const Layout = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">GiveOrTake</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to='/'>Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to='/auth/createItem'>Post Item</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to='/contact'>Contact</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to='/register'>Register</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to='/login'>Login</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
      <footer>
        
      </footer>
    </div>
  )
}
export default Layout