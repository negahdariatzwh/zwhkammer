import { React } from "react";
import { Modal, Button } from "react-bootstrap";
function Imodal({ showModal, handleOpenModal, children, title }) {
  return (
    <Modal show={showModal} onHide={handleOpenModal}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleOpenModal}>
          schlißen
        </Button>
        <Button variant="primary" onClick={handleOpenModal}>
          speichern
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Imodal;
