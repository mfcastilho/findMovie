import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaStar} from "react-icons/fa";
import axios from "axios";


const imageURL = import.meta.env.VITE_IMG;
const baseURL = import.meta.env.VITE_API;
const apikey = import.meta.env.VITE_API_KEY;


function MovieCard(/*{ movie:any, showLink?:any = true}*/){

     const [movie, setMovie] = useState("");
     const getMovieInfos = async () =>{

          try {
               const response =  await axios.get(`${baseURL }/top_rated?${apikey}`);
               
               console.log(response.data);
               response.data.results.forEach((movie:any) =>{
                    console.log(movie);
               });
               setMovie(response.data.results);

          } catch (error) {
               console.log(error);
          }
     }

     useEffect(()=>{
          getMovieInfos();
     },[])

     return(
          <div className="moviecard-container">
               {/* <img src={imageURL + movie.poster_path} alt={movie.title} />
               <h2>{movie.title}</h2>
               <p>
                    <FaStar /> {movie.vote_average}
               </p>
               {showLink && <Link to={`/movie/${movie.id}`}>Detalhes</Link>} */}
          </div>
     );
}

export default MovieCard;