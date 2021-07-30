import React from "react";
import { Modal, Button, Form, Row, Col} from "react-bootstrap";

const EditTaskModal = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Edit Task</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  value={props.editData.name}
                  onChange={(e) => props.handleEditTask(e)}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="taskname">
                <Form.Label>Task Name</Form.Label>
                <Form.Control
                  type="text"
                  value={props.editData.taskname}
                  onChange={(e) => props.handleEditTask(e)}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="tag">
                <Form.Label>Task Tag</Form.Label>
                <Form.Control
                  type="text"
                  value={props.editData.tag}
                  onChange={(e) => props.handleEditTask(e)}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="delivery">
                <Form.Label>Delivery Period</Form.Label>
                <Form.Control
                  type="text"
                  value={props.editData.delivery}
                  onChange={(e) => props.handleEditTask(e)}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="price">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  type="number"
                  value={props.editData.price}
                  onChange={(e) => props.handleEditTask(e)}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="status">
                <Form.Label>Status</Form.Label>
                <Form.Control
                  type="text"
                  value={props.editData.status}
                  onChange={(e) => props.handleEditTask(e)}
                />
              </Form.Group>
            </Col>
          </Row>
          <Form.Group className="mb-3" controlId="imageurl">
            <Form.Label>Image Url</Form.Label>
            <Form.Control
              type="text"
              value={props.editData.imageurl}
              onChange={(e) => props.handleEditTask(e)}
            />
          </Form.Group>
          <Button onClick={(e) => props.editTask(e, props.editData.id)}>Edit Task</Button>
        </Form>
      </Modal.Body>
      {/* <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer> */}
    </Modal>
  );
};

export default EditTaskModal;
