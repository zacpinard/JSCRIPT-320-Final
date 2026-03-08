import React, {useEffect, useState} from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { collection, getDocs, onSnapshot, query, orderBy, limit } from "firebase/firestore";
import 'leaflet/dist/leaflet.css';
import './App.css';
import { TiledMapLayer } from 'esri-leaflet';
//import PolluterProfiles from './PolluterProfiles';
import { db } from '../db'

export default function CreateMap() {
  const [mapPoints, setMapPoints] = useState([])
  const centerPosition = [47, -120]; // Default coordinates (latitude, longitude)

  useEffect(() => {
    const fetchedMapPoints = []
    const getMapPointsData = async () => {
      const querySnapshot = await getDocs(collection(db, "polluters"));
      querySnapshot.forEach((doc) => {
        // console.log(doc.data)
        fetchedMapPoints.push({
          data: doc.data(),
          id: doc.id
        })
        // doc.data() is never undefined for query doc snapshots
        console.log("mapPoint: ", doc.id, " => ", doc.data());
      });

      setMapPoints(fetchedMapPoints)
      //setIsLoading(false)
    }

    getMapPointsData()
  }, [])
  return (
    <MapContainer center={centerPosition} zoom={6} scrollWheelZoom={false} className="leaflet-container">
      <TileLayer 
        url='https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}'
        attribution="Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ"
      />
      <div>
        {mapPoints.map((mapPoint) => {
          return (
            <Marker key={mapPoint.id} position={[mapPoint.data.latitude, mapPoint.data.longitude]}>
              <Popup>
                A pretty CSS3 popup
              </Popup>
            </Marker>
          )
        })}
      </div>
      <Marker position={centerPosition}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
}

const natGeoTile = 'https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}'