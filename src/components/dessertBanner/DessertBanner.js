import React from 'react';
import './style/DessertBanner.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DessertCarousel from './dessertCarousel/DessertCarousel';
import { DessertProvider } from '../../context/AllContext';
import { Spacer } from '@nextui-org/react';
//import vegan from '../../assets/images/vegan_friendly.png'


const DessertBanner = () => {
    return (
        <>
            <Container className='sweets'>
                <Row>
                    <Spacer />
                    <Col className='dessert_banner' sm={12}>
                        <DessertProvider>
                            <DessertCarousel />
                        </DessertProvider>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default DessertBanner