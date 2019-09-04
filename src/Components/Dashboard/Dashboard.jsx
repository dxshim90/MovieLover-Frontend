import React from "react";
import "./Dashboard.css";
import MovieCollection from "../MovieCollection/MovieCollection";
import SuggestedMovies from "../SuggestedMovies/SuggestedMovies";
import { withRouter } from "react-router-dom";

class Dashboard extends React.Component {
  state = {
    currentUser: {},
    collection: [],
    suggested: []
  };

  addMovie = async movie => {
    console.log("hit");
    const email = localStorage.user;
    const settings = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email,
        movie
      })
    };
    try {
      const request = await fetch(
        "https://movie-lover-backend.herokuapp.com/movies/add",
        settings
      );
      const response = await request.json();
      alert(response);
      this.props.history.push("/");
    } catch (error) {
      alert(error);
    }
  };

  removeMovie = async movie => {
    const email = localStorage.user;
    const settings = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email,
        movie
      })
    };
    try {
      const request = await fetch(
        "https://movie-lover-backend.herokuapp.com/movies/remove",
        settings
      );
      const response = await request.json();
      alert(response);
      this.props.history.push("/");
    } catch (error) {
      alert(error);
    }
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

    const requestUser = await fetch(
      "https://movie-lover-backend.herokuapp.com/users",
      settings
    );
    const responseUser = await requestUser.json();
    this.setState({
      collection: responseUser.movies,
      currentUser: responseUser
    });
    const findRandomMovie =
      responseUser.movies[
        Math.floor(Math.random() * responseUser.movies.length)
      ];
    if (findRandomMovie) {
      const movieId = findRandomMovie.id;
      const SuggestedMoviesettings = {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          movieId
        })
      };
      const requestSuggested = await fetch(
        "https://movie-lover-backend.herokuapp.com/movies/suggested",
        SuggestedMoviesettings
      );
      const responseSuggested = await requestSuggested.json();
      this.setState({
        suggested: responseSuggested
      });
    }
    console.log(this.state.suggested.length);
  }

  render() {
    return (
      <div className="dashboard-con">
        <div className="welcome-message">
          <h1 className="welcome-text">
            Logged in as: {this.state.currentUser.email}
          </h1>
        </div>
        <div className="collection-con">
          <h3>Movies in your collection</h3>
          <MovieCollection
            removeMovie={this.removeMovie}
            currentUser={this.state.currentUser}
            collection={this.state.collection}
          />
        </div>
        <div className="recomended">
          <h3 className="recomended-movies">
            {this.state.suggested.length ? (
              <p>Movies you may like</p>
            ) : (
              <p>
                Cannot Find Recomendations based on current collection, Add some
                more movies!
              </p>
            )}
          </h3>
          <SuggestedMovies
            SuggestedMovies={this.state.suggested}
            currentUser={this.state.currentUser}
            collection={this.state.collection}
            addMovie={this.addMovie}
          />
        </div>
      </div>
    );
  }
}

export default withRouter(Dashboard);
