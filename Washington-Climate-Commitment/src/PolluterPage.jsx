import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { doc, getDoc } from "firebase/firestore";
import { db } from '../db';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import * as L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import coveredIcon from './assets/covered_icon.png'
import eiteIcon from './assets/eite_icon.png'

export default function PolluterPage() {
  const [polluter, setPolluter] = useState(null)
  const { id } = useParams();
  const navigate = useNavigate()

  useEffect(() => {
    const getData = async () => {

      const docRef = doc(db, "polluters", id);
      //console.log('id: ', id)
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        //console.log("Document data:", docSnap.data());
        setPolluter(docSnap.data())

      } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
      }
    }
    getData()
  }, [id])

  if (!polluter) return <div>Loading...</div>

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
    <div className={`${polluter.button}-card`}>
      <h1>Polluter Name: {polluter.name}</h1>
      {polluter.latitude && polluter.longitude && (
        <MapContainer center={[polluter.latitude, polluter.longitude]} zoom={7} scrollWheelZoom={false} className="leaflet-container">
          <TileLayer
            url='https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            attribution="Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ"
          />
          <Marker position={[polluter.latitude, polluter.longitude]} icon={getMarkerIcon(polluter.button)}>
            <Popup>
              {polluter.name}
            </Popup>
          </Marker>
        </MapContainer>
      )}
      <div style={{ display: 'flex', gap: '10px' }}>
        <h2 style={{ marginBottom: '1px' }}>Type of Market Participant: </h2>
        <h2 className={`${polluter.button}-color`}> {polluter.status}</h2>
      </div>
      <h3 style={{ marginBottom: '1px', marginTop: '1px' }}>Industry: {polluter.industry}</h3>
      <h3 style={{ marginTop: '1px' }}>Location: {polluter.location}, WA</h3>
      <button style={{ outline: '2px solid white', width: '200px', display: 'block', margin: '0 auto' }} onClick={() => {
        navigate('/')
      }}>Back to Home Page
      </button>
    </div>
  );
}


