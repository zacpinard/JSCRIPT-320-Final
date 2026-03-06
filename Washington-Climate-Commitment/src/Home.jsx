import './App.css'
import CreateMap from './map'
import PolluterProfiles from './PolluterProfiles'
import { Link } from 'react-router-dom'

export function Home() {

  return(
    <div>
      <div className='bubble-chart'>
        <h1>Washington's Climate Commitment Visualized</h1>
      </div>
      <div className='polluter-map'>
        <CreateMap />

      </div>
      <div>
        <PolluterProfiles />
        <Link to='/polluters/5baaw8XsL9cMsoKEtSIp'>Polluter Link</Link>
      </div>
    </div>
    

  )
}