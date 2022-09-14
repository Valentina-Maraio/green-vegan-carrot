import React, {useState, useEffect} from 'react'
import Menu from '../../components/menu/Menu'
import { useParams } from 'react-router-dom';

const Searched = () => {
  const [searchedRecipes, setSearchedRecipes] = useState([]);

  let params = useParams();

  const getSearched = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&diet=vegan&query=${name}`
    );
    const recipes = await data.json();
    setSearchedRecipes(recipes.results);
  };

  useEffect(() => {
    getSearched(params.search)
  }, [params.search])

  return (
    <>
    <h1>SearchResults</h1>
    <Menu />
    <div>
      {searchedRecipes.map((item) => {
        return (
          <div key={item.id}>
            <h3>{item.title}</h3>
            <img src={item.image} alt={item.title}/>
          </div>
        )
      })}
    </div>
    </>
  )
}

export default Searched