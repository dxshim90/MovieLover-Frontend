import React from "react";
import "./Banner.css";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="banner-con">
      <div className="logo">
        <h1 className="title">Welcome to Movie Lover</h1>
      </div>
      <div className="buttons">
        <Link to="/login">
          <button className="banner-btn">Log In</button>
        </Link>
        <Link to="/signup">
          <button className="banner-btn">Sign Up</button>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
