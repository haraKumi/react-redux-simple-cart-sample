import React, { PropTypes } from 'react'
import ItemDetailVisual from './ItemDetailVisual'
import ItemDetailContentL from './ItemDetailContentL'
import ItemDetailContentR from './ItemDetailContentR'

const ItemDetail = ({ detail, quantity, subTotal, onAddToCartClicked, onSubFromCartClicked }) => {
  const { title, priceInfo, detailInfo } = detail;
  return (
    <div>
      <div id="activity">
        <ItemDetailVisual detailInfo={detailInfo}/>
        <div id="content">
          <div className="content-inner">
            <ItemDetailContentL
              title={title}
              detailInfo={detailInfo}/>
            <ItemDetailContentR
              title={title}
              priceInfo={priceInfo}
              quantity={quantity}
              subTotal={subTotal}
              onAddToCartClicked={onAddToCartClicked}
              onSubFromCartClicked={onSubFromCartClicked}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

ItemDetail.propTypes = {
  detail: PropTypes.shape({
    detailInfo: PropTypes.object.isRequired,
  }).isRequired,
}

export default ItemDetail