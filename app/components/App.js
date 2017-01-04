import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import HeaderContainer from '../containers/HeaderContainer'
import Main from './Main'
import '../css/main.css'
import '../css/activity.css'

const App = ({children, location}) =>
  <div>
    <HeaderContainer/>
    <Main>
      <ReactCSSTransitionGroup
        transitionName="appear"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={500}>
        {React.cloneElement(children, {key: location.pathname})}
      </ReactCSSTransitionGroup>
    </Main>
  </div>

export default App
