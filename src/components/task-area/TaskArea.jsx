import React from 'react'
import './task-area.styles.css'
import { Row, Col } from 'react-bootstrap'
import {BsReverseLayoutTextSidebarReverse} from 'react-icons/bs'


 const TaskArea = () => {
    return (
        <Row className="rectangle">
            <Col md={1}>
                <BsReverseLayoutTextSidebarReverse/>
            </Col>
            <Col md={2}>
                <b id="task-name">
                    Increase confidence with TrustPilots reviews
                </b>
            </Col>
            <Col md={2}>
                <b id="task-name">
                    N500.00
                </b>
                <p id="task-price">
                    Task Price
                </p>
                <p id="task-name">Delivery:<label id="task-price">within 3 days</label></p>
            </Col>
            <Col md={4}>
                <div className="user-details">
                    <img className="avatar" src={require('../../assets/images/avatar.png')} alt="Avatar"/>
                    <b className="name">Adamu Musa</b>
                </div>
            </Col>
            <Col sm={2}>
                hello
            </Col>
        </Row> 
    )      
}

export default TaskArea
