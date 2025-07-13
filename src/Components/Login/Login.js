import "../SignUp/SignUp.scss";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../../storeContexts/AuthContext";
import { useToast } from "../../Contexts/ToastContext";
import { ClipLoader } from "react-spinners";

function Login() {
  const navigate = useNavigate();
  const [formLoginData, setFormLoginData] = useState({
    email: "",
    password: "",
  });
  const { showToast } = useToast();
  const [isLogging, setIsLogging] = useState(false);
  const { signIn, user } = useUserAuth();

  // Redirect to home if the user is already logged in
  useEffect(() => {
    if (user) {
      navigate("/", { replace: true });
    }
  }, [user, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormLoginData({ ...formLoginData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLogging(true);
    try {
      await signIn(formLoginData.email, formLoginData.password);

      showToast({ type: "success", message: "Login successful" });

      // Add short delay so user sees toast
      setTimeout(() => {
        navigate("/", { replace: true });
      }, 1000);
    } catch (err) {
      showToast({ type: "error", message: err.message });
    } finally {
      setIsLogging(false);
    }
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
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
          {isLogging ? <ClipLoader size="18px" color="white" /> : "Sign In"}
        </button>
      </form>
    </div>
  );
}

export default Login;
