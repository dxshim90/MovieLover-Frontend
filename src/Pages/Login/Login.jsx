import React from "react";
import LoginForm from "../../Components/Login/LoginForm";

const LoginPage = props => {
  if (localStorage.token) {
    props.history.push("/");
  }
  return (
    <div>
      <LoginForm props={props} />
    </div>
  );
};

export default LoginPage;
