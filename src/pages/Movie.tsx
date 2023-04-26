import { useParams } from "react-router-dom";
import {
     BsGraphUp,
     BsWallet2,
     BsHourglassSplit,
     BsFillFileEarmarkTextFill
} from "react-icons/bs";
import MovieCard from "../components/moviecard/MovieCard";
// import "./Movie.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { MovieInterface } from "../interfaces/MovieInterface";

const baseURL = import.meta.env.VITE_API;
const apikey = import.meta.env.VITE_API_KEY;

function Movie(){

     const {id} = useParams();
     const [movie, setMovie] = useState<MovieInterface | null>(null); // define o tipo de movie como Movie | null

     async function showMovie(){
          try {
               const response =  await axios.get<MovieInterface>(`${baseURL }/${id}?${apikey}`); // define o tipo da resposta como Movie

               console.log(response.data.original_title);
               setMovie(response.data);

          } catch (error) {
               console.log(error);
          }
     }

     function formatCurrency(number:number){
          return number.toLocaleString("en-US", {
               style: "currency",
               currency: "USD"
          });
     }

     useEffect(()=>{
          showMovie();
     }, []);

     return(
          <div className="movie-page">
               {movie && <>
                    <MovieCard movie={movie} showLink={false} />
                    <div className="infos-container">
                         <p className="tagline">{movie.tagline}</p>
                         <div className="info">
                              <h3>
                                   <BsWallet2 /> Orçamento:
                              </h3>
                              <p>{formatCurrency(movie.budget)}</p>
                         </div>

                         <div className="info">
                              <h3>
                                   <BsGraphUp /> Receita:
                              </h3>
                              <p>{formatCurrency(movie.revenue)}</p>
                         </div>

                         <div className="info">
                              <h3>
                                   <BsHourglassSplit /> Duração:
                              </h3>
                              <p>{movie.runtime} minutos</p>
                         </div>

                         <div className="info description">
                              <h3>
                                   <BsFillFileEarmarkTextFill /> Descrição:
                              </h3>
                              <p>{movie.overview}</p>
                         </div>
                    </div>
               </>}
          </div>
     );
}

export default Movie;