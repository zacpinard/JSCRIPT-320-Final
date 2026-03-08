import { useEffect, useState } from "react"
import { collection, getDocs, onSnapshot, query, orderBy, limit } from "firebase/firestore";
import { auth, db } from '../db'
import { Route, Routes, useParams, Link, useLocation } from 'react-router-dom'
import './App.css'
import SelectYear from "./SelectYear";
import circleLegend from "./assets/CircleLegend.drawio.png";




export default function YearContainer () {
  const [years, setYears] = useState([])
  const [selectedYearID, setSelectedYearID] = useState('jkIdDVDlti1Aj7B7bIJU')
  // const [isLoading, setIsLoading] = useState(true)
  // const [hasError, setHasError] = useState(false)
  // const { id } = useParams();
  //console.log('polluters:', polluters)
  let displayYear = 2023

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

  // useEffect(() => {
  //   const getData = async () => {
  //     const newYears = []
  //     const querySnapshot = await getDocs(collection(db, "years"));
  //     querySnapshot.forEach((doc) => {
  //       console.log(doc.id, " => ", doc.data().year);
  //       newYears.push({
  //         data: doc.data(),
  //         id: doc.id
  //       })
  //     })
  //     setYears(newYears)
  //   }

  //   getData()

  // }, [])


  // useEffect(() => {
  //   const getYearData = async () => {
  //     const docRef = doc(db, "years", id);
  //     const docSnap = await getDoc(docRef);

  //     if (docSnap.exists()) {
  //       console.log("Document data:", docSnap.data());
  //       setYear(docSnap.data())
  //       setIsLoading(false)


  //     } else {
  //       // docSnap.data() will be undefined in this case
  //       setHasError(true)
  //       setIsLoading(false)
  //       console.log("We don't have that year");
  //     }

  //     getYearData()

  //   }}, [id])

    // if (isLoading) {
    //     return <h1>Loading....</h1>
    // }

  //console.log('year: ', year)

  return (
    <div className='bubble-chart-container'>
      <SelectYear id={selectedYearID}/>
      <div className="year-selector">
        {/* <button className="my-button"> -- last year </button>
        <h2>Year: 20xx</h2>
        <button className="my-button"> next year -- </button> */}
        <div className='year-cards'>
          {years.map((year) => {
            return (
              <button key={year.id} style={{outline: '2px solid white'}} onClick={() => {
                //console.log('clicked year id:', year.id)
                setSelectedYearID(year.id)}}>
                {year.data.year}
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}