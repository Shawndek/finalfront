import { useAuth } from '../context/AuthContext';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Items from './Items';
import DropMenu from './Dropdown';

const MyItems = () => {
  const { userid } = useParams();
  const [items, setItems] = useState([]);
  const [category, setCategory] = useState('all');
  const [loading, setLoading] = useState(false);
  const { userData } = useAuth();
  const token = localStorage.getItem('token');

  const handleSelect = (e) => {
    console.log(e);
    setCategory(e);
  };

  useEffect(() => {
    const getMyItems = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(
          `${process.env.REACT_APP_BACKEND_API}items/MyItems/${userData.userid}`,
          {
            headers: {
              Authorization: token,
            },
          }
        );
        setItems(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    getMyItems();
  }, [userid]);

  console.log(items);
  return (
    <div className="d-flex row">
      <DropMenu
        DropMenu={DropMenu}
        category={category}
        handleSelect={handleSelect}
      />
      <div className="d-flex row">
        <div className="p-2">
          <div className="d-flex flex-row">
            {items.length > 0 && <Items items={items} category={category} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyItems;
