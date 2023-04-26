import { FaStar } from "react-icons/fa";
import { MovieInterface } from "../../interfaces/MovieInterface";
import "./MovieDetails.css";

interface Props {
  movie: MovieInterface;
}

const imageURL = import.meta.env.VITE_IMG;

function MovieDetails({ movie }: Props) {
  return (
     <div className="moviedetails-container">

          <img src={imageURL + movie.poster_path} alt={movie.title} />
 
     </div>
  );
}

export default MovieDetails;
