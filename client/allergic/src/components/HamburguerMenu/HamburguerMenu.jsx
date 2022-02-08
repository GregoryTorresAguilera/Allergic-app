import React from 'react';
import { Link } from 'react-router-dom';
import './HamburguerMenu.scss'
//pendiente de revisar;
const HamburguerMenu = () => {

 


  return (<nav className="navbar">
      <div className="navbar-container container">
          <input type="checkbox" name="" id=""/>
          <div className="hamburger-lines">
              <span className="line line1"></span>
              <span className="line line2"></span>
              <span className="line line3"></span>
          </div>
          <ul className="menu-items">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#food">Category</a></li>
              <li><a href="#food-menu">Menu</a></li>
              <li><a href="#testimonials">Testimonial</a></li>
              <li><a href="#contact">Contact</a></li>
          </ul>
      </div>
  </nav>




















   
);
};

export default HamburguerMenu;

 /* <Link to="/profile"></Link>
    <Link to="/favorite"></Link>
    <Link to="/diary"></Link>
    <Link to="/shared"></Link>
    <Link to="/translator"></Link>
    <Link to="/terms"></Link>
    <Link to="/logout"></Link> */
