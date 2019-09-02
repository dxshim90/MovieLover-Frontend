import React from "react";
import MovieCard from "../MovieCard/Moviecard";
import "./Toprated.css";

const Toprated = props => {
  return (
    <div className="toprated-con">
      <div className="box">
        {props.toprated.map(movie => {
          return (
            <MovieCard addMovie={props.addMovie} key={movie.id} movie={movie} />
          );
        })}
      </div>
    </div>
  );
};

export default Toprated;
