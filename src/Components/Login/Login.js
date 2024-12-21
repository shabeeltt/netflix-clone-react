import "../SignUp/SignUp.scss";
import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [formLoginData, setFormLoginData] = useState({
    email: "",
    password: "",
  });

  // Update the corresponding state field whenever a form input value changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormLoginData({ ...formLoginData, [name]: value });
  };

  console.log(formLoginData);

  return (
    <div className="signup-container">
      <form className="signup-form">
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formLoginData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formLoginData.password}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-footer">
          <p>
            Don't have an account?{" "}
            <Link to="/sign-up" className="signin-link">
              Sign Up
            </Link>
          </p>
        </div>

        <button type="submit" className="submit-btn">
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default Login;
