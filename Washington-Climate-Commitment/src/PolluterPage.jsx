import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { doc, getDoc, deleteDoc, setDoc } from "firebase/firestore";
import { db } from '../db';



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
      <h1>Polluter: {id}</h1>
      <p></p>


    </div>
  );
}


