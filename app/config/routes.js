import React from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import App from '../components/App'
import Home from '../components/Home'
import ItemDetailContainer from '../containers/ItemDetailContainer'
import CartContainer from '../containers/CartContainer'

const routes = (
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path='itemDetail' component={ItemDetailContainer}>
        <Route path='/itemDetail/:itemId' component={ItemDetailContainer} />
      </Route>
      <Route path='cart' component={CartContainer}/>
    </Route>
  </Router>
);

export default routes