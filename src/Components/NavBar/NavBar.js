import { Link } from "react-router-dom";
import "./NavBar.scss";
import React from "react";

function NavBar() {
  return (
    <div className="navbar">
      <div className="navbar__section-1">
        <Link to="/">
          <img className="navbar__logo" src="./netflix_logo.png" alt="" />
        </Link>

        <Link className="navbar__btn" to="/login">
          Sign in
        </Link>
      </div>
      <div className="navbar__section-2">
        <button>Movies</button>
        <button>Shows</button>
        <button>Reasons to Join</button>
        <button>FAQ</button>
      </div>
    </div>
  );
}

export default NavBar;
