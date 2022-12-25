import React from 'react'
import './style/DessertPage.css';
import Banner from '../../bannerHome/Banner'
import Menu from '../../menu/Menu'
import Footer from '../../footer/Footer'
import DessertCard from './DessertCard'
import { AllDessertProvider } from '../../../context/AllContext';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//import { Spacer } from '@nextui-org/react';

const DessertPage = () => {

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
        <div className='dessert-page-box'>
          <Row>
            <h1>Dessert Page</h1>
          </Row>
          <Row>
            <Col>
              <div>
                <AllDessertProvider>
                  <DessertCard />
                </AllDessertProvider>
              </div>
            </Col>
          </Row>
        </div>
        <Row>
          <Footer />
        </Row>
      </Container>
    </>
  )
}

export default DessertPage