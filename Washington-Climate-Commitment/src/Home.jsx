import './App.css'
import CreateMap from './map'
import PolluterProfiles from './PolluterProfiles'
import { Link } from 'react-router-dom'
import YearContainer from './YearContainer'

export function Home() {

  return(
    <div >
      <h1 style={{marginTop: '1px', marginBottom: '4px'}}>Washington's Climate Commitment Visualized</h1>
      <div className='whole-thing'>
        <YearContainer />
        <div className='polluter-map-container'>
          <div className='text-explanation-container'>
            <h3 style={{marginBottom: '1px', marginTop: '1px'}}>In Washington, contributing to climate change is not free. </h3>
            Our Climate Commitment Act takes all major carbon polluters (greater than 25,000 metric tons per year) and places them into two categories. Regular COVERED polluters have to pay one 'allowance' per metric ton of carbon equivalent they pollute. Other EMISSTIONS INTENSIVE, TRADE-EXPOSED, or EITE polluters are given a specified amount of allowances for free, based on their previous emissions. A polluter that doesn't decrease their carbon pollution must pay for more allowances. Both pools of allowances decrease over time, so regardless of which polluters buy more or fewer allowances, the total number of allowances -and therefore the total number of emissions in Washington state- decreases. Here we visualize Washington's pool of allowances over time on the left, and major sources of carbon pollution on the right.
          </div>
          <PolluterProfiles />
          <CreateMap />
        </div>
      </div>
      
    </div>
    

  )
}