import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './App.css';
import { TiledMapLayer } from 'esri-leaflet';
import PolluterProfiles from './polluterProfiles';
import { auth, db } from '../db'

export default function CreateMap() {
  
  
  const position = [47, -120]; // Default coordinates (latitude, longitude)
  return (
    <MapContainer center={position} zoom={6} scrollWheelZoom={false} className="leaflet-container">
      <TileLayer 
        url='https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}'
        attribution="Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ"
      />
      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
}

const tile = 'https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}'