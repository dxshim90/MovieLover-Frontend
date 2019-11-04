import React from "react";
import "./Header.css";
import { Link, withRouter } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import NormalLinks from "./normalLinks";

const logOut = props => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  //   props.history.push("/");
};

const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return isMobile ? children : null;
};

const Default = ({ children }) => {
  const isNotMobile = useMediaQuery({ minWidth: 768 });
  return isNotMobile ? children : null;
};

const Header = () => {
  return (
    <div>
      <Default>
        <NormalLinks />
      </Default>
      <Mobile>
        <nav>
          <div className="img-con"></div>
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
      </Mobile>
    </div>
  );
};

export default withRouter(Header);
