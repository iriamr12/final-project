import React, {useState, useEffect} from "react";
import "./Navigation.css";
import { Link } from "react-router-dom";
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
             <Link className="nav-link" to="/booksearch" onClick={closeMobileMenu}>
               Home
             </Link>
           </li>
           <li className="nav-item">
             <Link className="nav-link" to="/login" onClick={closeMobileMenu}>
               Login
             </Link>
           </li>
           <li className="nav-item">
             <Link className="nav-link" to="/register" onClick={closeMobileMenu}>
               Register
             </Link>
           </li>
           <li className="nav-item">
             <Link className="nav-link" to="/userProfile" onClick={closeMobileMenu}>
               Profile
             </Link>
           </li>
           {/* <li className="nav-item">
             <Link className="nav-link" to="/search" onClick={closeMobileMenu}>
               Search
             </Link>
           </li> */}
           {/* <li className="nav-item">
             <Link className="nav-link" to="/profile" onClick={closeMobileMenu}>
             </Link>
            
           </li>  */}
           </ul>
</nav>
  );
}

export default Navigation;

// <img src={profilePhoto} className="navbar-photo"/>