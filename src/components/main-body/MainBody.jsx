import React from 'react'
import './main-body.styles.css'
import { Row, Col } from 'react-bootstrap'

import FilterMenu from '../filter-menu/FilterMenu'
import TaskArea from '../task-area/TaskArea'
import TabsPagination from '../tabs-pagination/TabsPagination'

 const MainBody = ({showEditModal, confirm}) => {
    return (
        <React.Fragment>
            <Row className="row-margin">
                <Col sm={3} md={3}>
                    <FilterMenu/>
                </Col>
                <Col sm={9} md={9}>
                    <TabsPagination/>
                    <TaskArea showEditModal={showEditModal} confirm={confirm}/>
                </Col>
            </Row>
            
        </React.Fragment>
    )
}

export default MainBody
