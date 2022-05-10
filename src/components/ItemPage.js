import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import { render } from '@testing-library/react';

const ItemPage = () => {
  const { id } = useParams();
  const [bids, setBids] = useState(null);
  const [item, setItem] = useState(null);
  const [offer, setOffer] = useState(null);
  const [loading, setLoading] = useState(false);
  const [bidState, setBidState] = useState();
  const { user } = useAuth();
  const acceptBtn = document.getElementById('acceptBtn');
  const rejectBtn = document.getElementById('rejectBtn');
  const [isActive, setActive] = useState(false);
  const [{ bid_text }, setFormState] = useState({
    item_id: '',
    bidder_id: '',
    bid_text: '',
    bid_status: '',
  });

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

    const getItemBids = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(
          `${process.env.REACT_APP_BACKEND_API}bids/${id}`,
          {
            headers: {
              Authorization: localStorage.getItem('token'),
            },
          }
        );
        setBids(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    getItemBids();
  }, [id]);

  // posting a Bid
  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(user);
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_BACKEND_API}bids`,
        {
          item_id: id,
          bidder_id: user.userid,
          bid_text: bid_text,
        },
        {
          headers: {
            authorization: localStorage.getItem('token'),
          },
        }
      );
      setOffer(data);
    } catch (error) {
      console.log(error.message);
    }
    console.log(offer);
    setFormState({
      bidder_id: '',
      bid_text: '',
    });
  };
  const handleChange = (e) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const acceptBid = (e) => {
    console.log('name bid id', e.target.name);
    setActive(!isActive);
    axios.post(
      `${process.env.REACT_APP_BACKEND_API}bids/${id}`,
      {
        bid_id: e.target.name,
        bid_status: 1,
      },
      {
        headers: {
          authorization: localStorage.getItem('token'),
        },
      }
    );
  };
  const rejectBid = (e) => {
    axios.post(
      `${process.env.REACT_APP_BACKEND_API}bids/${id}`,
      {
        bid_id: e.target.name,
        bid_status: 2,
      },
      {
        headers: {
          authorization: localStorage.getItem('token'),
        },
      }
    );
  };

  const mapBids = () => {
    if (bids)
      return (
        <ul>
          {bids.map((bid) => {
            return (
              <div key={bid.bid_id}>
                <div className="alert alert-dismissible alert-primary">
                  <h5>
                    {bid.bid_status === 2
                      ? 'already rejected'
                      : `You accepted the following offer: ${bid.bid_text}`}
                  </h5>{' '}
                  <div className="row d-flex justify-content-around">
                    <div className="col-3">
                      <button
                        className=""
                        id="acceptBtn"
                        name={bid.bid_id}
                        onClick={acceptBid}
                        disabled={bid.bid_status === 2 ? true : false}
                      >
                        Accept
                      </button>
                    </div>
                    <div className="col-3">
                      <button
                        id="rejectBtn"
                        name={bid.bid_id}
                        onClick={rejectBid}
                        disabled={bid.bid_status === 2 ? true : false}
                      >
                        Reject
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </ul>
      );
  };

  if (loading) return 'Loading...';
  return item ? (
    <div className="row d-flex justify-content-around">
      <div className="col-4 alert alert-dismissible alert-secondary">
        <h2>{item.title}</h2>
        <img src={item.pic1} alt="" width="20%" />
        <p>{item.text}</p>
        <div className="card-body ">
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
      </div>
      <div className="col-3 alert alert-dismissible alert-secondary">
        {user?.userid === item.userid ? (
          <div className="row d-flex ">
            <h4>You have the following bids for your post:</h4>
            {mapBids()}
          </div>
        ) : (
          <div className="col">
            <form onSubmit={handleSubmit}>
              <textarea
                placeholder="add description..."
                name="bid_text"
                value={bid_text}
                onChange={handleChange}
                rows={7}
              />
              <input type="submit" value="Bid for this item" />
            </form>
          </div>
        )}
        {bids &&
          bids
            .filter((bid) => bid.bidder_id === user.userid.toString())
            .map((bid) => (
              <li>
                {bid.bid_text} |{' '}
                {bid.bid_status === 0
                  ? 'Pending'
                  : bid.bid_status === 1
                  ? 'Accepted | contact the owner now'
                  : 'Rejected'}
              </li>
            ))}
      </div>
    </div>
  ) : (
    'Oops we couldnt fine that item'
  );
};
export default ItemPage;
