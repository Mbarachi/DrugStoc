import React from 'react'
import './main-body.styles.css'
import { Row, Col } from 'react-bootstrap'

import FilterMenu from '../filter-menu/FilterMenu'
import TaskArea from '../task-area/TaskArea'
import TabsPagination from '../tabs-pagination/TabsPagination'

 const MainBody = ({showEditModal, confirm, tasks}) => {
    return (
        <React.Fragment>
            <Row className="row-margin">
                <Col sm={3} md={3}>
                    <FilterMenu tasks={tasks}/>
                </Col>
                <Col sm={9} md={9}>
                    <TabsPagination/>
                    <TaskArea 
                        showEditModal={showEditModal} 
                        confirm={confirm}
                        tasks={tasks}
                    />
                </Col>
            </Row>
            
        </React.Fragment>
    )
}

export default MainBody
