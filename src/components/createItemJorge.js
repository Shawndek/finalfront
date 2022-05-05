import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const CreatePost = () => {
  const navigate = useNavigate();
  const [imgURL, setImgURL] = useState();

  const ImageUpload = (e) => { e.preventDefault();
  const formData = new FormData()
    console.log(e.target[0].files)
    formData.append('pic1', e.target[0].files[0]);
    axios 
      .post(`${process.env.REACT_APP_BACKEND_API}upload-pic`, formData)  
      .then(res => (setImgURL(res.data.result.Location)))
      .catch(err => (console.log(err)))
  };

console.log(imgURL)
  const [{ title, author, image, body }, setFormState] = useState({
    itemid: "",
    userid: "",
    title: "",
    text: "",
    pic1: "",
    category: "",
    compensation: "",
    comment: "",
  });

  const handleInputChange = e => setFormState(prev => ({ ...prev, [e.target.id]: e.target.value }));

  const handleSubmit = async e => {
    const uuid = crypto.randomUUID()
    try {
      e.preventDefault();
    // if (!title || !image || !body) return alert('All fields are required');
      const data = JSON.stringify({ username, category, title, text, compensation, comment});
      const { data: newPost } = await axios.post(`${process.env.REACT_APP_BACKEND_API}/items`, data, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: localStorage.getItem('token')
        }
      });
      navigate(`/post/${newPost._id}`);

      setFormState({
        itemid: uuid,
        username: username,
        title: title,
        text: text,
        pic1: "",
        category: "",
        compensation: "",
        comment: "",
      });
    } catch (error) {
      toast.error(error.response?.data.error || error.message);
    }
  };

  return (
    <div className="App row">
      <h2>Create an Item</h2>
      <div className="col">

        <form onSubmit = {ImageUpload}> 
          <div className="form-group">
            <label for="pic"><h5> upload image:</h5></label>
            <input type="file" className="form-control" name="pic1" />
          </div>
          <button type="submit" className="btn btn-primary mt-3">Upload Image</button>
        </form>
        
        <div>
        <img src={imgURL} width="10%"/>
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
                  onChange={handleInputChange}
                />
                <br />
                <input
                  type="text"
                  placeholder="Author..."
                  value={userid}
                  name="userid"
                  onChange={handleInputChange}
                />
                <textarea
                  placeholder="add description..."
                  name="text"
                  value={text}
                  onChange={handleInputChange}
                  rows={7}
                />
              </div>
              <div className="col-3">
                <label>Category</label>
                <select name="category" value={category} onChange={handleInputChange}>
                  <option value="service">service</option>
                  <option value="product">product</option>
                  <option value="second-hand">second hand</option>
                </select>
                <br />

                <label>Compensation</label>
                <select name="compensation" value={compensation} onChange={handleInputChange}>
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
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>
          <div className="row-3">
            <br />
            <input type="submit" value="Upload" />
          </div> 
        </form>
{/*       {uploadedItem && (
        <img
          src={uploadedItem.pic1}
          width="300"
          alt={uploadedItem.title} 
        />
      )}*/}
      </div>
    </div>
  );
}
export default CreatePost;