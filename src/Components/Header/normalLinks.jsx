import React from "react";

import Logo from "../../assets/Logo.png";
import "./Header.css";
import { Link } from "react-router-dom";

const logOut = props => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  //   props.history.push("/");
};

const normalLinks = () => {
  return (
    <nav>
      <div className="img-con">
        <Link to="/">
          <img className="image" src={Logo} alt="" />
        </Link>
      </div>
      {localStorage.token ? (
        <ul className="links-con">
          <li className="link">
            <Link to="/">Dashboard</Link>
          </li>
          <li className="link">
            <Link to="/movies">Movies</Link>
          </li>
          <li className="link">
            <Link to="/search">Search</Link>
          </li>
          <Link to="#">
            <li onClick={logOut} className="link">
              Log Out
            </li>
          </Link>
        </ul>
      ) : (
        <ul className="links-con">
          <li className="link">
            <Link to="/login">Log In </Link>
          </li>
          <li className="link">
            <Link to="/signup">Register</Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default normalLinks;
