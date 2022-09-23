//import logo from './logo.svg';
//<img src={logo} className="App-logo" alt="logo" />

import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
//pages
import FavRecipes from './pages/favRecipes/FavRecipes';
import DessertPage from './components/dessert/dessertPage/DessertPage';
import SearchResultsPage from './components/search/searchResultsPage/SearchResultsPage';
import 'bootstrap/dist/css/bootstrap.min.css';

import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons

import {FavRecipesProvider} from './context/AllContext'

function App() {
  return (
    <FavRecipesProvider>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/searched/:search" element={<SearchResultsPage />}></Route>
            <Route path="/favrecipes" element={<FavRecipes />}></Route>
            <Route path="/dessertpage" element={<DessertPage />}></Route>
          </Routes>
        </Router>
      </div>
    </FavRecipesProvider>
  );
}

export default App;
