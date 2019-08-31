import React from "react";
import Toprated from "../Components/TopRated/Toprated";

class Movies extends React.Component {
  state = {
    topRated: [],
    current: [],
    upcoming: []
  };

  async componentDidMount() {
    const request = await fetch("http://localhost:5000/movies/top");
    const response = await request.json();
    this.setState({
      topRated: response
    });
  }

  render() {
    return (
      <div>
        <Toprated toprated={this.state.topRated} />
      </div>
    );
  }
}

export default Movies;
