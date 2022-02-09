
import './App.scss';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/Home/Home';
import Scanner from './pages/Scanner/Scanner';
import RestMap from './pages/RestMap/RestMap';
import Emergency from './pages/Emergency/Emergency';
import Favorite from './pages/Favorite/Favorite';
import Diary from './pages/Diary/Diary';
<<<<<<< HEAD
import Register from './pages/Register/Register';

/* import Login from './pages/Login/Login'; */
=======

// import LoginPage from './pages/LoginPage/LoginPage';
>>>>>>> cbde35e621d4d488254c459bc343f5dc52fcfd69


function App() {
  return (
    <div>
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/scanner" element={<Scanner />} />
          <Route path="/restaurant-map" element={<RestMap />} />
          <Route path="/emergency" element={<Emergency />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/diary" element={<Diary />} />
<<<<<<< HEAD
          <Route path="/register" element={<Register />}/>
         

         
=======
          {/* <Route path="/login" element={<LoginPage />} /> */}
>>>>>>> cbde35e621d4d488254c459bc343f5dc52fcfd69


     
        </Routes>

     </Router>
      
    </div>
  );
}

export default App;
