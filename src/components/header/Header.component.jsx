import React from "react";
import Logo from "../../assets/logo.png";

import "./Header.styles.css";

const Header = () => {
  return (
    <nav className="header">
      <img src={Logo} alt="Moon Innovation" />
      <h1>
        <span>Moon</span> Innovations
      </h1>
    </nav>
  );
};

export default Header;
