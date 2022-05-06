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
    <div className="row">
      <div className="col mx-3 col-sm-6">
        <div
          className="card mb-3"
          style={{ width: 250, height: 300, marginTop: 30 }}
        >
          <h4 className="card-header">{title}</h4>
          <a href={`./item/${itemid}`}>
            <img
              src={pic1}
              alt={title}
              className="d-block user-select-none"
              width="90%"
              height="90%"
            />
          </a>
          <div className="card-body">
            <h6 className="card-subtitle">
              <i>{text}</i>
            </h6>
          </div>
          <div className="card-body">
            <div className="card-text">
              <b>By User {[username]}</b>
            </div>
            <div className="card-text">
              <b>Category: </b>
              {[category]}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
