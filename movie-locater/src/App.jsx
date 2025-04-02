import Moviecard from "./Big/Moviecard";
import Favorite from "./pages/favorites";
import Home from "./pages/home";
import Navbar from "./Big/Navbar";
import{Routes,Route,} from "react-router-dom";
import"./Css/App.css";
import { MovieProvider } from "./contexts/Moviecontexts";

function App() {
  return (
    <>
    <MovieProvider>
      <Navbar/>
      <main className="main-content">
        
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/favorites" element={<Favorite />} />
        </Routes>
        
      
      </main>
      </MovieProvider>
    </>
  );
}

export default App;
