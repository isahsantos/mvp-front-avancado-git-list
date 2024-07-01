import { Header } from "./components/Header"
import Home from "./pages/HomePage"
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Route, Routes,  } from 'react-router-dom';
import ResultsPage from "./pages/ResultsPage";
import FavoritesPage from "./pages/FavoritePages";
import '../src/assets/styles/style-global.css';
import NotFoundPage from "./pages/NotFoundPage";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="" Component={HomePage} />
        <Route path="/results/:username" Component={ResultsPage} />
        <Route path="/favorites" Component={FavoritesPage} />
        <Route path='*' Component={NotFoundPage} />
      </Routes>
    </Router>
  );
};

export default App;

