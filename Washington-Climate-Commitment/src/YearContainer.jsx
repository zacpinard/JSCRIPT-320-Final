import { useEffect, useState } from "react"
import { collection, getDocs, onSnapshot, query, orderBy, limit } from "firebase/firestore";
import { auth, db } from '../db'
import { Route, Routes, useParams, Link, useLocation } from 'react-router-dom'
import './App.css'


export default function YearContainer () {

  return (
    <div className='bubble-chart-container'>
      <div>
        Insert Bubble Chart Image Here
      </div>
      <div className="allowance-breakdown-container">
        <p>Allowances Sold: ___</p>
        <p>EITE No Cost Allowances Given: ___</p>
      </div>
      <h2>Total Emissions: ______ million metric tons</h2>
      <div className="year-selector">
        <button className="my-button"> -- last year </button>
        <h2>Year: 20xx</h2>
        <button className="my-button"> next year -- </button>
      </div>
      


    </div>
  )
}