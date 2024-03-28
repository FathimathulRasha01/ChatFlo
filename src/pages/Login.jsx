import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Login = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/")
    } catch (err) {
      setErr(true);
    }
  };
  return (
    <div className="form_container">
      <div className="form_wrapper">
        <span className="logo_name">ChatFlo</span>
        <span className="title">Login</span>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Enter your email" />
          <input type="password" placeholder="Enter the password" />
          <div className="button_container">  
                <button><div className="button_text">Sign in</div></button>
          </div>
          {err && <span>Something went wrong</span>}
        </form>
        <p>You don't have an account? <Link to="/register"><div className="link_text">Register</div></Link></p>
      </div>
    </div>
  );
};

export default Login;
