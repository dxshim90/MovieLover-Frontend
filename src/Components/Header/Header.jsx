import React from "react";
import Logo from "../../assets/Logo.png";
import "./Header.css";

const Header = () => {
  return (
    <nav>
      <div className="img-con">
        <img className="image" src={Logo} alt="" />
      </div>
      <ul className="links-con">
        <li className="link">
          <a href="/home">Dashboard</a>
        </li>
        <li className="link">
          <a href="/home">Search</a>
        </li>
        <li className="link">
          <a href="/home">Logout</a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
