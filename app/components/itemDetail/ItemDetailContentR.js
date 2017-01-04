import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import { formatPrice } from '../../util/format'

const ItemDetailContentR = ({ title, priceInfo, quantity, subTotal, onAddToCartClicked }) =>
  <div className="col_2 col_sub_R">
    <section className="activity__main-menu">
      <div id="bookit-area" className="special-offer-bookit">
        <div className="outer">
          <nav className="order-nav clearfix">
            <div className="order-nav__block order-nav__quantity">
              <div className="order-nav__label">Activity</div>
              <div className="order-nav__label--ttl">{title}</div>
              <div className="order-nav__label">Select Quantity</div>
              <div className="pulldown--option pulldown--option-alwaysopen order-nav__tooltip volume-discount">
                <ul className="pulldown--option-list menu-quantity">
                  <li className="adult">
                  <span className="menu-quantity__title"> Person
                    <small className="note"></small>
                  </span>
                    <span className="menu-quantity__price">
                    <span className="price">{formatPrice(priceInfo.afterDiscount.price)}</span>
                    <span className="currency">{priceInfo.afterDiscount.currency}</span>
                  </span>
                    <div className="menu-quantity__controller">
                      <button
                        className="menu-quantity__controller__btn"
                        disabled='disabled'>
                        <span className="minus">ー</span>
                      </button>
                      <span className="quantity">{quantity}</span>
                      <button
                        className="menu-quantity__controller__btn"
                        onClick={onAddToCartClicked}>
                        <span className="plus">＋</span>
                      </button>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          <div className="order-price">
            <div className="order-breakdown"></div>
            <div className="order-price__inner">
              <span className="order-price__total">Total</span>
              <span className="order-price__amount price">
              {subTotal ? formatPrice(subTotal) : 0}
              </span>
              <span className="order-price__currency currency">{priceInfo.afterDiscount.currency}</span>
            </div>
          </div>

          <Link to={"/cart"} className="cart">
            <button name="button" id="book-it-btn_m" className="btn red" title="add to cart button">
              Go to Cart
            </button>
          </Link>

          <Link to={"/"}>
            <button name="button" id="book-it-btn_m" className="mt10" title="back to Activities">
              Back to Activities
            </button>
          </Link>
        </div>
      </div>
    </section>
  </div>

ItemDetailContentR.propTypes = {
  priceInfo: PropTypes.shape({
    afterDiscount: PropTypes.object.isRequired
  })
}

export default ItemDetailContentR