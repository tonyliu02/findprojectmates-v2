import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
      <div className="container px-4">
        <NavLink exact className="navbar-brand" to="/">Find Projectmates</NavLink>
        {/*data-bs-target and aria-controls have to be the same as the id of the navbar defined below*/}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <div class="navbar-nav ms-auto">
            <NavLink exact className="nav-link" activeClassName="active" to="/">Home</NavLink>
            <NavLink className="nav-link" activeClassName="active" to="/apply">Apply</NavLink>
            <NavLink className="nav-link" activeClassName="active" to="/post">Post</NavLink>
            <NavLink className="nav-link" activeClassName="active" to="/login">Log In</NavLink>
            <NavLink className="nav-link" activeClassName="active" to="/signup">Sign Up</NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;