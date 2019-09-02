import React from "react";
import "./SingleMovie.css";

const SingleMovie = props => {
  const posterlink = `https://image.tmdb.org/t/p/w500/${props.location.data.poster_path}`;
  const backdropLink = `https://image.tmdb.org/t/p/w500/${props.location.data.backdrop_path}`;
  return (
    <div
      className="movie-container"
      style={{ backgroundImage: `url(${backdropLink})` }}
    >
      <div className="single-img-con">
        <img src={posterlink} alt="Poster" />
      </div>
      <div className="movie-info">
        <h2 className="movie-title">{props.location.data.title}</h2>
        <p className="movie-description">{props.location.data.overview}</p>
        <div className="buttons-con">
          <button className="btn">Add Movie To Collection</button>
          <button onClick={() => props.history.push("/movies")} className="btn">
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleMovie;
