import React from "react";
import { useState /* , useEffect */ } from "react";
import axios from "axios";


export default function Item() {
  const API_URL = process.env.BACKEND_API
  const createItem = `${API_URL}items/`;
  const [uploadedItem] = useState(null);
  const [{ userid, category, title, text, compensation, comment, pic1 }, setFormState] = useState({
    itemid: "",
    userid: "",
    title: "",
    text: "",
    pic1: "",
    category: "",
    compensation: "",
    comment: "",
  });

  const uploadItem = /* useEffect( */ (e) => { e.preventDefault();
  const uuid = crypto.randomUUID()
    axios
      .post(createItem, {
        itemid: uuid,
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
        console.log(error.message);
      });
  }; /*, [] ) */

  const handleChange = (e) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const ImageUpload = (e) => { e.preventDefault();
  const formData = new FormData()
    console.log(e.target[0].files)
    formData.append('pic1', e.target[0].files[0]);
    axios 
      .post(`http://localhost:3001/upload-pic`, formData)  
      .then(res => (console.log(res)))
      .catch(err => (console.log(err)))
  };

  return (
    <div className="App row">
      <h2>Create an Item</h2>
      <div className="col">

        <form onSubmit = {ImageUpload}> 
          <div class="form-group">
            <label for="pic">Profile pic:</label>
            <input type="file" className="form-control" name="pic1" />
          </div>
          <button type="submit" className="btn btn-primary mt-3">Upload Image</button>
        </form>
          <br />

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
                  name="userid"
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
      {uploadedItem && (
        <img
          src={uploadedItem.pic1}
          width="300"
          alt={uploadedItem.title}
        />
      )}
      </div>
    </div>
  );
}
