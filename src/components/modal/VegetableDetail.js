import React, { useState } from 'react';
//modal
import { Modal, Button, Text, Card, Col, Grid } from '@nextui-org/react';
//accordion
import { Table } from "@nextui-org/react";

export default function VegetableDetail(props) {
    //modal
    const [visible, setVisible] = useState(false);

    const handler = () => setVisible(true);

    const closeModal = () => {
        setVisible(false);
    };

    if (props.visible) { return null };

    return (
        <div>
            <Modal noPadding open={visible} onClose={closeModal}>
                <Modal.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
                    <Col>
                        <Text
                            h4
                            size={20}
                            weight="bold"
                            css={{ pl: "$8" }}
                        >
                            {props.title}
                        </Text>
                    </Col>
                </Modal.Header>
                <Modal.Body>
                    <Card css={{ p: "$15", w: "auto" }}>
                        <Grid.Container css={{ pl: "$0" }}>
                            <Table
                                aria-label="Example table with static content"
                                css={{
                                    height: "auto",
                                    Width: "auto",
                                }}
                            >
                                <Table.Header>
                                    <Table.Column>NAME</Table.Column>
                                    <Table.Column>IMAGE</Table.Column>
                                </Table.Header>
                                <Table.Body>
                                    <Table.Row key="1">
                                        <Table.Cell>Tony Reichert</Table.Cell>
                                        <Table.Cell>Tony Reichert</Table.Cell>
                                    </Table.Row>
                                    <Table.Row key="2">
                                        <Table.Cell>Zoey Lang</Table.Cell>
                                        <Table.Cell>Zoey Lang</Table.Cell>
                                    </Table.Row>
                                    <Table.Row key="3">
                                        <Table.Cell>Jane Fisher</Table.Cell>
                                        <Table.Cell>Jane Fisher</Table.Cell>
                                    </Table.Row>
                                    <Table.Row key="4">
                                        <Table.Cell>William Howard</Table.Cell>
                                        <Table.Cell>William Howard</Table.Cell>
                                    </Table.Row>
                                </Table.Body>
                            </Table>
                        </Grid.Container>
                    </Card>
                </Modal.Body>
            </Modal>
            <Button size="xs" auto flat color="gray" onPress={handler}>
                {props.title}
            </Button>
        </div>
    )
}