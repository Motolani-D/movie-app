import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";

function AddMovieModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow} id="add-button">
        <span style={{ fontSize: "25px", color: "green" }}> + </span> Add Movie
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Movie name</Form.Label>
              <Form.Control type="name" placeholder="Title" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Year</Form.Label>
              <Form.Control type="year" placeholder="Year" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Image URL</Form.Label>
              <Form.Control type="url" placeholder="Image URL" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Rating</Form.Label>
              <Form.Control type="rating" placeholder="Rating" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddMovieModal;
