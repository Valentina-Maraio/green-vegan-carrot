import React from 'react'
import './style/DessertPage.css';
import Banner from '../bannerHome/Banner'
import Menu from '../menu/Menu'
import { Card, Col, Text, Grid } from "@nextui-org/react";
import DessertPageModal from '../dessertPageModal/DessertPageModal';

const DessertPage = () => {

  return (
    <>
      <div>
        <Banner />
        <Menu />
        <h1>Dessert Page</h1>
      </div>
      <div className='dessert-page-box'>
        <Grid.Container gap={2} justify="center">
          <Grid xs={12} sm={4}>
            <Card css={{ bg: "$black", w: "100%" }}>
              <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
                <Col>
                  <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
                    Supercharged
                  </Text>
                </Col>
              </Card.Header>
              <Card.Image
                src="https://nextui.org/images/card-example-2.jpeg"
                width="100%"
                height={340}
                objectFit="cover"
                alt="Card image background"
              />
            </Card>
            <DessertPageModal />
          </Grid>
          <Grid xs={12} sm={4}>
            <Card css={{ bg: "$black", w: "100%" }}>
              <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
                <Col>
                  <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
                    Supercharged
                  </Text>
                </Col>
              </Card.Header>
              <Card.Image
                src="https://nextui.org/images/card-example-2.jpeg"
                width="100%"
                height={340}
                objectFit="cover"
                alt="Card image background"
              />
            </Card>
            <DessertPageModal />
          </Grid>
        </Grid.Container>
      </div>
    </>
  )
}

export default DessertPage