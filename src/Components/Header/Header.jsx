import React from "react";
import Logo from "../../assets/Logo.png";
import "./Header.css";
import { Link, withRouter } from "react-router-dom";

class Header extends React.Component {
  logOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    this.props.history.push("/");
  };

  render() {
    return (
      <nav>
        <div className="img-con">
          <img className="image" src={Logo} alt="" />
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
              <li onClick={this.logOut} className="link">
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
  }
}

export default withRouter(Header);
