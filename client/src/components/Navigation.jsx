import React from 'react';
import './Navigation.css';
import profilePhoto from './1000_F_321955279_TeWobe24GeJ8RSFgbndcM0f6zEVu9P7S.jpg'

//navigation bar for the homepage

function Navigation() {
  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top navbar-scroll">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/login">Login</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/register">Register</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/search">Search</a>
          </li>
          <img src={profilePhoto}className="rounded-circle" alt="profilePhoto" />
        </ul>
      
    </nav>  
 
    </>
  );
}

export default Navigation;

// <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation"> <span className="navbar-toggler-icon"> /</button>
