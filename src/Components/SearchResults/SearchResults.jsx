import React from "react";
import "./SearchResults.css";
import MovieCard from "../MovieCard/Moviecard";

const SearchResults = props => {
  return (
    <div className="results-con">
      {props.results.map(movie => (
        <MovieCard
          addMovie={props.addMovie}
          currentUser={props.currentUser}
          movie={movie}
          key={movie.id}
        />
      ))}
    </div>
  );
};

export default SearchResults;
