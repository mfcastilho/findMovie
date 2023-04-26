import React from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
}

interface Props {
  movie: Movie;
  showLink?: boolean;
}

const imageURL = import.meta.env.VITE_IMG;

function MovieCard({ movie, showLink = true }: Props) {
  return (
    <div className="moviecard-container">
      <img src={imageURL + movie.poster_path} alt={movie.title} />
      <h2>{movie.title}</h2>
      <p>
        <FaStar /> {movie.vote_average}
      </p>
      {showLink && <Link to={`/movie/${movie.id}`}>Detalhes</Link>}
    </div>
  );
}

export default MovieCard;
