import React, {useState, useEffect} from "react";
import "./Navigation.css";
// import profilePhoto from "/client/public/1000_F_321955279_TeWobe24GeJ8RSFgbndcM0f6zEVu9P7S.jpg";
// import profilePic from "client/public/profile.png";
// import settingPic from "client/public/setting.png";


// navigation bar for the homepage

function Navigation() {

  const [click, setClick] = useState(false);
  // const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
  
    <nav>
       <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        <li className="nav-item">
             <a className="nav-link" href="/" onClick={closeMobileMenu}>
               Home
             </a>
           </li>
           <li className="nav-item">
             <a className="nav-link" href="/login" onClick={closeMobileMenu}>
               Login
             </a>
           </li>
           <li className="nav-item">
             <a className="nav-link" href="/register" onClick={closeMobileMenu}>
               Register
             </a>
           </li>
           <li className="nav-item">
             <a className="nav-link" href="/search" onClick={closeMobileMenu}>
               Search
             </a>
           </li>
           <li className="nav-item">
             <a className="nav-link" href="/profile" onClick={closeMobileMenu}>
             </a>
            
           </li> 
           </ul>
</nav>
  );
}

export default Navigation;

// <img src={profilePhoto} className="navbar-photo"/>