import React, { useContext } from 'react'
import { FavRecipesContext } from '../../context/AllContext'
import BannerFav from '../../components/bannerFav/BannerFav'
import Menu from '../../components/menu/Menu'
import Container from 'react-bootstrap/Container';
import './style/favRecipes.css'
import { Card, Row, Col, Text, Grid, Button } from "@nextui-org/react";
//import RecipesInfoModal from '../../components/modal/RecipesInfoModal';

const FavRecipes = () => {
  const { favRec, deleteFav } = useContext(FavRecipesContext)

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
        <Row className="delete_button">
          <Col>
            <Button
              size="xs"
              color="error" rounded
              onPress={() => deleteFav(favRec.id)}
            >
              Delete All
            </Button>
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
                        color="error"
                        rounded
                      >
                        <i className='pi pi-heart-fill'></i>
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

/*

                          <RecipesInfoModal
                            title={item.title}
                            photo={item.image}
                            servings={item.servings}
                            readyIn={item.readyInMinutes}
                            instructions={item.instructions}
                            cookingTime={item.readyInMinutes}
                            price={item.pricePerServing}
                            list={item.extendedIngredients.map((item) => <ul><li>{item.name} {item.measures.us.amount} {item.measures.metric.unitShort}</li></ul>)}
                            steps={item.analyzedInstructions[0].steps.map((item) => <ul><li>{item.step}</li></ul>)}
                          />
                          
                          */