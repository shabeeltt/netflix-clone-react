import { Link } from "react-router-dom";
import "./NavBar.scss";
import React from "react";
import { useUserAuth } from "../../storeContexts/AuthContext";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const { user, logOut } = useUserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="navbar">
      <div className="navbar__section-1">
        <Link to="/">
          <img className="navbar__logo" src="./netflix_logo.png" alt="" />
        </Link>

        {user?.email ? (
          <div className="account-buttons">
            <button className="account-button">Account</button>
            <button className="logout-button" onClick={handleLogout}>
              Logout
            </button>
          </div>
        ) : (
          <Link className="navbar__btn" to="/login">
            Sign in
          </Link>
        )}
      </div>
      {user?.email && (
        <div className="navbar__section-2">
          <a href="#movies">
            <button>Movies</button>
          </a>
          <a href="#shows">
            <button>Shows</button>
          </a>
          <a href="#reasontojoin">
            <button>Reasons to Join</button>
          </a>
          <a href="#faq">
            <button>FAQ</button>
          </a>
        </div>
      )}
    </div>
  );
}

export default NavBar;
