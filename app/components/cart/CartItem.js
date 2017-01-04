import React, { PropTypes } from 'react'
import { formatPrice } from '../../util/format'

const CartItem = ({ title, priceInfo, quantity, onAddToCartClicked, onSubFromCartClicked }) =>
  <li className="order-nav clearfix">
    <div className="order-nav__block order-nav__quantity">
      <div className="order-nav__label">Activity</div>
      <div className="order-nav__label--ttl">{title}</div>
      <div className="order-nav__label">Quantity</div>
      <div className="order-nav__label--ttl">
        <span className="price">{formatPrice(priceInfo.afterDiscount.price)}</span>
        <span className="currency">JPY</span>
        <span>×</span>
        <span className="">{quantity}</span>
        <span className="">枚</span>
        <div className="menu-quantity__controller">
          <button
            className="menu-quantity__controller__btn"
            onClick={onSubFromCartClicked}
            disabled={quantity > 0 ? '' : 'disabled'}>
            <span className="minus">ー</span>
          </button>
          <span className="quantity">{quantity}</span>
          <button
            className="menu-quantity__controller__btn"
            onClick={onAddToCartClicked}>
            <span className="plus">＋</span>
          </button>
        </div>
      </div>
      <div className="order-nav__label">SubTotal</div>
      <div className="order-nav__label--subtotal">
        <span className="price">{formatPrice(priceInfo.afterDiscount.price * quantity)}</span>
        <span className="currency">JPY</span>
      </div>
    </div>
  </li>

CartItem.propTypes = {
  priceInfo: PropTypes.shape({
    afterDiscount: PropTypes.object.isRequired
  })
}

export default CartItem