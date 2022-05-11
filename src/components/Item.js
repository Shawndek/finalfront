import React from 'react';

const Item = ({ item }) => {
  console.log(item);
  const {
    itemid,
    username,
    category,
    title,
    text,
    compensation,
    comment,
    pic1,
  } = item;
  return (
    /*     <div className="row border">
      <div className="col mx-3 col-sm-6"> */
    <div
      className="card mx-2 my-3"
      style={{ width: 250, minheight: 300, marginTop: 30 }}
    >
      <h4 className="card-header">{title}</h4>
      <a href={`../item/${itemid}`}>
        <img src={pic1} alt={title} className="cardImg" />
      </a>
      <div className="card-body">
        <h6 className="card-subtitle">
          <i>{comment}</i>
        </h6>
      </div>
      <div className="card-body">
        <div className="card-text">
          <b>By User {[username]}</b>
        </div>
        <div className="card-text">
          <b>Category: </b>
          {[category]} <br></br>
          <b>What you could offer me: </b>
          {compensation}
        </div>
      </div>
    </div>
  );
};

export default Item;
