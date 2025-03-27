import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../style/Auth.css";

const Auth = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isSignup = location.pathname === "/signup";

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>{isSignup ? "Sign Up" : "Login"}</h2>
        <form>
          {isSignup && <input type="text" placeholder="Full Name" required className="input-field" />}
          <input type="email" placeholder="Email" required className="input-field" />
          <input type="password" placeholder="Password" required className="input-field" />
          <button type="submit" className="auth-button">
            {isSignup ? "Sign Up" : "Login"}
          </button>
        </form>
        <p onClick={() => navigate(isSignup ? "/login" : "/signup")} className="toggle-link">
          {isSignup ? "Already have an account? Login" : "Don't have an account? Sign Up"}
        </p>
      </div>
    </div>
  );
};

export default Auth;
