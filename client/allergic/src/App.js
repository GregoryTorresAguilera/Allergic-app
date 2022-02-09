
import './App.scss';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/Home/Home';
import Scanner from './pages/Scanner/Scanner';
import RestMap from './pages/RestMap/RestMap';
import Emergency from './pages/Emergency/Emergency';
import Favorite from './pages/Favorite/Favorite';
import Diary from './pages/Diary/Diary';
import { JwtContext } from './shared/contexts/JwtContext';
import Register from './pages/Register/Register';
import AuthButton from './shared/components/AuthButton/AuthButton';
import React from 'react'
//import RequireAuth from './shared/components/PrivateRoute/RequireAuth';
// import FormUser from './components/FormUser/FormUser'
 import LoginPage from './pages/LoginPage/LoginPage'; 


function App() {
  const [jwt, setJwt] = React.useState(localStorage.getItem('token') || null);
  return (
    <JwtContext.Provider value={{ jwt, setJwt }}>
    <div>
    <Router>
    <AuthButton/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/scanner" element={<Scanner />} />
          <Route path="/restaurant-map" element={<RestMap />} />
          <Route path="/emergency" element={<Emergency />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/diary" element={<Diary />} />
          <Route path="/register" element={<Register />}/>
          <Route path="/login"  element={<LoginPage/>}/>
         

         


     
        </Routes>

     </Router>
      
    </div>
    </JwtContext.Provider>
  );
}

export default App;
