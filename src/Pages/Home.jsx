import React from "react";
import Dashboard from "../Components/Dashboard/Dashboard";

class Home extends React.Component {
  state = {};
  render() {
    if (localStorage.token) {
      return <Dashboard />;
    }
    return <div>Home</div>;
  }
}

export default Home;
