import './App.css'
import CreateMap from './map'
import PolluterProfiles from './PolluterProfiles'
import { Link } from 'react-router-dom'
import YearContainer from './YearContainer'

export function Home() {

  return(
    <div >
      <h1>Washington's Climate Commitment Visualized</h1>
      <div className='whole-thing'>
        <YearContainer />
        <div className='polluter-map-container'>
          <PolluterProfiles />
          <CreateMap />
        </div>
      </div>
      
    </div>
    

  )
}