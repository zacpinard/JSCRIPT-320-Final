import { useEffect, useState } from "react"
import { collection, getDocs, onSnapshot, query, orderBy, limit } from "firebase/firestore";
import { auth, db } from '../db'
import { Route, Routes, useParams, Link, useLocation } from 'react-router-dom'

export default function YearProfile () {

  return (
    <div>
      <div>
        Insert Bubble Chart Image
      </div>
      <h1>Total Emissions: </h1>
      <Button> -back </Button>
      <h2>Year: </h2>
      <Button> forward- </Button>


    </div>
  )
}