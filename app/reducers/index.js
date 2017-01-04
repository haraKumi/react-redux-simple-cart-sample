import { combineReducers } from 'redux'
import cart, * as fromCart from './cart'
import items, * as fromItems from './items'

export default combineReducers({
  cart,
  items
})

const getAddedIds = state => fromCart.getAddedIds(state.cart)
const getQuantity = (state, id) => fromCart.getQuantity(state.cart, id)
const getItems = (state, id) => fromItems.getItem(state.items, id)

export const getCartItems = state =>
  getAddedIds(state).map(id => ({
    ...getItems(state, id),
    quantity: getQuantity(state, id)
  }))

export const getTotal = state =>
  getAddedIds(state)
    .reduce((total, id) =>
      total + getItems(state, id).priceInfo.afterDiscount.price * getQuantity(state, id),
      0
    )

export const getSubTotal = (state, id) =>
  getItems(state, id).priceInfo.afterDiscount.price * getQuantity(state, id)



