import React, { PropTypes } from 'react'

const ItemDetailVisual = ({ detailInfo }) =>
  <aside id="visual-area-bg">
    <div className="bg-visual">
      <img width="1280" height="470" alt="visual" src={detailInfo.visual.src}/>
    </div>
  </aside>

ItemDetailVisual.propTypes = {
  detailInfo: PropTypes.shape({
    visual: PropTypes.object.isRequired
  }).isRequired,
}

export default ItemDetailVisual