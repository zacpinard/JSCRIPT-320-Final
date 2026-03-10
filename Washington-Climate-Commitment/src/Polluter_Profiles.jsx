import { useEffect, useState } from "react"
import { collection, getDocs, onSnapshot, query, orderBy, limit } from "firebase/firestore";
import { db } from '../db'
import { Link } from 'react-router-dom'
import './App.css'


export default function PolluterProfiles() {
  const [polluters, setPolluters] = useState([])
  //const [isLoading, setIsLoading] = useState(true)
  //console.log('polluters:', polluters)

  useEffect(() => {
    const getData = async () => {
      const newPolluters = []
      const querySnapshot = await getDocs(collection(db, "polluters"));
      querySnapshot.forEach((doc) => {
        //console.log(doc.id, " => ", doc.data().name);
        newPolluters.push({
          data: doc.data(),
          id: doc.id,
        })
      })
      setPolluters(newPolluters)
    }

    getData()

  }, [])

  return (
    <div className="polluter-card-container">
      <p style={{ color: 'white', marginTop: '1px', marginBottom: '5px' }}>Washington's Biggest Polluters:</p>
      <div className='polluter-cards'>
        {polluters.map((polluter) => {
          return (
            <div key={polluter.id} className={polluter.data.button}>
              <Link to={`/polluters/${polluter.id}`} style={{ color: 'white', padding: '10px', borderRadius: '20px' }}>{polluter.data.name}</Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}