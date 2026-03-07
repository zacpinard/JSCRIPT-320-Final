import { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { doc, getDoc, deleteDoc, setDoc } from "firebase/firestore";
import { db } from '../db';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';


export default function PolluterPage() {
  const [polluter, setPolluter] = useState(null)
  const { id } = useParams();
  const navigate = useNavigate()

  useEffect(() => {
      const getData = async () => {

          const docRef = doc(db, "polluters", id);
          console.log('id: ', id)
          const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
              console.log("Document data:", docSnap.data());
              console.log("docSnap.data().name: ", docSnap.data().name)
              //const polluterName = docSnap.data().name
              setPolluter(docSnap.data())

          } else {
              // docSnap.data() will be undefined in this case
              console.log("No such document!");
          }

      }

      getData()

  }, [id])


  return (
    <div>
      <h1>Polluter ID: {id}</h1>
      <h2>Name: {polluter.name}</h2>
      <MapContainer center={[polluter.latitude, polluter.longitude]} zoom={7} scrollWheelZoom={false} className="leaflet-container">
            <TileLayer 
              url='https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}'
              attribution="Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ"
            />
            <Marker position={[polluter.latitude, polluter.longitude]}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer>
      <h2>Industry: {polluter.industry}</h2>
      <h2>Type of Market Participant: {polluter.status}</h2>
      <h2>Location: {polluter.location}</h2>
      <Link to={`/`}>Home</Link>


    </div>
  );
}


