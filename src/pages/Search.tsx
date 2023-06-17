import { useState, useEffect } from 'react';
import "./MoviesGrid.css";
import MovieCard from "../components/moviecard/MovieCard";
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
import { MovieInterface } from '../interfaces/MovieInterface';
import { motion } from 'framer-motion';

const searchURL = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;

function Search(){

     const [searchParams] = useSearchParams();

     const [movies, setMovies] = useState([]);
     const query: string | null = searchParams.get("q");


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
               <motion.div 
                              initial="hidden"
                              whileInView="visible"
                              viewport={{ once: true, amount: 0.5 }}
                              transition={{ delay: 0.2, duration: 0.5 }}
                              variants={{
                              hidden: { opacity: 0, x: 100 },
                              visible: { opacity: 1, x: 0 },
                         }}
               >
                    <div className="movies-container">
                         {movies.length === 0 && <p>Carregando...</p>}
                         {movies.length > 0 && movies.map((movie:MovieInterface)=>(
                              // <h2>{movie.title}</h2>
                              <MovieCard key={movie.id} movie={movie}/>
                         ))}
                    </div>
               </motion.div>
          </div>
     );
}

export default Search;