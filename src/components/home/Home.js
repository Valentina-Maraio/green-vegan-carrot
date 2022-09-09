import React from 'react'
import './style/Home.css'
import Banner from '../bannerHome/Banner'
import Menu from '../menu/Menu'
import DessertButtonPage from '../dessertButtonPage/DessertButtonPage';
import DessertSwipe from '../dessertSwipe/DessertSwipe'
import VeganYearDescription from '../veganYearDescription/VeganYearDescription';
import VeganYear from '../year/VeganYear'
import QuoteOne from '../quotes/QuoteOne';
import QuoteTwo from '../quotes/QuoteTwo';
import Footer from '../footer/Footer'
import { Spacer } from '@nextui-org/react';
import DessertBanner from '../dessertBanner/DessertBanner';

const Home = () => {
  return (
    <>
      <Banner />
      <Menu />
      <Spacer />
      <DessertBanner />
      <Spacer />
      <DessertSwipe />
      <div class='introduction'>
        <DessertButtonPage />
      </div>
      <QuoteOne />
      <VeganYearDescription />
      <VeganYear />
      <QuoteTwo />
      <Footer />
    </>
  )
}

export default Home