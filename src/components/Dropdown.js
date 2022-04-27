import React from 'react';
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
              <Dropdown.Item eventKey="all">all</Dropdown.Item>
              <Dropdown.Item eventKey="service">service</Dropdown.Item>
              <Dropdown.Item eventKey="product">product</Dropdown.Item>
              <Dropdown.Item eventKey="second-hand">second hand</Dropdown.Item>
      </DropdownButton>
      </div>
      <div className="d-flex col-10 justify-content-start mt-1">
      <h4>You selected {category}</h4>
      </div>
    </div>
  );
}
export default DropMenu;