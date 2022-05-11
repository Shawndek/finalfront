import React, { useState } from 'react';
import ReactMapGL from 'react-map-gl';

const MyMap = () => {
  //const mapAccessToken = REACT_APP_MAPBOX_ACCESS_TOKEN
  const [viewport, setViewport] = useState({
    latitude: 51.09,
    longitude: 10.5,
    zoom: 8,
  });

  return (
    <ReactMapGL
      mapboxApiAccessToken={
        'pk.eyJ1Ijoic2hhd25kZWsiLCJhIjoiY2wzMGN2OXVqMDA3bjNqcW9saXk3OG0wNSJ9.ctN7sNGxq0Hona0_BM7AWg'
      }
      {...viewport}
      onViewportChange={(newView) => setViewport(newView)}
    ></ReactMapGL>
  );
};
export default MyMap;
