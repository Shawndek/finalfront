import React from 'react';
import { Map, Marker } from 'pigeon-maps';

export default function MyMap() {
  return (
    <Map height={450} defaultCenter={[49.79, 9.9]} defaultZoom={8}>
      <Marker width={50} anchor={[49.79, 9.9]} />
      <Marker width={50} anchor={[50.01, 10.9]} />
      <Marker width={50} anchor={[49.01, 10.9]} />
      <Marker width={50} anchor={[50.01, 8.8]} />
    </Map>
  );
}
