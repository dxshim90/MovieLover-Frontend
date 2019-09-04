import React from "react";
import Toprated from "../Components/TopRated/Toprated";
import Current from "../Components/CurrentMovies/Current";
import Upcoming from "../Components/UpcomingMovies/Upcoming";

class Movies extends React.Component {
  state = {
    currentUser: {},
    topRated: [],
    current: [],
    upcoming: []
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
    const requestToprated = await fetch(
      "https://movie-lover-backend.herokuapp.com/movies/top"
    );
    const responseToprated = await requestToprated.json();
    const requestNow = await fetch(
      "https://movie-lover-backend.herokuapp.com/movies/now"
    );
    const responseNow = await requestNow.json();
    const requestUpcoming = await fetch(
      "https://movie-lover-backend.herokuapp.com/movies/upcoming"
    );
    const responseUpcoming = await requestUpcoming.json();
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
      currentUser: responseUser,
      topRated: responseToprated,
      current: responseNow,
      upcoming: responseUpcoming
    });
  }

  render() {
    return (
      <div style={{ minHeight: "100vh" }}>
        <h2>Top Rated Movies Of All Time</h2>
        <Toprated
          removeMovie={this.removeMovie}
          currentUser={this.state.currentUser}
          addMovie={this.addMovie}
          toprated={this.state.topRated}
        />
        <h2>Movies Currently in Cinemas</h2>
        <Current
          removeMovie={this.removeMovie}
          currentUser={this.state.currentUser}
          addMovie={this.addMovie}
          current={this.state.current}
        />
        <h2>Movies coming Out Soon</h2>
        <Upcoming
          removeMovie={this.removeMovie}
          currentUser={this.state.currentUser}
          addMovie={this.addMovie}
          upcoming={this.state.upcoming}
        />
      </div>
    );
  }
}

export default Movies;
