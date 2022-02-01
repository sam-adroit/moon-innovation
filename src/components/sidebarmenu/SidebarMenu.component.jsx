import React from "react";
import Logo from "../../assets/logo.png";
import { BsToggle2On } from "react-icons/bs";

import "./SidebarMenu.styles.css";

const SidebarMenu = () => {
  return (
    <div className="sidebar-menu">
      <div className="logo-shadow">
        <img src={Logo} alt="moon innovation" />
        <div className="shadow"></div>
      </div>
      <div className="logger-switch">
        <div className="switch">
          <h2>Admin</h2>
          <h2>|</h2>
          <h2>SA</h2>
        </div>
        <div className="togglebtn">
          <BsToggle2On className="toggleFont" />
          {/* <BsToggle2Off className="toggleFont" /> */}
        </div>
      </div>
      <button className="btn">Login</button>
    </div>
  );
};

export default SidebarMenu;
