import React from "react";
import "./Navigation.css";
import profilePhoto from "./1000_F_321955279_TeWobe24GeJ8RSFgbndcM0f6zEVu9P7S.jpg";
import "boxicons";
import profilePic from "./profile.png";
import settingPic from "./setting.png";
import userPic from "./user.png";

//navigation bar for the homepage

function Navigation() {
  return (
    <div className="navbar-top-div">
      <nav>
        <ul>
          <li className="nav-item">
            <a className="nav-link" href="/">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/login">
              Login
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/register">
              Register
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/search">
              Search
            </a>
          </li>
        </ul>
        <img src={profilePhoto} className="user-picture" />

        <div className="sub-menu-wrap">
          <div className="sub-menu">
            <div className="user-info">
              <img
                src={profilePic}
                className="rounded-circle"
                alt="profilePhoto"
              />
              <h2>Username</h2>
             
              <hr />
              
              <a href="#" className="sub-menu-link">
                <img src={profilePic} className="mini-picture" />
                <p>Edit profile</p>
                <span>></span>
              </a>

              <a href="#" className="sub-menu-link">
                <img src={settingPic} className="mini-picture" />
                <p>Settings</p>
                <span>></span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;

// <a href="#" className="sub-menu-link">
//                 <img src={profilePhoto} />
//                 <p>Edit profile</p>
//                 <span></span>
//               </a>
//               <a href="#" className="sub-menu-link">
//                 <img src={settingPic} />
//                 <p>Settings</p>
//                 <span></span>
//               </a>
<a href="#" className="sub-menu-link">
  <img src={profilePic} />
  <p>Edit profile</p>
  <span></span>
</a>;
