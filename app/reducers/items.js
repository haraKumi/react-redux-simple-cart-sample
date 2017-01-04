import { combineReducers } from 'redux'
import { RECEIVE_ITEMS, SELECT_ITEM, ADD_TO_CART } from '../constants/ActionTypes'

const items = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return state
    default:
      return state
  }
}

const byId = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_ITEMS:
      return {
        ...state,
        ...action.items.reduce((obj, item) => {
          obj[item.id] = item
          return obj
        }, {})
      }
    default:
      const { itemId } = action
      if (itemId) {
        return {
          ...state,
          [itemId]: items(state[itemId], action)
        }
      }
      return state
  }
}

const visibleIds = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_ITEMS:
      return action.items.map(item => item.id)
    default:
      return state
  }
}

const itemId = (state = '', action) => {
  switch (action.type) {
    case SELECT_ITEM:
      return action.itemId
    default:
      return state
  }
}


export default combineReducers({
  byId,
  visibleIds,
  itemId
})

export const getItem = (state, id) =>
  state.byId[id]

export const getVisibleItem = state =>
  state.visibleIds.map(id => getItem(state, id))

export const getItemDetail = state =>
  getItem(state, state.itemId)
