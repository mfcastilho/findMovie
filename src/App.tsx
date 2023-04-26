import { Outlet } from 'react-router-dom';
import NavBar from './components/navbar/NavBar';


import './App.css'

function App() {
 

  return (
     <>
          <NavBar />
          <h2>Find Movies</h2>
          <Outlet />    
     </>
  );
}

export default App;
