import React from 'react';
import { Modal, Button, Text, Col, Row, Card } from "@nextui-org/react";

export default function DessertPageModal(props) {
    const [visible, setVisible] = React.useState(false);
    const handler = () => setVisible(true);
    const closeHandler = () => {
        setVisible(false);
    }
    if (props.visible) { return null }

    return (
        <div>
            <Modal
                scroll
                fullScreen
                blur
                noPadding
                open={visible}
                onClose={closeHandler}>
                <Modal.Header>
                    <Card.Image
                        src={props.photo}
                        width="auto"
                        height="250px"
                        objectFit="fit"
                        alt={props.title}
                    />
                </Modal.Header>
                <Modal.Body>
                    <Text size={30}>
                        {props.title} recipe:
                    </Text>
                </Modal.Body>
            </Modal>
            <Button size="xs" auto flat color="gray" onClick={handler}>
                Info
            </Button>
        </div>
    );
}
