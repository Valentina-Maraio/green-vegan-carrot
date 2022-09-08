import React from 'react'
import './style/DessertIntroduction.css'
import { Card, Text, Col } from '@nextui-org/react'

const DessertIntroduction = () => {
  return (
    <div className='introduction'>
      <Card
        variant="bordered"
        isPressable
        isHoverable>
        <Card.Body>
          <Card.Header css={{ w: "auto", zIndex: 99, top: 5 }}>
            <Col>
              <Text h3 color="black">
                Who said that vengan desserts are boring?
              </Text>
            </Col>
          </Card.Header>
        </Card.Body>
      </Card>
    </div>
  );
}

export default DessertIntroduction