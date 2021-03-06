import React from "react";
import { useState } from "react";
import "./task-area.styles.css";
import { Row, Col, Button, Dropdown } from "react-bootstrap";
import { BsReverseLayoutTextSidebarReverse } from "react-icons/bs";
import { MdMessage, MdModeEdit, MdDeleteForever } from "react-icons/md";
import { FiMoreHorizontal } from "react-icons/fi";
import { confirmAlert } from "react-confirm-alert";

const TaskArea = ({ showEditModal, confirm, task, tasks, deleteTask }) => {
  const [dropDown, toggleDropdown] = useState(false);

  const confirmDelete = (taskid) => {
    confirmAlert({
      title: "Confirm Delete",
      message: "Are you sure you want to delete this task?",
      buttons: [
        {
          label: "Yes",
          onClick: () => deleteTask(taskid),
        },
        {
          label: "No",
          onClick: "",
        },
      ],
    });
  };

  return (
    <React.Fragment>
      <Row className="rectangle" key={task.id}>
        <Col sm={1} md={1}>
          <BsReverseLayoutTextSidebarReverse />
        </Col>
        <Col sm={2} md={2}>
          <b id="task-font">{task.taskname}</b>
          <br />
          <Button
            className={`pill ${
              task.tag === "Marketing & Sales" ? "marksales" : ""
            } ${task.tag === "Optimization" ? "optimization" : ""} ${
              task.tag === "Integrations" ? "integration" : ""
            } ${task.tag === "Custom Task" ? "custom-task" : ""} ${
              task.tag === "Deployment" ? "deployment" : ""
            } ${task.tag === "Testing" ? "testing" : ""} `}
          >
            {task.tag}
          </Button>
        </Col>
        <Col sm={2} md={2}>
          <b id="task-font">{`N${task.price}`}</b>
          <p id="task-price">Task Price</p>
          <p id="task-font">
            Delivery:<label id="task-price">{task.delivery}</label>
          </p>
        </Col>
        <Col sm={3} md={3}>
          <div className="user-details">
            <img className="avatar" src={task.imageurl} alt="user" />
            <div>
              <b className="name">{task.name}</b>
              <p className="assigned">Assigned to</p>
            </div>
          </div>
        </Col>
        <Col sm={2} md={2}>
          <Button className="status">
            <span
              className={`${
                task.status === "In Progress" ? "dot-in-progress" : ""
              }${
                task.status === "In Review" ? "dot-in-review" : ""
              }${
                task.status === "Verified" ? "dot" : ""
              }`}
            ></span>
            {task.status}
          </Button>
        </Col>
        <Col sm={1} md={1}>
          <MdMessage />
        </Col>
        <Col sm={1} md={1}>
          <Dropdown
            onMouseEnter={() => {
              toggleDropdown(true);
            }}
            onMouseLeave={() => {
              toggleDropdown(false);
            }}
            show={dropDown}
          >
            <Dropdown.Toggle
              variant="light"
              className="bg-white border-0 p-0"
              id="dropdown-basic"
            >
              <FiMoreHorizontal />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item onClick={() => showEditModal(task)}>
                Edit <MdModeEdit color="green" />
              </Dropdown.Item>
              <Dropdown.Item onClick={() => confirmDelete(task.id)}>
                Delete <MdDeleteForever color="red" />
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default TaskArea;
