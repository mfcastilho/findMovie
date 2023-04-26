import React, { useState, useEffect } from 'react';
import "./MoviesGrid.css";
import MovieCard from "../components/moviecard/MovieCard";
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
import { MovieInterface } from '../interfaces/MovieInterface';

const searchURL = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;

function Search(){

     const [searchParams] = useSearchParams();

     const [movies, setMovies] = useState([]);
     const query = searchParams.get("q");


     async function getSearchMovies(){
          try {
               const response =  await axios.get(`${searchURL}?${apiKey}&query=${query}`);
               console.log("Entrou")
               console.log(response.data);
               response.data.results.forEach((movie:MovieInterface) =>{
                    console.log(movie.title);
               });
               setMovies(response.data.results);

          } catch (error) {
               console.log(error);
          }
     }

     useEffect(()=>{
          getSearchMovies();
     }, [query])


     return(
          <div className="search-container">
               <h2 className="title">Resultados para: <span className="query-text">{query}</span> </h2>
               <div className="movies-container">
                    {movies.length === 0 && <p>Carregando...</p>}
                    {movies.length > 0 && movies.map((movie:MovieInterface)=>(
                         // <h2>{movie.title}</h2>
                         <MovieCard key={movie.id} movie={movie}/>
                    ))}
               </div>
          </div>
     );
}

export default Search;