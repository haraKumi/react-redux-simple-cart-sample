import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { getItemDetail } from '../reducers/items'
import { getQuantity } from '../reducers/cart'
import { getSubTotal } from '../reducers/'
import ItemDetail from '../components/itemDetail/ItemDetail'

const ItemDetailContainer = ({ id, itemDetail, quantity, subTotal }) =>
  <ItemDetail
    detail={itemDetail}
    id={itemDetail.id}
    quantity={quantity}
    subTotal={subTotal}
  />

ItemDetailContainer.propTypes = {
  itemDetail: PropTypes.object.isRequired,
  itemDetail: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }).isRequired,
  quantity: PropTypes.number.isRequired,
  subTotal: PropTypes.number.isRequired,
}

const mapStateToProps = state => ({
  itemDetail: getItemDetail(state.items),
  quantity: getQuantity(state.cart, state.items.itemId),
  subTotal: getSubTotal(state, state.items.itemId)
})

export default connect(
  mapStateToProps,
)(ItemDetailContainer)