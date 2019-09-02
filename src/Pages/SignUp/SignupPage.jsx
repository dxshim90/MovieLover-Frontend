import React from "react";
import SignUpForm from "../../Components/Signup/Signup";
import "./SignupPage.css";

const SignupPage = props => {
  return (
    <div className="signupPage">
      <SignUpForm props={props} />
    </div>
  );
};

export default SignupPage;
