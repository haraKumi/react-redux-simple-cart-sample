import React from 'react'
import ToursOutline from './ToursOutline'
import ActivityContainer from '../containers/ActivityContainer'

const Home = () =>
  <div>
    <ToursOutline/>
    <section id="special-offer" className="pickup-activities">
      <h2 className="pickup-activities__title">SPECIAL OFFER</h2>
      <ActivityContainer/>
    </section>
  </div>

export default Home