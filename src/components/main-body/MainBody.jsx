import React from "react";
import { useState } from "react";
import "./main-body.styles.css";
import { Row, Col } from "react-bootstrap";

import FilterMenu from "../filter-menu/FilterMenu";
import TaskArea from "../task-area/TaskArea";
import TabsPagination from "../tabs-pagination/TabsPagination";

const MainBody = ({
  showEditModal,
  confirm,
  tasks,
  deleteTask,
  filterTasks,
  filterTasksByprice,
}) => {
  const filtered = tasks.filter(
    (task) => task.isVisible && task.isPriceVisible
  );
  const [pageNumber, setPageNumber] = useState(0);

  const tasksPerPage = 6;
  const pagesVisited = pageNumber * tasksPerPage;

  const pageCount = Math.ceil(filtered.length / tasksPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const displayTasks = filtered
    .slice(pagesVisited, pagesVisited + tasksPerPage)
    .map((task) => {
      if (task.isVisible && task.isPriceVisible) {
        return (
          <TaskArea
            key={task.id}
            showEditModal={showEditModal}
            confirm={confirm}
            task={task}
            tasks={filtered}
            deleteTask={deleteTask}
          />
        );
      }
    });

  return (
    <React.Fragment>
      <Row className="row-margin">
        <Col sm={3} md={3}>
          <FilterMenu
            tasks={tasks}
            filterTasks={filterTasks}
            filterTasksByprice={filterTasksByprice}
          />
        </Col>
        <Col sm={9} md={9}>
          <TabsPagination pageCount={pageCount} changePage={changePage} />
          {displayTasks}
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default MainBody;
