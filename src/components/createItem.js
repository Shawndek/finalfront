import React from "react";
import { useState /* , useEffect */ } from "react";
import axios from "axios";

export default function createItem() {
 // const [uploadedItem] = useState(null);
  const [{ userid, category, title, text, compensation, comment, pic1 }, setFormState] = useState({
    title: "",
    text: "",
    author: "",
    pic1: "",
    category: "",
    compensation: "",
    comment: "",

  });

  const uploadItem =  /* useEffect(*/ ()  => {
    const id = crypto.randomUUID(); 
    const createItem = "http://localhost:3001/items/";
    axios
      .post(createItem, {
        itemid: id,
        userid: userid,
        title: title,
        text: text,
        pic1: pic1,
        category: category,
        compensation: compensation,
        comment: comment
      })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }/* , []); */

  const handleChange = (e) => {

/*     if (e.target.nodeName === "SELECT") {
      setFormState((prev) => ({
        ...prev,
        [e.target.name]: Array.from(
          e.target.selectedOptions,
          (option) => option.value
        ),
      }));
    } else {  */
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  /* }; */

  return (
    <div className="App row">
      <h2>Create an Item</h2>
      <div className="col">
      <form onSubmit={uploadItem}>
      <div className="row">
        <div className="d-flex col-3">
      <div className="col">
      <input
          type="text"
          placeholder="Title..."
          value={title}
          name="title"
          onChange={handleChange}
        />
        <br />
       <input
          type="text"
          placeholder="Author..."
          value={userid}
          name="author"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="img URL..."
          value={pic1}
          name="pic1"
          onChange={handleChange}
        />
        <textarea
        placeholder="add description..."
        name="text"
        value={text}
        onChange={handleChange}
        rows={20}
      />
        </div>
        <div className="col-3">
        <label>Category</label>
        <select name="category" value={category} onChange={handleChange}>
          <option value="service">service</option>
          <option value="product">product</option>
          <option value="second-hand">second hand</option>
        </select>
        <br />
                <label>Compensation</label>
        <select name="compensation" value={compensation} onChange={handleChange}>
          <option value="service">service</option>
          <option value="product">product</option>
          <option value="second-hand">second hand</option>
          <option value="free">free</option>
          <option value="other">other(specify)</option>
        </select>
        <input
          type="text"
          placeholder="comment on compensation..."
          value={comment}
          name="comment"
          onChange={handleChange}
        />
        </div>
        </div>
        </div>
 <div className="row-3">
        <br />
        <input type="submit" value="Upload" />
        </div> 
      </form>
      </div>
    </div>
  );
      }};
