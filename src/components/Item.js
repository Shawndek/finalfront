import React from "react";

const Item = ({ item }) => {
  console.log(item);
  const { UserID, Category, Title, Text, Compensation, Comment, pic1 } = item;
  return (
<div className="row">
  <div className="col mx-3 col-sm-6">
    <div className="card mb-3" style={{width: 250}}>
  <h3 className="card-header">{Title}</h3>
  <img src={pic1} alt={Title} className="d-block user-select-none" width="100%" height="300" />
  <div className="card-body">
    <h6 className="card-subtitle text-muted">{Comment}</h6>
  </div>
    <div className="card-body">
    <p className="card-text">{[Category]}</p>
  </div>
     </div>
     </div>
     </div>

  );
};

export default Item;
