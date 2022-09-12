import React, { useContext } from 'react'
import { Card, Row, Col, Text, Grid, Button } from "@nextui-org/react";
import DessertPageModal from '../dessertPageModal/DessertPageModal';
import { AllDessertContext } from '../../context/dessertContext/AllContext'


const DessertCard = () => {

  const [alldessert] = useContext(AllDessertContext);

  return (
    <>
      <div className='dessert-page-box'>
        <Grid.Container gap={2} justify="center">
          {alldessert.map((dessert) => {
            return (
              <Grid xs={12} sm={4}>
                <Card css={{ w: "100%", h: "400px" }}>
                  <Card.Header
                    css={{
                      position: "absolute",
                      borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
                      top: 0,
                      zIndex: 1,
                      height: 10,
                      justifyContent: 'end',
                    }}>
                    <Button>ICON</Button>
                  </Card.Header>
                  <Card.Body css={{ p: 0 }}>
                    <Card.Image
                      src={dessert.image}
                      width="100%"
                      height="100%"
                      objectFit="cover"
                      alt={dessert.title}
                    />
                  </Card.Body>
                  <Card.Footer
                    isBlurred
                    css={{
                      position: "absolute",
                      bgBlur: "#ffffff66",
                      borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
                      bottom: 0,
                      zIndex: 1,
                      height: 100,
                    }}
                  >
                    <Row>
                      <Col>
                        <Text color="#000" h5>
                          {dessert.title}
                        </Text>
                      </Col>
                    </Row>
                    <Row justify="flex-end">
                      <DessertPageModal />
                    </Row>
                  </Card.Footer>
                </Card>
              </Grid>
            )
          })}
        </Grid.Container>
      </div>
    </>
  )
}

export default DessertCard