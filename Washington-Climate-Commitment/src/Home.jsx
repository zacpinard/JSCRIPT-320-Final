import './App.css'
import CreateMap from './map'
import PolluterProfiles from './Polluter_Profiles'
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
            <p>
              Our state's Climate Commitment Act takes all our major carbon polluters (greater than 25,000 metric tons per year) and places them into two categories. Regular <span style={{ fontSize: '14px', fontWeight: 'bold', color: '#718769' }}>COVERED</span> polluters have to buy one 'allowance' per metric ton of carbon they pollute. Other EMISSIONS INTENSIVE, TRADE-EXPOSED, or <span style={{ fontSize: '14px', fontWeight: 'bold', color: '#d28f70' }}>EITE</span> polluters are given a specified amount of allowances for free based on their previous emissions. A polluter that doesn't decrease their carbon pollution must pay for more allowances. Both pools of allowances decrease over time. So, regardless of how many allowances an individual polluter buys, the total allowances (and therefore the state's total emissions) decrease. Here we visualize Washington's pools of allowances over time, as well as the major carbon polluters, which are covered by the program.
            </p>
          </div>
          <PolluterProfiles />
          <CreateMap />
        </div>
      </div>
      
    </div>
    

  )
}