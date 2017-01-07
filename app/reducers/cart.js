import {
  ADD_TO_CART,
  SUB_FROM_CART,
  DEL_FROM_CART
} from '../constants/ActionTypes'

const initialState = {
  addedIds: [],
  quantityById: {}
}

const addedIds = (state = initialState.addedIds, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      if (state.indexOf(action.itemId) !== -1) {
        return state
      }
      return [ action.itemId, ...state ]
    case DEL_FROM_CART:
      return state.filter(id => id !== action.itemId)
        .reduce((prevIds, currentId) => {
          prevIds.push(currentId)
          return prevIds
        }, [])
    default:
      return state
  }
}

const quantityById = (state = initialState.quantityById, action) => {
  let itemId = 0
  switch (action.type) {
    case ADD_TO_CART:
      itemId = action.itemId
      return { ...state,
        [itemId]:  (state[itemId] || 0) + 1
      }
    case SUB_FROM_CART:
      itemId = action.itemId
      return { ...state,
        [itemId]:  state[itemId] - 1
      }
    default:
      return state
  }
}

export const getAddedIds = state => state.addedIds

export const getCartItemNum = state => state.addedIds.length

export const getQuantity = (state, itemId) =>
  state.quantityById[itemId] || 0

const cart = (state = initialState, action) => {
  return {
    addedIds: addedIds(state.addedIds, action),
    quantityById: quantityById(state.quantityById, action),
  }
}

export default cart
