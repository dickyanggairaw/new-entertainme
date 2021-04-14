import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar navbar-expand-lg navbar-light">
      <nav>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link to="/" className="text-light nav-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/movies" className="text-light nav-link">
              Movie
            </Link>
          </li>
          <li>
            <Link to="/series" className="text-light nav-link">
              Tv Serie
            </Link>
          </li>
          <li>
            <Link to="/favorites" className="text-light nav-link">
              Favorite
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
