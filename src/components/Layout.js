import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'

 const Layout = () => {
  return (
    <div>
        

        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">GiveOrTake</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarColor01">
    <ul className="navbar-nav me-auto">
        <li className="nav-item">
            <NavLink className="nav-link" to='/'>Home</NavLink>
        </li>
               <li className="nav-item">
                    <NavLink className="nav-link" to='/createMeme'>Create Meme</NavLink>
                </li>
                
                <li className="nav-item">
                    <NavLink className="nav-link" to='/contact'>Contact</NavLink>
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