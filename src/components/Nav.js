import React from "react";
import {Link} from 'react-router-dom'
function Nav() {
  return (
    <nav className="nav">
      <ul className="nav-list">
        <li className="nav-list_item"><Link to="/">Home</Link></li>
        <li className="nav-list_item"><Link to="/about">About</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;
