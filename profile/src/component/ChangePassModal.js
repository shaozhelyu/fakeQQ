import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap';
function ChangePassModal(props) {
  const [show, setShow] = useState(props.data.show);
  //   const handleShow = () => setShow(true);
  const handleClose = () => {
    setShow(false);
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.data.message}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.data.show ? 'yes' : 'no'}</Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={handleClose}
            data-testid="CloseModal"
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ChangePassModal;
