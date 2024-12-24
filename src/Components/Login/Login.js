import "../SignUp/SignUp.scss";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../../storeContexts/AuthContext";

function Login() {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [formLoginData, setFormLoginData] = useState({
    email: "",
    password: "",
  });

  const { signIn } = useUserAuth();

  // Update the corresponding state field whenever a form input value changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormLoginData({ ...formLoginData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signIn(formLoginData.email, formLoginData.password);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        {error && (
          <div
            style={{
              border: "1px solid red",
              padding: "10px",
              color: "red",
              margin: "10px 0",
            }}
          >
            {error}
          </div>
        )}
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
          Sign In
        </button>
      </form>
    </div>
  );
}

export default Login;
