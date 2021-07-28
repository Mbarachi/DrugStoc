import React from 'react'
import './custom-button.styles.css'
import {Button} from 'react-bootstrap'
import { BsPlus } from "react-icons/bs";

 const CustomButton = ({showModal}) => {
    return (
        <Button variant="primary" className="custom-btn" onClick={showModal}>
            <b>Add a new task</b> <BsPlus size="25"/>
        </Button>
    )
}

export default CustomButton
