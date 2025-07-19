import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { useUserAuth } from "../../storeContexts/AuthContext";
import "./NavBar.scss";
import { useToast } from "../../Contexts/ToastContext";

function NavBar() {
  const { user, logOut } = useUserAuth();
  const navigate = useNavigate();
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
  const { showToast } = useToast();

  const handleLogout = async () => {
    try {
      await logOut();
      setShowLogoutConfirm(false);
      navigate("/login");
      showToast({ type: "success", message: "Logout successful" });
    } catch (err) {
      console.log(err);
      showToast({ type: "error", message: err.message });
    }
  };

  return (
    <>
      <div className="navbar">
        <div className="navbar__section-1">
          <Link to="/" onClick={() => window.scrollTo(0, 0)}>
            <img className="navbar__logo" src="./netflix_logo.png" alt="Logo" />
          </Link>

          {user?.email ? (
            <div className="account-buttons">
              <Link to="/my-list" style={{ textDecoration: "none" }}>
                <button className="account-button">Watch List</button>
              </Link>
              <button
                className="logout-button"
                onClick={() => setShowLogoutConfirm(true)}
              >
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

      {showLogoutConfirm && (
        <div className="popup-backdrop">
          <div className="popup-modal">
            <p>Are you sure you want to log out?</p>
            <div className="popup-actions">
              <button
                className="btn cancel"
                onClick={() => setShowLogoutConfirm(false)}
              >
                Cancel
              </button>
              <button className="btn delete" onClick={handleLogout}>
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default NavBar;
