import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import { Button, Card, Spacer } from "@nextui-org/react";
import { Badge } from "@nextui-org/react";
import './style/Details.css'


export default function RecipesInfoModal(props) {
    const [visible, setVisible] = useState(false);
    const [fullscreen] = useState(true);
    const handler = () => setVisible(true);
    const closeHandler = () => {
        setVisible(false);
    }
    if (props.visible) { return null }


    return (
        <div>
            <Modal
                fullscreen={fullscreen}
                show={visible}
                onClose={closeHandler}
                >
                <Modal.Body className="show-grid">
                    <Container>
                        <Row>
                            <Col xs={6} md={4}>
                                <Card.Image
                                    src={props.photo}
                                    width="auto"
                                    height="auto"
                                    objectFit="fit"
                                    alt={props.title}
                                />
                            </Col>
                            <Col xs={6} md={4} justifycontent="center">
                                <h3>{props.title}</h3>
                            </Col>
                        </Row>
                        <Spacer />
                        <Row>
                            <Col xs={6} md={6}>
                                <Badge>Servings: {props.servings}</Badge>
                            </Col>
                            <Col xs={6} md={6}>
                                <Badge>Ready in : {props.readyIn} mins</Badge>
                            </Col>
                        </Row>
                        <Spacer />
                        <Row>
                            <Col xs={8} md={4}>

                                <h5>Ingredients:</h5>
                                {props.list}
                            </Col>
                            <Col xs={12} md={6}>
                                <h5>Instructions:</h5>
                                <p>{props.instructions}</p>
                            </Col>
                        </Row>
                        <Spacer />
                        <Row>
                            <Col xs={12} md={6}>
                                <h5>Steps:</h5>
                                {props.steps}
                            </Col>
                        </Row>
                        <Spacer />
                        <Row>
                            <Col>
                                <Button onPress={closeHandler}>Close</Button>
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>
            </Modal>
            <Button size="xs" auto flat color="gray" onPress={handler}>
                Info
            </Button>
        </div >
    );
}
