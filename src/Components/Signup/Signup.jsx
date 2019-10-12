import React from "react";
import "./Signup.css";
import { Link } from "react-router-dom";

class Signup extends React.Component {
  state = {
    email: "",
    password: "",
    passwordRepeat: ""
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = async e => {
    const { email, password, passwordRepeat } = this.state;
    e.preventDefault();
    if (password !== passwordRepeat) {
      return alert("Passwords Do not Match");
    }
    const settings = {
      method: "POST",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email,
        password
      })
    };
    try {
      const request = await fetch(
        "https://movie-lover-backend.herokuapp.com/auth/signup",
        settings
      );
      const response = await request.json();
      if (response !== `${email} already has an account`) {
        localStorage.setItem("token", response.token);
        localStorage.setItem("user", response.user);
        this.props.props.history.push("/");
      } else {
        alert(response);
      }
    } catch (error) {
      alert(error);
    }
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div className="container">
          <h1>Register</h1>
          <p>Please fill in this form to create an account.</p>
          <hr />

          <label htmlFor="email">
            <b>Email</b>
          </label>
          <input
            onChange={this.onChange}
            type="text"
            placeholder="Enter Email"
            name="email"
            required
            value={this.state.email}
          />

          <label htmlFor="password">
            <b>Password</b>
          </label>
          <input
            onChange={this.onChange}
            type="password"
            placeholder="Enter Password"
            name="password"
            required
            value={this.state.password}
          />

          <label htmlFor="password-repeat">
            <b>Repeat Password</b>
          </label>
          <input
            onChange={this.onChange}
            type="password"
            placeholder="Repeat Password"
            name="passwordRepeat"
            required
            value={this.state.passwordRepeat}
          />
          <hr />

          <button type="submit" className="registerbtn">
            Register
          </button>
        </div>

        <div className="container signin">
          <p>
            Already have an account? <Link to="/login">Sign in</Link>.
          </p>
        </div>
      </form>
    );
  }
}

export default Signup;
