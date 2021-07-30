import React from "react";
import { useState } from "react";
import { Form } from "react-bootstrap";
import "./filter-menu.styles.css";


const FilterMenu = ({ filterTasks, filterTasksByprice }) => {
    const [checkedVal, setcheckedVal] = useState(null);

    const getRange = (str) => {
        return str.split("-");
    }

    const handleCheck = (val) => {
        const currentChecked = checkedVal === val ? null : val;
        if(currentChecked) {
            const range = getRange(currentChecked);
            filterTasksByprice(range[0], range[1]);
            console.log(range)
        }
        setcheckedVal(currentChecked)
    }

    const renderPriceFilter = (value) => {
      console.log(value)
    return (
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Less than 100" checked={checkedVal === "Less than 100"}  onClick={() => renderPriceFilter("Less than 100")} />
        <Form.Check type="checkbox" label="N100 - N300" checked={checkedVal === "N100 - N300"} onClick={() => renderPriceFilter("N100 - N300")} />
        <Form.Check type="checkbox" label="N301 - N900" checked={checkedVal === "N301 - N900"} onClick={() => renderPriceFilter("N301 - N900")} />
        <Form.Check type="checkbox" label="bb Above N900" checked={checkedVal === "Above N900"} onClick={() => renderPriceFilter("Above N900")} />
      </Form.Group>
    );
  };
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
        <Form.Check type="checkbox" label="Less than 100" checked={checkedVal === "0-100"}  onClick={() => handleCheck("0-100")} />
        <Form.Check type="checkbox" label="N100 - N300" checked={checkedVal === "100-300"} onClick={() => handleCheck("100-300")} />
        <Form.Check type="checkbox" label="N301 - N900" checked={checkedVal === "300-900"} onClick={() => handleCheck("300-900")} />
        <Form.Check type="checkbox" label="Above N900" checked={checkedVal === "900-100000"} onClick={() => handleCheck("900-100000")} />
      </Form.Group>

      {/* {renderPriceFilter(checkedVal)} */}
    </div>
  );
};

export default FilterMenu;
