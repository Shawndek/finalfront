import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'

function DropMenu({handleSelect, category}) {
    return (
    <div className="App container d-flex row">
      <div className="col">
    <DropdownButton
      title="Select Category"
      id="dropdown-menu-align-right col-2"
      onSelect={handleSelect}
        >
              <Dropdown.Item eventKey="All">all</Dropdown.Item>
              <Dropdown.Item eventKey="Service">latest</Dropdown.Item>
              <Dropdown.Item eventKey="Product">classics</Dropdown.Item>
              <Dropdown.Item eventKey="second hand">animals</Dropdown.Item>
      </DropdownButton>
      </div>
      <div className="d-flex col-10 justify-content-start">
      <h4>You selected {category}</h4>
      </div>
    </div>
  );
}
export default DropMenu;