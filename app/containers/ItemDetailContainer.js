import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { addToCart } from '../actions'
import { getItemDetail } from '../reducers/items'
import { getQuantity } from '../reducers/cart'
import { getSubTotal } from '../reducers/'
import ItemDetail from '../components/itemDetail/ItemDetail'

const ItemDetailContainer = ({ itemDetail, quantity, subTotal, addToCart }) =>
  <ItemDetail
    detail={itemDetail}
    quantity={quantity}
    subTotal={subTotal}
    onAddToCartClicked={() => addToCart(itemDetail.id, itemDetail.title, itemDetail.priceInfo.afterDiscount.price)}
  />

ItemDetailContainer.propTypes = {
  itemDetail: PropTypes.object.isRequired,
  itemDetail: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    priceInfo: PropTypes.object.isRequired,
  }).isRequired,
  quantity: PropTypes.number.isRequired,
  subTotal: PropTypes.number.isRequired,
  addToCart: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  itemDetail: getItemDetail(state.items),
  quantity: getQuantity(state.cart, state.items.itemId),
  subTotal: getSubTotal(state, state.items.itemId)
})

export default connect(
  mapStateToProps,
  { addToCart }
)(ItemDetailContainer)