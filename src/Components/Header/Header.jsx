import React from "react";
import Logo from "../../assets/Logo.png";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <div className="img-con">
        <img className="image" src={Logo} alt="" />
      </div>
      <ul className="links-con">
        <li className="link">
          <Link to="/">Dashboard</Link>
        </li>
        <li className="link">
          <Link to="/movies">Movies</Link>
        </li>
        <li className="link">
          <Link to="/home">Logout</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
