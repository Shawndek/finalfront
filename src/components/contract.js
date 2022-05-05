import React, { useState } from "react";


const Item = ({ item }) => {

  const { userid, category, title, text, compensation, comment, pic1 } = item;
  
  
  return (
<div className="row">
  <div className="col mx-3 col-sm-6">
    <div className="card mb-3" style={{width: 250}}>
  <h4 className="card-header">{title}</h4>
  <img src={pic1} alt={title} className="d-block user-select-none" width="90%" height="90%" />
  <div className="card-body">
    <h6 className="card-subtitle"><i>{text}</i></h6>
  </div>
    <div className="card-body">
    <p className="card-text"><b>By User {[userid]}</b></p>
    <p className="card-text"><b>Category: </b>{[category]}</p>
    <p className="card-text"><b>Compensation:</b><br></br> {[compensation]}</p>
    <p className="card-text"><b>Comment on compensation:</b> <br></br>{[comment]}</p>
  </div>
     </div>
     </div>
     </div>

  );
};

export default Item;
