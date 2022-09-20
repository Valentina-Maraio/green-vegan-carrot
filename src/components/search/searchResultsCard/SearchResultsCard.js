import React, { useContext } from 'react'
import { SearchContext } from '../../../context/AllContext'
import { Card, Row, Col, Text, Grid, Button } from "@nextui-org/react";
import RecipesInfoModal from '../../modal/RecipesInfoModal'
import { FavRecipesContext } from '../../../context/AllContext';

const SearchResultsCard = () => {

  const [searchedRecipes] = useContext(SearchContext);
  const { addToFav } = useContext(FavRecipesContext);

  return (
    <>
      <div className='recipes'>
        <Grid.Container gap={2} justify="center">
          {searchedRecipes?.map((item) => {
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
                      onPress={() => addToFav(item.title, item.image)}
                    >
                      <i className="pi pi-heart"></i>
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
                    <Row justify="flex-end">
                      <RecipesInfoModal
                        title={item.title}
                        photo={item.image}
                        servings={item.servings}
                        readyIn={item.readyInMinutes}
                        instructions={item.instructions}
                        cookingTime={item.readyInMinutes}
                        price={item.pricePerServing}
                        list={item.extendedIngredients?.map((item) => <ul><li>{item.name} {item.measures.us.amount} {item.measures.metric.unitShort}</li></ul>)}
                        steps={item.analyzedInstructions[0].steps?.map((item) => <ul><li>{item.step}</li></ul>)}
                      />
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

export default SearchResultsCard