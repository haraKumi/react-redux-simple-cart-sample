import React, { PropTypes } from 'react'
import { formatPrice } from '../../util/format'

const ActivityItem = ({ item, onShowItemDetail }) => {
  const { img, location, priceInfo, duration, title } = item;

  return (
    <li className="activity-list">
      <a onClick={onShowItemDetail} className="act-body">
        <img alt={img.alt} className="pict" src={img.src} />
        <h3 className="title">{title}</h3>
        <div className="info">
          <span className="location">
            <span className="spr">
              <img className="icon_location_blue" alt="location" src="https://voyagin.sslcs.cdngc.net/assets/common/spacer-c93b574ef685bfad5c64039d95393f23.png"/>
            </span>
            <span className="location-name">{location.name}</span>
          </span>
          <span className="duration">
            <span className="spr">
              <img className="icon_duration_blue" alt="duration" src="https://voyagin.sslcs.cdngc.net/assets/common/spacer-c93b574ef685bfad5c64039d95393f23.png"/>
            </span>
            <span className="duration-number">{duration.number}</span>
            <span className="duration-unit">{duration.unit}</span>
          </span>
          <div className="price-info">
            <span className="before-discount-row">
              <span className="before-discount">{formatPrice(priceInfo.beforeDiscount.price)}</span>
              <span className="currency">{priceInfo.beforeDiscount.currency}</span>
            </span>
            <span className="price-row">
              <span className="price-prefix">From</span>
              <span className="price">{formatPrice(priceInfo.afterDiscount.price)}</span>
              <span className="currency">{priceInfo.afterDiscount.currency}</span>
            </span>
          </div>
        </div>
        <i className="special-offer"></i>
      </a>
    </li>
  )
}

ActivityItem.propTypes = {
  item: PropTypes.shape({
    img: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    priceInfo: PropTypes.object.isRequired,
    duration: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired
  }).isRequired,
  onShowItemDetail: PropTypes.func.isRequired
}

export default ActivityItem