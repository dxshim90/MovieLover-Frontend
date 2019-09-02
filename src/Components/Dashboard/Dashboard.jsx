import React from "react";
import "./Dashboard.css";
import MovieCollection from "../MovieCollection/MovieCollection";

class Dashboard extends React.Component {
  state = {
    currentUser: localStorage.user,
    collection: []
  };

  async componentDidMount() {
    const email = localStorage.user;
    const settings = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email
      })
    };
    try {
      const request = await fetch(
        "http://localhost:5000/movies/collection",
        settings
      );
      const response = await request.json();
      this.setState({
        collection: response
      });
    } catch (error) {
      alert(error);
    }
  }

  render() {
    return (
      <div className="dashboard-con">
        <div className="welcome-message">
          <h1 className="welcome-text">{this.state.currentUser}</h1>
        </div>
        <div className="collection-con">
          <h3>Movies in your collection</h3>
          <MovieCollection collection={this.state.collection} />
        </div>
        <div className="recomended">
          <h3 className="recomended-movies">Movies you may like</h3>
        </div>
      </div>
    );
  }
}

export default Dashboard;
