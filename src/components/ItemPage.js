import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ItemPage = () => {
  const { id } = useParams();
  console.log(id)
  const [item, setItem] = useState(null);

  useEffect(() => {
    const getItem = async () => {
      try {
        const { data } = await axios.get(
          `${process.env.REACT_APP_BACKEND_API}items/${id}`
        );
        setItem(data);
      } catch (error) {
        console.log(error);
      }
    };
    getItem();
  }, [id]);

  return item ? <div>{item.title}</div> : 'Loading.....';
};

export default ItemPage;
