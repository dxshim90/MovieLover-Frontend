import React from "react";
import Home from "../Pages/Home";
import SingleMovie from "../Pages/SIngleMove";
import Movies from "../Pages/Movies";
import SignUP from "../Pages/SignUp/SignupPage";
import { Switch, Route } from "react-router-dom";

const Content = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/signup" component={SignUP}></Route>
      <Route exact path="/movies" component={Movies}></Route>
      <Route exact path="/movies/:id" component={SingleMovie}></Route>
    </Switch>
  );
};

export default Content;
