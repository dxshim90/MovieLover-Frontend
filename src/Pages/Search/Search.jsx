import React from "react";
import SearchResults from "../../Components/SearchResults/SearchResults";
import "./Search.css";

class Search extends React.Component {
  state = {
    searchQuery: "",
    searchResult: [],
    currentUser: {}
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
      currentUser: responseUser
    });
  }

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

  onChange = e => {
    this.setState({
      searchQuery: e.target.value
    });
  };

  onSubmit = async e => {
    e.preventDefault();
    const query = this.state.searchQuery;
    const settings = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        query
      })
    };
    const request = await fetch(
      "https://movie-lover-backend.herokuapp.com/movies/search",
      settings
    );
    const response = await request.json();
    this.setState({
      searchResult: response
    });
    console.log(this.state.searchResult);
  };

  render() {
    return (
      <div className="search-con">
        <form onSubmit={this.onSubmit}>
          <label className="search-label">Search For a Movie: </label>
          <input
            className="search-input"
            type="text"
            onChange={this.onChange}
            placeholder="Search for a movie here"
          />
          <button type="submit" className="btn">
            Search
          </button>
        </form>
        <div>
          <SearchResults
            addMovie={this.addMovie}
            currentUser={this.state.currentUser}
            results={this.state.searchResult}
          />
        </div>
      </div>
    );
  }
}

export default Search;
