import React, { useContext } from 'react'
import './style/DessertCarousel.css'
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import { Card, Col, Button, Text } from "@nextui-org/react";
import { DessertContext } from '../../context/dessertContext/AllContext';




const DessertCarousel = () => {
  const [dessert] = useContext(DessertContext);

  return (
    <>
      <div className='button'>
        <Link to='/dessertpage'>
          <Button>More dessert</Button>
        </Link>
      </div>
      <div className='carousel-box'>
        <Carousel>
          {dessert.map((recipe) => {
            return (
              <Carousel.Item>
                <Card css={{ w: "100%", h: "400px" }}>
                  <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
                    <Col>
                      <Text size={12} weight="bold" transform="uppercase" color="#9E9E9E">
                        DESSERT
                      </Text>
                      <Text h3 color="white">
                        {recipe.title}
                      </Text>
                    </Col>
                  </Card.Header>
                  <Card.Body css={{ p: 0 }}>
                    <Card.Image
                      src={recipe.image}
                      objectFit="cover"
                      width="100%"
                      height="100%"
                      alt={recipe.title}
                    />
                  </Card.Body>
                </Card>
              </Carousel.Item>
            )
          })}
        </Carousel>
      </div>
    </>
  )
}

export default DessertCarousel