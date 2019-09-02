import React from "react";
import Toprated from "../Components/TopRated/Toprated";
import Current from "../Components/CurrentMovies/Current";
import Upcoming from "../Components/UpcomingMovies/Upcoming";

class Movies extends React.Component {
  state = {
    topRated: [],
    current: [],
    upcoming: []
  };

  async componentDidMount() {
    const requestToprated = await fetch("http://localhost:5000/movies/top");
    const responseToprated = await requestToprated.json();
    const requestNow = await fetch("http://localhost:5000/movies/now");
    const responseNow = await requestNow.json();
    const requestUpcoming = await fetch(
      "http://localhost:5000/movies/upcoming"
    );
    const responseUpcoming = await requestUpcoming.json();

    this.setState({
      topRated: responseToprated,
      current: responseNow,
      upcoming: responseUpcoming
    });
  }

  render() {
    return (
      <div>
        <h2>Top Rated Movies Of All Time</h2>
        <Toprated toprated={this.state.topRated} />
        <h2>Movies Currently in Cinemas</h2>
        <Current current={this.state.current} />
        <h2>Movies coming Out Soon</h2>
        <Upcoming upcoming={this.state.upcoming} />
      </div>
    );
  }
}

export default Movies;
