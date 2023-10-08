import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import logo from '../assets/icons/burger-icon.png';

export default function Navbar() {
  const [hamburgerOpen, setHamburgerOpen] = useState(true);

  useEffect(() => {
    //TODO: Change this. It works smooth, but I feel there is a better to handle this in react.
    const navigationElement = document.querySelector('.navigation');

    if (hamburgerOpen) {
      navigationElement.classList.add('slide-in');
      navigationElement.classList.remove('slide-out');
    } else {
      navigationElement.classList.remove('slide-in');
      navigationElement.classList.add('slide-out');
    }
  }, [hamburgerOpen]);

  const toggleBurger = () => {
    setHamburgerOpen(!hamburgerOpen)
  }

  return (
    <div>
      <div id="navBar">
        <Link className="app-link" to="/shows">Shows</Link>
        <Link className="app-link" to="/music">Music</Link>
        <Link className="app-link" to="/about">About</Link>
        <Link className="app-link" to="/personnel">Personnel</Link>
      </div>
      <div className="navigation">
        <div className="burger">
            <Link className="app-link" to="/about">About</Link>
          </div>
          <div className="burger">
            <Link className="app-link" to="/personnel">Personnel</Link>
          </div>
          <div className="burger">
            <Link className="app-link" to="/music">Music</Link> 
          </div>
          <div className="burger">
            <Link className="app-link" to="/shows">Shows</Link> 
          </div>
      </div>
      <div className="hamburger" onClick={toggleBurger}>
        <img src={logo} alt="Hamburger menu" />
      </div>
    </div>
  );
}
