import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function CreateItem() {
  const [imgURL, setImgURL] = useState();
  const navigate = useNavigate();

  const ImageUpload = (e) => {
    e.preventDefault();
    const formData = new FormData();
    console.log(e.target[0].files);
    formData.append('pic1', e.target[0].files[0]);
    axios
      .post(`${process.env.REACT_APP_BACKEND_API}upload-pic`, formData)
      .then((res) => setImgURL(res.data.result.Location))
      .catch((err) => console.log(err));
  };
  console.log(imgURL);

  const [uploadedItem] = useState(null);
  const [{ category, title, text, compensation, comment }, setFormState] =
    useState({
      itemid: '',
      title: '',
      text: '',
      pic1: '',
      category: '',
      compensation: '',
      comment: '',
    });

  const handleSubmit = (e) => {
    e.preventDefault();
    const uuid = crypto.randomUUID();
    axios
      .post(
        `${process.env.REACT_APP_BACKEND_API}items`,
        {
          itemid: uuid,
          title: title,
          text: text,
          pic1: imgURL,
          category: category,
          compensation: compensation,
          comment: comment,
        },
        {
          headers: {
            authorization: localStorage.getItem('token'),
          },
        }
      )
      .then((res) => {
        const newItem = res.data;
        navigate(`/item/${newItem.itemid}`);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleChange = (e) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="App row containerMargin">
      <h2>Create an Item</h2>
      <div className="col">
        <form onSubmit={ImageUpload}>
          <div className="form-group">
            <label for="pic">
              <h5> upload image:</h5>
            </label>
            <input type="file" className="form-control" name="pic1" />
          </div>
          <button type="submit" className="btn btn-primary mt-3">
            Upload Image
          </button>
        </form>

        <div>
          <img src={imgURL} width="10%" alt="" />
        </div>
        <br />

        <form onSubmit={handleSubmit}>
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
                <input
                  type="text"
                  placeholder="short description..."
                  value={comment}
                  name="comment"
                  onChange={handleChange}
                />
                <textarea
                  placeholder="add description..."
                  name="text"
                  value={text}
                  onChange={handleChange}
                  rows={7}
                />
              </div>
              <div className="col-3">
                <label>Category</label>
                <select
                  name="category"
                  value={category}
                  onChange={handleChange}
                >
                  <option value="service">service</option>
                  <option value="product">product</option>
                  <option value="second-hand">second hand</option>
                </select>
                <br />

                <label>Compensation</label>
                <select
                  name="compensation"
                  value={compensation}
                  onChange={handleChange}
                >
                  <option value="service">service</option>
                  <option value="product">product</option>
                  <option value="second-hand">second hand</option>
                  <option value="free">free</option>
                  <option value="other">other(specify)</option>
                </select>
              </div>
            </div>
          </div>
          <div className="row-3">
            <br />
            <input
              className="btn-primary"
              type="submit"
              value="2. Create Item"
            />
          </div>
        </form>
        {uploadedItem && (
          <img src={uploadedItem.pic1} width="300" alt={uploadedItem.title} />
        )}
      </div>
    </div>
  );
}
