import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { doc, getDoc, deleteDoc, setDoc } from "firebase/firestore";
import { db } from '../db';
import image2023 from "./bubble-charts/2023.drawio.png"
import image2024 from "./bubble-charts/2024.drawio.png"
import image2025 from "./bubble-charts/2025.drawio.png"

const yearImages = {
  2023: image2023,
  2024: image2024,
  2025: image2025,
}

export default function SelectYear({ id }) {
  const [targetYear, setTargetYear] = useState('jkIdDVDlti1Aj7B7bIJU')
  const [isLoading, setIsLoading] = useState(false)
  const [hasError, setHasError] = useState(false)
  // const { id } = useParams();
  //const navigate = useNavigate()

  console.log('SelectYear received ID: ', id)

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
        <img className="my-image" src={yearImages[targetYear.year]} alt= {`${targetYear.year} Bubble Chart`} />
        <div className="allowance-breakdown-container">
          <p>Year: {targetYear.year}</p>
          <p>Allowances Sold: {targetYear.allowances_sold}</p>
          <p>EITE No Cost Allowances Given: {targetYear.eite_allocation}</p>
        </div>
        <h3>Total Emissions: {targetYear.allowances_sold + targetYear.eite_allocation} metric tons</h3>
      </div>
  );
}
