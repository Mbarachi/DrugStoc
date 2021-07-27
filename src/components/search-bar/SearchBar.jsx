import React from 'react'
import './search-bar.styles.css'
import { InputGroup,FormControl, Row } from 'react-bootstrap'
import {BsSearch, BsFilterLeft} from 'react-icons/bs'

 const SearchBar = () => {
    return (
        <Row>
            <InputGroup size="lg">
                <InputGroup.Text className="icon-bg">
                    <BsSearch/>
                </InputGroup.Text>
                <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
                <InputGroup.Text className="icon-bg">
                    <span style={{fontSize:"15px"}}>Sort by</span> <BsFilterLeft/>
                </InputGroup.Text>
            </InputGroup>
        </Row>
    )
}

export default SearchBar