//import logo from './logo.svg';
//<img src={logo} className="App-logo" alt="logo" />

import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/home/Home';
//pages
import FavRecipes from './pages/favRecipes/FavRecipes';
import ShoppingList from './pages/shoppingList/ShoppingList';
import SearchResults from './pages/searchResults/SearchResults';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/favrecipes" element={<FavRecipes />}></Route>
          <Route path="/shoppinglist" element={<ShoppingList />}></Route>
          <Route path="/searchresults" element={<SearchResults />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
