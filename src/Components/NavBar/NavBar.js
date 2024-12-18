import "./NavBar.scss";
import React from "react";

function NavBar() {
  return (
    <div className="navbar">
      <div className="navbar__section-1">
        <img className="navbar__logo" src="./netflix_logo.png" alt="" />
        <button className="navbar__btn">Sign in</button>
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
