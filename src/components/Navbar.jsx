import React from "react";
import { Link } from "react-router-dom";
import icon from '../assets/home.jpg'


function Navbar() {

  return (
    <div>
      <ul className="navBar">
        <li>
          <Link to="/">
            {/* <img className="homeIcon" src={icon}  /> */}
            Home
          </Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
