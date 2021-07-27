import React from 'react'
import './search-bar.styles.css'
import { InputGroup,FormControl } from 'react-bootstrap'
import {BsSearch, BsFilterLeft} from 'react-icons/bs'

 const SearchBar = () => {
    return (
        <React.Fragment>
            <InputGroup size="lg">
                <InputGroup.Text className="icon-bg">
                    <BsSearch/>
                </InputGroup.Text>
                <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
                <InputGroup.Text className="icon-bg">
                    <span style={{fontSize:"15px"}}>Sort by</span> <BsFilterLeft/>
                </InputGroup.Text>
            </InputGroup>
        </React.Fragment>
    )
}

export default SearchBar