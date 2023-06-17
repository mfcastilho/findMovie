import {useEffect, useState} from 'react';
import axios from 'axios';
import { MovieInterface } from '../interfaces/MovieInterface';
import "./MoviesGrid.css";
import MovieCard from '../components/moviecard/MovieCard';
import {motion} from "framer-motion";


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
               <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    variants={{
                      hidden: { opacity: 0, x: 80 },
                      visible: { opacity: 1, x: 0 },
                    }}
               >
                    <div className="movies-container">

                         {bestMovies.length === 0 && <p>Carregando...</p>}
                         
                                   {bestMovies.length > 0 && bestMovies.map((movie: MovieInterface)=>(
                                        <MovieCard key={movie.id} movie={movie} />
                                   ))}
     
                    </div>
               </motion.div>
          </div>
     );
}

export default Home;