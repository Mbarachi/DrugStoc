import React from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";

const AddNewTaskModal = (props) => {
    
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add New Task
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form> 
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" onChange={(e) => {props.handleAddTask(e)}} value={props.data.name}/>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="taskname">
                <Form.Label>Task Name</Form.Label>
                <Form.Control type="text" onChange={(e) => props.handleAddTask(e)} value={props.data.taskname} />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="tag">
                <Form.Label>Task Tag</Form.Label>
                <Form.Control type="text" onChange={(e) => props.handleAddTask(e)} value={props.data.tag} />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="delivery">
                <Form.Label>Delivery Period</Form.Label>
                <Form.Control type="text" onChange={(e) => props.handleAddTask(e)} value={props.data.delivery}/>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="price">
                <Form.Label>Price</Form.Label>
                <Form.Control type="number" onChange={(e) => props.handleAddTask(e)} value={props.data.price} />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="status">
                <Form.Label>Status</Form.Label>
                <Form.Control type="text" onChange={(e) => props.handleAddTask(e)} value={props.data.status} />
              </Form.Group>
            </Col>
          </Row>
          <Form.Group className="mb-3" controlId="imageurl">
            <Form.Label>Image Url</Form.Label>
            <Form.Control type="text" onChange={(e) => props.handleAddTask(e)} value={props.data.imageurl} />
          </Form.Group>
            <Button onClick={(e) => props.submit(e)}>Add Task</Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
      </Modal.Footer>
    </Modal>
  );
};

export default AddNewTaskModal;
