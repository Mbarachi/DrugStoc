import React from 'react'
import './search-bar.styles.css'
import { InputGroup,FormControl, Row, Col } from 'react-bootstrap'
import {BsSearch, BsFilterLeft} from 'react-icons/bs'

 const SearchBar = ({sortTasks, flipSort}) => {
    return (
        <Row>
            <Col>
                <InputGroup size="lg">
                    <InputGroup.Text className="icon-bg">
                        <BsSearch/>
                    </InputGroup.Text>
                    <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
                    <InputGroup.Text className="icon-bg">
                        <span 
                            style={{fontSize:"15px"}}>
                            Sort by
                        </span> 
                        <BsFilterLeft onClick={() => flipSort()}/>
                        <select onChange={(e) => sortTasks(e.target.value)}>
                            <option value="">none</option>
                            <option value="price">Price</option>
                            <option value="alphabet">Alphabetically</option>
                        </select>
                    </InputGroup.Text>
                </InputGroup>
            </Col>
            
        </Row>
    )
}

export default SearchBar