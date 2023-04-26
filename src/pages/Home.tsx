import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import { FaStar} from "react-icons/fa";

const baseURL = import.meta.env.VITE_API;
const apikey = import.meta.env.VITE_API_KEY;
const imageURL = import.meta.env.VITE_IMG;


function Home(){

     const [bestMovies, setBestMovies] = useState([]);

     async function getTheBestRankingMovies(){
          try {
               const response =  await axios.get(`${baseURL }/top_rated?${apikey}`);
               
               console.log(response.data);
               response.data.results.forEach((movie: any) =>{
                    console.log(movie.title);
               });
               setBestMovies(response.data.results);

          } catch (error) {
               console.log(error);
          }
     }

     useEffect(()=>{
          getTheBestRankingMovies();
     }, [])


     return(
          <div className="home-container">
               <h2 className="title">Melhores filmes:</h2>
               <div className="movie-container">
               <div className="moviecard-container">
               
          </div>
                    {bestMovies.length === 0 && <p>Carregando...</p>}
                    {bestMovies.length > 0 && bestMovies.map((movie: any)=>(
                         <div>
                         <img src={imageURL + movie.poster_path} alt={movie.title} />
                         <h2>{movie.title}</h2>
                         <p>
                              <FaStar /> {movie.vote_average}
                         </p>
                         <Link to={`/movie/${movie.id}`}>Detalhes</Link>
                    </div>
                    ))}
               </div>
          </div>
     );
}

export default Home;