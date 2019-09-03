import React from "react";
import Dashboard from "../Components/Dashboard/Dashboard";
import Banner from "../Components/Banner/Banner";

class Home extends React.Component {
  state = {};
  render() {
    if (localStorage.token) {
      return <Dashboard />;
    }
    return <Banner />;
  }
}

export default Home;
