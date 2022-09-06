import React from 'react'
import Banner from '../bannerHome/Banner'
import Menu from '../menu/Menu'
import Dessert from '../dessert/Dessert'
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
    <VeganYear />
    <QuoteOne />
    <Dessert />
    <QuoteTwo />
    <Nutrition />
    <Footer />
    </>
  )
}

export default Home