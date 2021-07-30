import React from 'react'
import { Form } from 'react-bootstrap'
import './filter-menu.styles.css'

 const FilterMenu = ({tasks, filterTasks}) => {

    // const filterTasks = ({checked, value}) => {
    //     console.log(checked)
    //     console.log(value)
    //     if(!!checked) {
    //         tasks.forEach(task => {
    //             if(task.tag === value){
    //                 task.isVisible = false
    //             }
    //             return tasks
    //         })

    //         return tasks.filter(task => task.isVisible !== true)

    //     }
    // }

    return (
        <div className="filter">
            <b>Tags</b>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check 
                    type="checkbox" 
                    label="Custom Task" 
                    value="Custom Task"
                    onChange={(e) => filterTasks(e.target)}
                />
                <Form.Check 
                    type="checkbox" 
                    label="Marketing & Sales" 
                    value="Marketing & Sales"
                    onChange={(e) => filterTasks(e.target)}
                />

                <Form.Check 
                    type="checkbox" 
                    label="Integrations" 
                    value="Integrations"
                    onChange={(e) => filterTasks(e.target)}
                />
                <Form.Check 
                    type="checkbox" 
                    label="Optimization" 
                    value="Optimization"
                    onChange={(e) => filterTasks(e.target)}
                />
                <Form.Check 
                    type="checkbox" 
                    label="Deployment" 
                    value="Deployment"
                    onChange={(e) => filterTasks(e.target)}
                />
                <Form.Check 
                    type="checkbox" 
                    label="Testing" 
                    value="Testing"
                    onChange={(e) => filterTasks(e.target)}
                />
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
