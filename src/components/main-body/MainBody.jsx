import React from 'react'
import './main-body.styles.css'
import { Row, Col } from 'react-bootstrap'

import FilterMenu from '../filter-menu/FilterMenu'
import TaskArea from '../task-area/TaskArea'
import TabsPagination from '../tabs-pagination/TabsPagination'

 const MainBody = () => {
    return (
        <React.Fragment>
            <Row className="row-margin">
                <Col sm={3}>
                    <FilterMenu/>
                </Col>
                <Col sm={9}>
                    <TabsPagination/>
                    <TaskArea/>
                </Col>
            </Row>
            
        </React.Fragment>
    )
}

export default MainBody
