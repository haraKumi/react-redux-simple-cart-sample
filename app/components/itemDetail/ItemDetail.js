import React, { PropTypes } from 'react'
import ItemDetailVisual from './ItemDetailVisual'
import ItemDetailContentL from './ItemDetailContentL'
import ItemDetailContentRContainer from '../../containers/ItemDetailContentRContainer'

const ItemDetail = ({ detail, quantity, subTotal }) => {
  const { id, title, priceInfo, detailInfo } = detail;
  return (
    <div>
      <div id="activity">
        <ItemDetailVisual detailInfo={detailInfo}/>
        <div id="content">
          <div className="content-inner">
            <ItemDetailContentL
              title={title}
              detailInfo={detailInfo}
            />
            <ItemDetailContentRContainer
              id={id}
              title={title}
              priceInfo={priceInfo}
              quantity={quantity}
              subTotal={subTotal}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

ItemDetail.propTypes = {
  detail: PropTypes.shape({
    title: PropTypes.string.isRequired,
    priceInfo: PropTypes.object.isRequired,
    detailInfo: PropTypes.object.isRequired,
  }).isRequired,
}

export default ItemDetail