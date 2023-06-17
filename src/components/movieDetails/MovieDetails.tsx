import { MovieInterface } from "../../interfaces/MovieInterface";
import "./MovieDetails.css";
import { motion } from "framer-motion";

interface Props {
  movie: MovieInterface;
}

const imageURL = import.meta.env.VITE_IMG;

function MovieDetails({ movie }: Props) {
  return (
     <div className="moviedetails-container">
          <motion.div 
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true, amount: 0.5 }}
               transition={{ delay: 0.2, duration: 0.5 }}
               variants={{
               hidden: { opacity: 0, x: -150 },
               visible: { opacity: 1, x: 0 },
               }}
          >

               <img src={imageURL + movie.poster_path} alt={movie.title} />
          </motion.div>            
     </div>
  );
}

export default MovieDetails;
