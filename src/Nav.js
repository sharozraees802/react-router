import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
function Nav() {
  return (
    <nav>
      <h3>Logo</h3>
      <ul className="nav-links">
        <Link>
          <li>About</li>
        </Link>
        <Link>
          <li>Shop</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
