import React from 'react'
import './style/Home.css'
import Banner from '../bannerHome/Banner'
import Menu from '../menu/Menu'
import DessertIntroduction from '../dessertIntroduction/DessertIntroduction';
import Dessert from '../dessert/Dessert'
import VeganYearDescription from '../veganYearDescription/VeganYearDescription';
import VeganYear from '../year/VeganYear'
import Nutrition from '../nutrition/Nutrition'
import QuoteOne from '../quotes/QuoteOne';
import QuoteTwo from '../quotes/QuoteTwo';
import Footer from '../footer/Footer'

const Home = () => {
  return (
    <>
      <Banner />
      <Menu />
      <div class='introduction'>
        <DessertIntroduction />
      </div>
      <div class='dessert'>
          <Dessert />
      </div>
      <QuoteOne />
      <VeganYearDescription />
      <VeganYear />
      <QuoteTwo />
      <Nutrition />
      <Footer />
    </>
  )
}

export default Home