import React from "react"
import './header.styles.css'
import { Navbar } from "react-bootstrap"
import CustomButton from "../custom-button/CustomButton"

 const Header = () => {
    return (
        <div className="header">
                <Navbar.Brand href="#">
                    <img
                        src={require('../../assets/images/drugstoc.png')}
                        width="173"
                        height="65"
                        alt="DrugStoc"
                    />
                </Navbar.Brand>
                <span>
                    <CustomButton/>
                </span>
        </div>
    )
}

export default Header 
