import React, { useContext } from 'react'
import { SearchContext } from '../../../context/AllContext'


const SearchResultsCard = () => {

  const [searchedRecipes] = useContext(SearchContext);

  return (
    <>
    <div>
      {searchedRecipes.map((item) => {
        return (
          <p>{item.title}</p>
        )
      })}
    </div>
    </>
  )
}

export default SearchResultsCard