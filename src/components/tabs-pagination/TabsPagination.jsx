import React from 'react'
import { Row, Col, Tab, Tabs } from 'react-bootstrap'
import ReactPaginate from 'react-paginate'

 const TabsPagination = ({pageCount, changePage}) => {
    return (
        <Row>
            <Col sm={10}>
                <Tabs defaultActiveKey="profile" className="mb-3">
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
                <ReactPaginate
                    previousLabel={"Prev"}
                    nextLabel={"Next"}
                    pageCount={pageCount}
                    onPageChange={changePage}
                    containerClassName={"paginationBttns"}
                    previousLinkClassName={"previousBttn"}
                    nextLinkClassName={"nextBttn"}
                    disabledClassName={"paginationDisabled"}
                    // activeClassName={"pagintionActive"}
                />
            </Col>
        </Row>
    )
}

export default TabsPagination 