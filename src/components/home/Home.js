import React from 'react'
import './style/Home.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Banner from '../bannerHome/Banner'
import Menu from '../menu/Menu'
import VeganYearDescription from '../veganYearDescription/VeganYearDescription';
import VeganYear from '../year/VeganYear'
import QuoteOne from '../quotes/QuoteOne';
import QuoteTwo from '../quotes/QuoteTwo';
import Footer from '../footer/Footer'
import { Spacer } from '@nextui-org/react';
import DessertBanner from '../dessertBanner/DessertBanner'
import DessertCarousel from '../dessert/dessertCarousel/DessertCarousel';
import { DessertProvider } from '../../context/AllContext'

const Home = () => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Banner />
          </Col>
        </Row>
        <Row>
          <Col>
            <Menu />
          </Col>
        </Row>
        <Spacer />
        <Row>
          <Col>
            <DessertBanner />
          </Col>
        </Row>
        <Row>
          <Col>
            <DessertProvider>
              <DessertCarousel />
            </DessertProvider>
          </Col>
        </Row>
        <Spacer />
        <Row>
          <Col>
            <QuoteOne />
          </Col>
        </Row>
        <Row>
          <Col>
            <VeganYearDescription />
          </Col>
        </Row>
        <Row>
          <Col>
            <VeganYear />
          </Col>
        </Row>
        <Row>
          <Col>
            <QuoteTwo />
          </Col>
        </Row>
        <Row>
          <Col>
            <Footer />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Home