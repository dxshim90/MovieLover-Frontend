import React from "react";
import "./SingleMovie.css";
import { withRouter } from "react-router-dom";

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

        {props.location.currentUser.movies.some(
          element => element.id === props.location.data.id
        ) ? (
          <div className="buttons-con">
            <button
              onClick={() => props.location.removeMovie(props.location.data)}
              className="btn"
            >
              Remove Movie from Collection
            </button>
            <button onClick={() => props.history.goBack()} className="btn">
              Back
            </button>
          </div>
        ) : (
          <div className="buttons-con">
            <button
              onClick={() => props.location.addMovie(props.location.data)}
              className="btn"
            >
              Add Movie To Collection
            </button>
            <button onClick={() => props.history.goBack()} className="btn">
              Back
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default withRouter(SingleMovie);
