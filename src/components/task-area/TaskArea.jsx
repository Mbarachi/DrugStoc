import React from 'react'
import {useState} from 'react'
import './task-area.styles.css'
import { Row, Col, Button, Dropdown } from 'react-bootstrap'
import {BsReverseLayoutTextSidebarReverse} from 'react-icons/bs'
import {MdMessage, MdModeEdit, MdDeleteForever} from 'react-icons/md'
import {FiMoreHorizontal} from 'react-icons/fi'


 const TaskArea = ({showEditModal, confirm, task}) => {

    const [dropDown, toggleDropdown] = useState(false)

            return (
                <React.Fragment>
                        <b>CURRENT</b> 
                        <Row className="rectangle" key={task.id}>
                        <Col sm={1} md={1}>
                            <BsReverseLayoutTextSidebarReverse/>
                        </Col>
                        <Col sm={2} md={2}>
                            <b id="task-font">
                                {task.taskname}
                            </b><br/>
                            <Button className="pill">
                                {task.tag}
                            </Button>
                        </Col>
                        <Col sm={2} md={2}>
                            <b id="task-font">
                                {`N${task.price}`}
                            </b>
                            <p id="task-price">
                                Task Price
                            </p>
                            <p id="task-font">
                                Delivery:<label id="task-price">{task.delivery}</label>
                            </p>
                        </Col>
                        <Col sm={3} md={3}>
                            <div className="user-details">
                                <img 
                                    className="avatar" 
                                    src={task.imageurl} 
                                    alt="user"
                                />
                                <div>
                                    <b className="name">{task.name}</b>
                                    <p className="assigned">Assigned to</p>
                                </div>
                            </div>
                        </Col>
                        <Col sm={2} md={2}>
                            <Button className="status">
                                <span className="dot"></span>
                                {task.status}
                            </Button>
                        </Col>
                        <Col sm={1} md={1}>
                            <MdMessage/>
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
                                <Dropdown.Item onClick={showEditModal}>
                                    Edit <MdModeEdit color="green"/>
                                </Dropdown.Item>
                                <Dropdown.Item onClick={confirm}>
                                   Delete <MdDeleteForever color="red"/>
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                            
                        </Col>
                    </Row> 
                </React.Fragment>
            )      
}

export default TaskArea
