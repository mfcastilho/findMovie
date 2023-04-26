import {useEffect, useState} from 'react';
import axios from 'axios';
import { MovieInterface } from '../interfaces/MovieInterface';
import "./MoviesGrid.css";
import MovieCard from '../components/moviecard/MovieCard';

const baseURL = import.meta.env.VITE_API;
const apikey = import.meta.env.VITE_API_KEY;


function Home(){

     const [bestMovies, setBestMovies] = useState([]);

     async function getTheBestRankingMovies(){
          try {
               const response =  await axios.get(`${baseURL }/top_rated?${apikey}`);
               
               console.log(response.data);
               response.data.results.forEach((movie: MovieInterface) =>{
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
               <div className="movies-container">

                    {bestMovies.length === 0 && <p>Carregando...</p>}
                              {bestMovies.length > 0 && bestMovies.map((movie: MovieInterface)=>(
                                   <MovieCard key={movie.id} movie={movie} />
                              ))}
 
               </div>
          </div>
     );
}

export default Home;