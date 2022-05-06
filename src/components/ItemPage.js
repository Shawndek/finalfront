import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';

const ItemPage = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();

  // getting Itemdata from backend
  useEffect(() => {
    const getItem = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(
          `${process.env.REACT_APP_BACKEND_API}items/${id}`
        );
        setItem(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    getItem();
  }, [id]);

  if (loading) return 'Loading...';
  return item ? (
    <div className="row">
      {user?.userid === item.userid ? (
        <button>You are the owner</button>
      ) : (
        <button>Bid for this item</button>
      )}
      <div className="col-6h">
        <h2>{item.title}</h2>
        <img src={item.pic1} alt="" width="20%" />
        <p>{item.text}</p>
        <div className="card-body">
          <p className="card-text">
            <b>By User {[item.userid]}</b>
          </p>
          <p className="card-text">
            <b>Category: </b>
            {[item.category]}
          </p>
          <p className="card-text">
            <b>Compensation:</b>
            <br></br> {[item.compensation]}
          </p>
          <p className="card-text">
            <b>Comment on compensation:</b> <br></br>
            {[item.comment]}
          </p>
        </div>
        <div className="col-md-6h">
          {/* if userid === the same as the itemOwners: display the suggestion of
          the bidder, an accept (send accept to the bidder) and a 
          reject button (send reject to the bidder) */}
        </div>
      </div>
    </div>
  ) : (
    'Oops we couldnt fine that item'
  );
};

export default ItemPage;
