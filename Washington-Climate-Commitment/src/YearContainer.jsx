import { useEffect, useState } from "react"
import { collection, getDocs } from "firebase/firestore";
import { db } from '../db'
import './App.css'
import SelectYear from "./SelectYear";

export default function YearContainer() {
  const [years, setYears] = useState([])
  const [selectedYearID, setSelectedYearID] = useState('jkIdDVDlti1Aj7B7bIJU')
  // const [isLoading, setIsLoading] = useState(true)
  // const [hasError, setHasError] = useState(false)

  useEffect(() => {

    const getAllYearsData = async () => {
      const newYears = []
      const querySnapshot = await getDocs(collection(db, "years"));
      querySnapshot.forEach((doc) => {
        // console.log(doc.data)
        newYears.push({
          data: doc.data(),
          id: doc.id
        })
        // doc.data() is never undefined for query doc snapshots
        //console.log(doc.id, " => ", doc.data());
      });

      setYears(newYears.sort((a, b) => a.data.year - b.data.year))
      //setIsLoading(false)
    }

    getAllYearsData()
  }, [])

  return (
    <div className='bubble-chart-container'>
      <SelectYear id={selectedYearID} />
      <div className="year-selector">
        <div className='year-cards'>
          {years.map((year) => {
            return (
              <button key={year.id} style={{ outline: '2px solid white' }} onClick={() => {
                //console.log('clicked year id:', year.id)
                setSelectedYearID(year.id)
              }}>
                {year.data.year}
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}