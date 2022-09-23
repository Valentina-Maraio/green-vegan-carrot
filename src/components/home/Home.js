import React from 'react'
import './style/Home.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Banner from '../bannerHome/Banner'
import Menu from '../menu/Menu'
import VeganYearDescription from '../bannerVeganYear/VeganYearDescription';
import VeganYear from '../year/VeganYear'
import Footer from '../footer/Footer'
import { Spacer } from '@nextui-org/react';
import DessertBanner from '../dessertBanner/DessertBanner'

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
        <Row>
          <Col>
            <DessertBanner />
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
        <Spacer />
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