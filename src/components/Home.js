import React, { useState, useEffect  } from "react";
import axios from "axios";
import Items from "./Items";
import DropMenu from "./Dropdown";

const Home = () => {
  const [items, setItems] = useState([]);
  const [category,setCategory]=useState('all');
  const handleSelect=(e)=>{
    console.log(e);
    setCategory(e)
  }

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
    return (

<div className="d-flex row">
    <DropMenu DropMenu ={ DropMenu } category = {category} handleSelect = {handleSelect} />
  <div className="d-flex row">
  <div className="p-2">
  <div className="d-flex flex-row">
  {items.length>0 &&<Items items={items} category = {category}/>}
   </div>
</div>
</div>
</div>
    );
  }

export default Home;