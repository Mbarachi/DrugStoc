import React from 'react'
import './main-body.styles.css'
import { Row, Col,Tab, Tabs } from 'react-bootstrap'
import FilterMenu from '../filter-menu/FilterMenu'

 const MainBody = () => {
    return (
        <Row className="row-margin">
            <Col sm={3}>
                <FilterMenu/>
            </Col>
            <Col sm={9}>
                <Row>
                    <Col sm={10}>
                    <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
                        <Tab eventKey="active" title="Active Task(2)">
                            {/* <Sonnet /> */}
                        </Tab>
                        <Tab eventKey="complete" title="Completed(1)">
                            {/* <Sonnet /> */}
                        </Tab>
                        <Tab eventKey="archive" title="Archived(6)">
                            {/* <Sonnet /> */}
                        </Tab>
                        <Tab eventKey="close" title="Closed(0)">
                            {/* <Sonnet /> */}
                        </Tab>
                    </Tabs>
                    </Col>
                    <Col sm={2}>
                        Pagination
                    </Col>

                </Row>
            
            </Col>
        </Row>
    )
}

export default MainBody
