import { Modal, useModal, Button, Text } from "@nextui-org/react";

export default function DessertPageModal() {
    const { setVisible, bindings } = useModal();
    return (
        <div>
            <Modal
                scroll
                fullScreen
                closeButton
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
                {...bindings}
            >
                <Modal.Header>
                    <Text id="modal-title" size={18}>
                        Modal with a lot of content
                    </Text>
                </Modal.Header>
                <Modal.Body>
                    <Text id="modal-description">ciao</Text>
                </Modal.Body>
                <Modal.Footer>
                    <Button flat auto color="error" onClick={() => setVisible(false)}>
                        Close
                    </Button>
                    <Button onClick={() => setVisible(false)}>Agree</Button>
                </Modal.Footer>
            </Modal>
            <Button auto flat onClick={() => setVisible(true)}>
                Open modal
            </Button>
        </div>
    );
}
