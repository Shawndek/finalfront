import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Items from './Items';
import DropMenu from './Dropdown';
import MyMap from './pigeonMap';

const Home = () => {
  const [items, setItems] = useState([]);
  const [category, setCategory] = useState('all');
  const [toggle, setToggle] = useState(true);
  const handleSelect = (e) => {
    console.log(e);
    setCategory(e);
  };

  useEffect(() => {
    const getItem = `http://localhost:3001/items/`;
    axios
      .get(getItem)
      .then((res) => {
        console.log(res);
        setItems(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(items);

  const toggleHandler = (e) => {
    setToggle(!toggle);
    console.log(e.target.value);
  };

  return (
    <div className="d-flex row">
      <div>
        <fieldset>
          <div className="form-check form-switch">
            <input
              onChange={toggleHandler}
              className="form-check-input"
              type="checkbox"
              id="flexSwitchCheckDefault"
              value={toggle}
            />
            <label className="form-check-label" for="flexSwitchCheckDefault">
              Toggle Map
            </label>
          </div>
        </fieldset>
      </div>
      <DropMenu
        DropMenu={DropMenu}
        category={category}
        handleSelect={handleSelect}
      />
      {toggle ? (
        items.length > 0 && <Items items={items} category={category} />
      ) : (
        <MyMap />
      )}
    </div>
  );
};

export default Home;
