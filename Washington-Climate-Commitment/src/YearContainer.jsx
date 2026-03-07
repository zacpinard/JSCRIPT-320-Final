import { useEffect, useState } from "react"
import { collection, getDocs, onSnapshot, query, orderBy, limit } from "firebase/firestore";
import { auth, db } from '../db'
import { Route, Routes, useParams, Link, useLocation } from 'react-router-dom'
import './App.css'
import image2023 from "./bubble-charts/2023.drawio.png"
import image2024 from "./bubble-charts/2024.drawio.png"
import image2025 from "./bubble-charts/2025.drawio.png"


export default function YearContainer () {

  return (
    <div className='bubble-chart-container'>
      <div className='image-and-breakdown-container'>
        <img className="my-image" src={image2023} alt="2023 Bubble Chart" />
        <div className="allowance-breakdown-container">
          <p>Allowances Sold: ___</p>
          <p>EITE No Cost Allowances Given: ___</p>
        </div>
      </div>
      <h3>Total Emissions: ______ million metric tons</h3>
      <div className="year-selector">
        <button className="my-button"> -- last year </button>
        <h2>Year: 20xx</h2>
        <button className="my-button"> next year -- </button>
      </div>
      


    </div>
  )
}