import React from "react";
import "./MovieCard.css";
import { Link } from "react-router-dom";

const MovieCard = props => {
  const posterlink = `https://image.tmdb.org/t/p/w500/${props.movie.poster_path}`;
  const backdropLink = `https://image.tmdb.org/t/p/w500/${props.movie.backdrop_path}`;
  const releaseDate = props.movie.release_date
    .split("-")
    .reverse()
    .join("-");

  return (
    <Link
      to={{
        pathname: `/movies/${props.movie.id}`,
        data: props.movie,
        addMovie: props.addMovie,
        currentUser: props.currentUser,
        removeMovie: props.removeMovie
      }}
    >
      <div className="movie_card" id="bright">
        <div className="info_section">
          <div className="movie_header">
            <img className="locandina" src={posterlink} />
            <h1>{props.movie.title}</h1>

            <span className="minutes">Release Date: {releaseDate}</span>
          </div>
          {/* <div className="movie_desc">
          <p className="text">{props.movie.overview}</p>
        </div> */}
        </div>
        <div
          className="blur_back"
          style={{ backgroundImage: `url(${backdropLink})` }}
        ></div>
      </div>
    </Link>
  );
};

export default MovieCard;
