import React from 'react'
import BannerList from '../../components/bannerList/BannerList'
import Menu from '../../components/menu/Menu'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Spacer } from '@nextui-org/react';

const ShoppingList = () => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <BannerList />
          </Col>
        </Row>
        <Row>
          <Col>
            <Menu />
          </Col>
        </Row>
        <Spacer />
      </Container>
    </>
  )
}

export default ShoppingList