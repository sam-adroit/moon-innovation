import React from "react";
import Logo from "../../assets/logo.png";
import { FaTimes } from "react-icons/fa";

import "./LoginForm.styles.css";

const LoginForm = ({ logAcc }) => {
  return (
    <div className="loginForm">
      <div className="form-head">
        <img src={Logo} alt="Moon Innovation" />
        <h3>{logAcc}</h3>
        <FaTimes className="timesFont" />
      </div>
      <form className="form">
        <div className="form-control">
          <label htmlFor="username"></label>
          <input type="text" name="username" placeholder="Username" />
        </div>
        <div className="form-control">
          <label htmlFor="password"></label>
          <input type="password" name="password" placeholder=".........." />
        </div>
        <button>Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
