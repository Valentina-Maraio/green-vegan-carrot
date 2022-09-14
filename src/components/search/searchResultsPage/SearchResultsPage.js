import React from 'react'
import Banner from '../../bannerHome/Banner'
import Menu from '../../menu/Menu'
import Footer from '../../footer/Footer'
import SearchResultsCard from '../searchResultsCard/SearchResultsCard'
import { SearchProvider } from '../../../context/AllContext'

const SearchResultsPage = () => {
  return (
    <>
      <div>
        <Banner />
        <Menu />
        <h1>Result Page</h1>
      </div>
      <div>
        <SearchProvider>
          <SearchResultsCard />
        </SearchProvider>
      </div>
      <Footer />
    </>
  )
}

export default SearchResultsPage