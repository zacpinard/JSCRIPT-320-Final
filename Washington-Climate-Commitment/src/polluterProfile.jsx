import { useEffect, useState } from "react"
import { collection, getDocs, onSnapshot, query, orderBy, limit } from "firebase/firestore";
import db from '../db'

export default function PolluterProfile({ PolluterName }) {
  useEffect(() => {
    const getData = async () => {
      const querySnapshot = await getDocs(collection(db, "polluters"));
      querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
      })
    }

    getData()
   
  }, [])
  


  
  return(
    <div>
      <h2> Polluter Profile for: x</h2>
    </div>
  )
}