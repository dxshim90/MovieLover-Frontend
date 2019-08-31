import React from "react";
import MovieCard from "../MovieCard/Moviecard";

const Toprated = props => {
  return (
    <div>
      {props.toprated.map(movie => {
        return <MovieCard key={movie.id} movie={movie} />;
      })}
    </div>
  );
};

export default Toprated;
