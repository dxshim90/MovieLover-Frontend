import React from "react";
import SignUpForm from "../../Components/Signup/Signup";
import "./SignupPage.css";

class SignupPage extends React.Component {
  state = {};
  render() {
    return (
      <div className="signupPage">
        <SignUpForm />
      </div>
    );
  }
}

export default SignupPage;
