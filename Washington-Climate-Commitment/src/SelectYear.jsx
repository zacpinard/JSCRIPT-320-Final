import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { doc, getDoc, deleteDoc, setDoc } from "firebase/firestore";
import { db } from '../db';
import image2023 from "./bubble-charts/2023.drawio.png"
import image2024 from "./bubble-charts/2024.drawio.png"
import image2025 from "./bubble-charts/2025.drawio.png"

export default function SelectYear() {
    const [targetYear, setTargetYear] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [hasError, setHasError] = useState(false)
    const { id } = useParams();
    //const navigate = useNavigate()

    useEffect(() => {
        const getOneYearData = async () => {

            const docRef = doc(db, "years", id);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                console.log("Document data:", docSnap.data());
                setTargetYear(docSnap.data())
                setIsLoading(false)


            } else {
                // docSnap.data() will be undefined in this case
                setHasError(true)
                setIsLoading(false)
                console.log("No such document!");
            }


        }
        getOneYearData()

    }, [id])

    if (isLoading) {
        return <h1>Loading...</h1>
    }

    if (hasError) {
        return <h1>Has error...</h1>
    }


  return (
    
      <div className='image-and-breakdown-container'>
        <img className="my-image" src={image2023} alt="2023 Bubble Chart" />
        <div className="allowance-breakdown-container">
          <p>Year: {id}</p>
          <p>Allowances Sold: ___</p>
          <p>EITE No Cost Allowances Given: ___</p>
        </div>
        <h3>Total Emissions: ______ million metric tons</h3>
      </div>
  );
}
