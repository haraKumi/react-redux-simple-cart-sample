import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import reducer from './reducers'
import { getAllItems } from './actions'
import routes from './config/routes'

const middleware = [ thunk ];

export const store = createStore(
  reducer,
  applyMiddleware(...middleware)
)

store.dispatch(getAllItems())

render(
  <Provider store={store}>
    {routes}
  </Provider>,
  document.getElementById('app')
)