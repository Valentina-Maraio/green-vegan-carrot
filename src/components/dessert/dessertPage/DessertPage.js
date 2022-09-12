import React from 'react'
import './style/DessertPage.css';
import Banner from '../../bannerHome/Banner'
import Menu from '../../menu/Menu'
import Footer from '../../footer/Footer'
import DessertCard from './DessertCard'
import { AllDessertProvider } from '../../../context/dessertContext/AllContext';
import DessertFiltro from '../dessertFiltro/DessertFiltro'

const DessertPage = () => {

  return (
    <>
      <div>
        <Banner />
        <Menu />
        <h1>Dessert Page</h1>
      </div>
      <div className='filtro'>
        <DessertFiltro />
      </div>
      <div className='dessert-page-box'>
        <AllDessertProvider>
          <DessertCard />
        </AllDessertProvider>
      </div>
      <Footer />
    </>
  )
}

export default DessertPage