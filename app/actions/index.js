import shop from '../api/shop'
import * as types from '../constants/ActionTypes'

const receiveItemsAction = items => ({
  type: types.RECEIVE_ITEMS,
  items: items
})
export const getAllItems = () => dispatch => {
  shop.getItems(items => {
    dispatch(receiveItemsAction(items))
  })
}

const addToCartAction = (itemId, itemTitle, itemPrice) => ({
  type: types.ADD_TO_CART,
  itemId,
  itemTitle,
  itemPrice
})
export const addToCart = (itemId, itemTitle, itemPrice) => dispatch => {
  dispatch(addToCartAction(itemId, itemTitle, itemPrice))
}

const subFromCartAction = itemId => ({
  type: types.SUB_FROM_CART,
  itemId
})
const delFromCartAction = itemId => ({
  type: types.DEL_FROM_CART,
  itemId
})
export const subFromCart = itemId => (dispatch, getState) => {
  if(getState().cart.quantityById[itemId] === 1 ) {
    dispatch(delFromCartAction(itemId))
  }
  dispatch(subFromCartAction(itemId))
}

const selectItemAction = itemId => ({
  type: types.SELECT_ITEM,
  itemId
})
export const showItemDetail = itemId => dispatch => {
  dispatch(selectItemAction(itemId))
}

