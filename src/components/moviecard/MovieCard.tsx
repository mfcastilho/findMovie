import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { MovieInterface } from "../../interfaces/MovieInterface";
import "./MovieCard.css";

interface Props {
  movie: MovieInterface;
  showLink?: boolean;
}

const imageURL = import.meta.env.VITE_IMG;

function MovieCard({ movie, showLink = true }: Props) {
  return (
     <div className="moviecard-container">
          <div>
               <img src={imageURL + movie.poster_path} alt={movie.title} />
               <h2>{movie.title}</h2>
               <p>
                    <FaStar /> {movie.vote_average}
               </p>
               {showLink && <Link to={`/movie/${movie.id}`}>Detalhes</Link>}
          </div>
     </div>
  );
}

export default MovieCard;
