import React from 'react'
import BannerResults from '../../bannerResults/BannerResults'
import Menu from '../../menu/Menu'
import Footer from '../../footer/Footer'
import SearchResultsCard from '../searchResultsCard/SearchResultsCard'
import { SearchProvider } from '../../../context/AllContext'
import './style/SearchResultsPage.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//import { Spacer } from '@nextui-org/react';

const SearchResultsPage = () => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <BannerResults />
          </Col>
        </Row>
        <Row>
          <Col>
            <Menu />
          </Col>
        </Row>
        <Row>
          <Col>
            <div className='recipes'>
              <SearchProvider>
                <SearchResultsCard />
              </SearchProvider>
            </div>
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

export default SearchResultsPage