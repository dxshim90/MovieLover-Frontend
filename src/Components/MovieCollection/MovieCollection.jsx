import React from "react";
import "./MovieCollection.css";
import MovieCard from "../MovieCard/Moviecard";

const MovieCollection = props => {
  return (
    <div className="toprated-con">
      {props.collection.map(movie => {
        return (
          <MovieCard
            removeMovie={props.removeMovie}
            currentUser={props.currentUser}
            key={movie.id}
            movie={movie}
          />
        );
      })}
    </div>
  );
};

export default MovieCollection;
