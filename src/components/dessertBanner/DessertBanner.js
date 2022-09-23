import React from 'react';
import './style/DessertBanner.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DessertCarousel from './dessertCarousel/DessertCarousel';
import { DessertProvider } from '../../context/AllContext';
import { Spacer } from '@nextui-org/react';
import vegan from '../../assets/images/vegan_friendly.jpg'


const DessertBanner = () => {
    return (
        <div className='sweets'>
            <Container>
                <Row>
                    <Spacer />
                    <Col className='more_dessert_button' sm={6}>
                        <h2>Who said vegan desserts are boring?</h2>
                        <img className="vegan_friendly" src={vegan} alt="vegan_friend"/>
                    </Col>
                    <Col className='dessert_banner' sm={6}>
                        <DessertProvider>
                            <DessertCarousel />
                        </DessertProvider>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default DessertBanner