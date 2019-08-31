import React from "react";
import Home from "../Pages/Home";
import SingleMovie from "../Pages/SIngleMove";
import { Switch, Route } from "react-router-dom";

const Content = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/movie/:id" component={SingleMovie}></Route>
    </Switch>
  );
};

export default Content;
