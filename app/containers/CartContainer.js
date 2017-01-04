import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { getTotal, getCartItems } from '../reducers'
import Cart from '../components/cart/Cart'

const CartContainer = ({ items, total }) => {
  if(items.length){
    return  (
      <Cart
        items={items}
        total={total}
      />
    )
  } else {
    return (
      <section className="cart-alert">
        <h1 className="cart-alert-ttl">カートの中身はありません</h1>
        <Link to={"/"}>
          <button name="button" id="book-it-btn_m" className="mt20" title="back to Activities">
            Back to Activities
          </button>
        </Link>
      </section>
    )
  }
}

CartContainer.propTypes = {
  items: PropTypes.array.isRequired,
  total: PropTypes.number.isRequired
}

const mapStateToProps = (state) => ({
  items: getCartItems(state),
  total: getTotal(state)
})

export default connect(
  mapStateToProps,
)(CartContainer)