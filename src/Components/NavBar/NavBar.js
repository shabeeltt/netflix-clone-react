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
        <Link
          to="/"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <img className="navbar__logo" src="./netflix_logo.png" alt="" />
        </Link>

        {user?.email ? (
          <div className="account-buttons">
            <Link to="/my-list" style={{ textDecoration: "none" }}>
              <button className="account-button">Watch List</button>
            </Link>
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
    </div>
  );
}

export default NavBar;
