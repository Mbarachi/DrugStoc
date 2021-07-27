import React from 'react'
import { Form } from 'react-bootstrap'
import './filter-menu.styles.css'

 const FilterMenu = () => {
    return (
        <div className="filter">
            <b>Tags</b>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Custom Task" />
                <Form.Check type="checkbox" label="Marketing & Sales" />
                <Form.Check type="checkbox" label="Integrations" />
                <Form.Check type="checkbox" label="Optimization" />
                <Form.Check type="checkbox" label="Deployment" />
                <Form.Check type="checkbox" label="Testing" />
            </Form.Group>
            <b>Task Price Range</b>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Less than N100" />
                <Form.Check type="checkbox" label="N100 - N300" />
                <Form.Check type="checkbox" label="N301 - N900" />
                <Form.Check type="checkbox" label="Above N900" />
            </Form.Group>
        </div>
            
    )
}

export default FilterMenu
