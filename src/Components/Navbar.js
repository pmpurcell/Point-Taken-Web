import React from "react";
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div id="navBar">
      <Link className="nav-link" to="/shows">Shows</Link>
      <Link className="nav-link" to="/music">Music</Link>
      <Link className="nav-link" to="/about">About</Link>
      <Link className="nav-link" to="/personnel">Personnel</Link>
    </div>
  );
}
