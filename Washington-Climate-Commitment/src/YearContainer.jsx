import { useEffect, useState } from "react"
import { collection, getDocs, onSnapshot, query, orderBy, limit } from "firebase/firestore";
import { auth, db } from '../db'
import { Route, Routes, useParams, Link, useLocation } from 'react-router-dom'
import './App.css'
import SelectYear from "./SelectYear";



export default function YearContainer () {
  const [years, setYears] = useState([])
  const [year, setYear] = useState('jkIdDVDlti1Aj7B7bIJU')
  // const [isLoading, setIsLoading] = useState(true)
  // const [hasError, setHasError] = useState(false)
  const { id } = useParams();
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
        console.log(doc.id, " => ", doc.data());
      });

      setYears(newYears)
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
      <SelectYear />
      <div className="year-selector">
        {/* <button className="my-button"> -- last year </button>
        <h2>Year: 20xx</h2>
        <button className="my-button"> next year -- </button> */}
        <div className='year-cards'>
          {years.map((year) => {
            return (
              <button key={year.id}>{year.data.year}</button>
            )
          })}
        </div>
      </div>

    </div>
      
      
  )
}