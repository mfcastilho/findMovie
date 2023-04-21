import React from 'react';
import { Link } from 'react-router-dom';
import { BiCameraMovie, BiSearchAlt2 } from 'react-icons/bi';


function NavBar(){
     return(
          <nav id="navbar">
               <h2>
                    <Link to="/">Find Movies</Link>
               </h2>
               <form >
                    <input type="text" placeholder='Busque um filme' />
                    <button type='submit'></button>
               </form>  
          </nav>
     );
}

export default NavBar;