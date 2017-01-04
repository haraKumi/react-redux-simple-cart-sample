import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { addToCart, subFromCart } from '../actions'
import ItemDetailSelect from '../components/itemDetail/ItemDetailSelect'

const ItemDetailSelectContainer = ({ id, title, priceInfo, quantity, subTotal, addToCart, subFromCart }) =>
  <ItemDetailSelect
    title={title}
    priceInfo={priceInfo}
    quantity={quantity}
    subTotal={subTotal}
    onAddToCartClicked={() => addToCart(id, title, priceInfo.afterDiscount.price)}
    onSubFromCartClicked={() => subFromCart(id)}
  />

ItemDetailSelectContainer.propTypes = {
  priceInfo: PropTypes.shape({
    afterDiscount: PropTypes.object.isRequired
  }),
  addToCart: PropTypes.func.isRequired,
  subFromCart: PropTypes.func.isRequired,
}

const mapStateToProps = state => state

export default connect(
  mapStateToProps,
  { addToCart, subFromCart }
)(ItemDetailSelectContainer)