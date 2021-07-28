import React from 'react'
import './custom-button.styles.css'
import {Button} from 'react-bootstrap'
import { BsPlus } from "react-icons/bs";

 const CustomButton = ({showAddModal}) => {
    return (
        <Button variant="primary" className="custom-btn" onClick={showAddModal}>
            <b>Add a new task</b> <BsPlus size="25"/>
        </Button>
    )
}

export default CustomButton
