import React, { useContext } from 'react'
import { FavRecipesContext } from '../../context/AllContext'
import BannerFav from '../../components/bannerFav/BannerFav'
import Menu from '../../components/menu/Menu'
import Container from 'react-bootstrap/Container';
import { Card, Row, Col, Text, Grid, Button } from "@nextui-org/react";

const FavRecipes = () => {
  const { favRec } = useContext(FavRecipesContext)

  return (
    <>
      <Container>
        <Row>
          <Col>
            <BannerFav />
          </Col>
        </Row>
        <Row>
          <Col>
            <Menu />
          </Col>
        </Row>
        <div className="favs">
          <Grid.Container gap={2} justify="center">
            {favRec.map((item) => {
              return (
                <Grid xs={12} sm={4}>
                  <Card css={{ w: "100%", h: "400px" }}>
                  <Card.Header
                    css={{
                      position: "absolute",
                      top: 10,
                      zIndex: 1,
                      height: 10,
                      justifyContent: 'end',
                    }}>
                    <Button
                      size="xs"
                      color="error" rounded
                    >
                      <i className="pi pi-heart-fill"></i>
                    </Button>
                  </Card.Header>
                    <Card.Body css={{ p: 0 }}>
                      <Card.Image
                        src={item.image}
                        width="100%"
                        height="100%"
                        objectFit="cover"
                        alt={item.title}
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
                          <Text color="#000" h6>
                            {item.title}
                          </Text>
                        </Col>
                      </Row>
                    </Card.Footer>
                  </Card>
                </Grid>
              )
            })}
          </Grid.Container>
        </div>
      </Container>
    </>
  )
}

export default FavRecipes