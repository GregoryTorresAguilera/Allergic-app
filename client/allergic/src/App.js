
import './App.scss';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/Home/Home';
import Scanner from './pages/Scanner/Scanner';
import RestMap from './pages/RestMap/RestMap';
import Emergency from './pages/Emergency/Emergency';
import Favorite from './pages/Favorite/Favorite';
import Diary from './pages/Diary/Diary';


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

          {/* <Route path="characters" element={<CharactersPage />} />
          <Route path="characters/:id" element={<CharacterDetailPage />} />
          <Route path="houses" element={<HousesPage />} />
          <Route path="houses/:id" element={<HouseDetailPage />} />
          <Route path="chronology" element={<ChronologyPage />} /> */}
        </Routes>

     </Router>
      
    </div>
  );
}

export default App;
