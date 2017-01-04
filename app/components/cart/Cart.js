import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import CartItem from './CartItem'
import { formatPrice } from '../../util/format'

const Cart = ({ items, total }) =>
  <div id="bookit-area" className="cart-area">
    <ul className="outer">
      {items.map(item =>
        <CartItem
          key={item.id}
          title={item.title}
          priceInfo={item.priceInfo}
          quantity={item.quantity}
        />
      )}
    </ul>

    <div className="order-price">
      <div className="order-breakdown"></div>
      <div className="order-price__inner">
        <span className="order-price__total">Total</span>
        <span className="order-price__amount price">{formatPrice(total)}</span>
        <span className="order-price__currency currency">JPY</span>
      </div>
    </div>

    <Link to={"/"}>
      <button name="button" id="book-it-btn_m" className="mt50" title="back to Activities">
        Back to Activities
      </button>
    </Link>
  </div>

Cart.propTypes = {
  item: PropTypes.object,
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    priceInfo: PropTypes.object.isRequired,
    quantity: PropTypes.number.isRequired,
  })
}

export default Cart