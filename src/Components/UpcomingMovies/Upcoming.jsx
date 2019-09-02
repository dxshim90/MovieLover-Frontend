import React from "react";
import MovieCard from "../MovieCard/Moviecard";
import "./Upcoming.css";

const Upcoming = props => {
  return (
    <div className="toprated-con">
      <div className="box">
        {props.upcoming.map(movie => {
          return (
            <MovieCard addMovie={props.addMovie} key={movie.id} movie={movie} />
          );
        })}
      </div>
    </div>
  );
};

export default Upcoming;
