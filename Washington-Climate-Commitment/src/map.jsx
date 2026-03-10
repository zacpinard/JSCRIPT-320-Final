import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { collection, getDocs } from "firebase/firestore";
import 'leaflet/dist/leaflet.css';
import './App.css';
import { db } from '../db'
import coveredIcon from './assets/covered_icon.png'
import eiteIcon from './assets/eite_icon.png'

export default function CreateMap() {
  const [mapPoints, setMapPoints] = useState([])
  const centerPosition = [47.5, -121.5]; // Default coordinates (latitude, longitude)

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
        //console.log("mapPoint: ", doc.id, " => ", doc.data());
      });

      setMapPoints(fetchedMapPoints)
      //setIsLoading(false)
    }

    getMapPointsData()
  }, [])

  const pinIcons = {
    eite: eiteIcon,
    covered: coveredIcon,
  }

  const getMarkerIcon = (buttonType) => {
    return L.icon({
      iconUrl: pinIcons[buttonType],
      iconSize: [24, 36],
      iconAnchor: [12, 36],
      popupAnchor: [0, -36]
    });
  };

  return (
    <MapContainer center={centerPosition} zoom={6} scrollWheelZoom={false} className="leaflet-container">
      <TileLayer
        url='https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}'
        attribution="Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ"
      />
      <div>
        {mapPoints.map((mapPoint) => {
          return (
            <Marker key={mapPoint.id} position={[mapPoint.data.latitude, mapPoint.data.longitude]} icon={getMarkerIcon(mapPoint.data.button)}>
              <Popup>
                {mapPoint.data.name} <br />
                <Link to={`/polluters/${mapPoint.id}`}>More Info</Link>
              </Popup>
            </Marker>
          )
        })}
      </div>
    </MapContainer>
  );
}

const natGeoTile = 'https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}'