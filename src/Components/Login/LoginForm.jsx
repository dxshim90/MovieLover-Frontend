import React from "react";
import "./LoginForm.css";
import { Link, Redirect } from "react-router-dom";

class LoginForm extends React.Component {
  state = {
    email: "",
    password: ""
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = async e => {
    const { email, password } = this.state;
    e.preventDefault();
    const settings = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email,
        password
      })
    };
    try {
      const request = await fetch("http://localhost:5000/auth/login", settings);
      const response = await request.json();
      if (response === `No Such account under ${email}`) {
        return alert(response);
      }
      if (response === "Incorret email or password") {
        return alert(response);
      }
      localStorage.setItem("token", response.token);
      localStorage.setItem("user", response.user);
      this.props.props.history.push("/");
    } catch (error) {
      alert(error);
    }
  };

  render() {
    if (localStorage.token) {
      return <Redirect to="/" />;
    }
    return (
      <form onSubmit={this.onSubmit}>
        <div className="container">
          <h1>Log In</h1>
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

          <hr />

          <button type="submit" className="registerbtn">
            Login
          </button>
        </div>

        <div className="container signin">
          <p>
            Dont Have An Account <Link to="/signup">Sign up</Link>.
          </p>
        </div>
      </form>
    );
  }
}

export default LoginForm;
