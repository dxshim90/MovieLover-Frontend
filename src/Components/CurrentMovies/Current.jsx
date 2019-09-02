import React from "react";
import MovieCard from "../MovieCard/Moviecard";
import "./Current.css";

const Toprated = props => {
  return (
    <div className="toprated-con">
      <div className="box">
        {props.current.map(movie => {
          return <MovieCard key={movie.id} movie={movie} />;
        })}
      </div>
    </div>
  );
};

export default Toprated;
