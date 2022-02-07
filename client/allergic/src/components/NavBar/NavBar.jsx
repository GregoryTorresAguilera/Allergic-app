import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.scss'

const NavBar = () => {
  return <div className="navbar">
     <NavLink className="navbar__navlink" to="/">
     <img className="navbar__navlink--house" src="./Images/navBarIconHome2.png" alt="Icon Home" />
     </NavLink>
     <NavLink className="navbar__navlink" to="/favorite">
     <img src="./Images/navBarIconStar.png" alt="Icon Star" />
     </NavLink>
     <NavLink className="navbar__navlink" to="/diary">
     <img src="./Images/navBarIconDiary.png" alt="Icon Diary" />
     </NavLink>
     <NavLink className="navbar__navlink" to="/shared">
     <img src="./Images/navBarIconShared.png" alt="Icon Shared" />
     </NavLink>
      

  </div>;
};

export default NavBar;
