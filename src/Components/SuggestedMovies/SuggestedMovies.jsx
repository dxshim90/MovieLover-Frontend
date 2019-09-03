import React from "react";
import MovieCard from "../MovieCard/Moviecard";

const SuggestedMovies = props => {
  return (
    <div className="toprated-con">
      <div className="box">
        {props.SuggestedMovies.map(movie => (
          <MovieCard
            movie={movie}
            key={movie.id}
            currentUser={props.currentUser}
            addMovie={props.addMovie}
          />
        ))}
      </div>
    </div>
  );
};

export default SuggestedMovies;
