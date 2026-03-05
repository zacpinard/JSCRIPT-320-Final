import './App.css'
import CreateMap from './map'
import PolluterProfiles from './polluterProfiles'

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
      </div>
    </div>
    

  )
}