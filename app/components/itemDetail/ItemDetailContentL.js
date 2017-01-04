import React, { PropTypes } from 'react'

const ItemDetailContentL = ({ title, detailInfo }) =>
  <div className="col_2 col_main_L">
    <section id="activity-content">
      <div id="main_content" className="block--content has-frame">
        <div id="activity_header" className="clearfix special-offer-header">
          <img className="ribbon_special-offer" src="https://voyagin.sslcs.cdngc.net/assets/shared/parts/ribbon_special-offer_L-ac237e89a6430f2580b2cbe474404b03.png" alt="Ribbon special offer l" />
          <div id="activity_information" className="f-l">
            <h1>{title}</h1>
          </div>
          <div id="verified-mark" className="f-r">
            <img width="99" height="100" className="shine-effect" alt="mark of Voyagin Verified" src="https://voyagin.sslcs.cdngc.net/assets/common/spacer-c93b574ef685bfad5c64039d95393f23.png" />
          </div>
        </div>

        <div id="act-submenu">
          <ul className="tabs">
            <li id="tab_photos" className="current">
              <span className="dis-i-b spr mr10">
                <img className="act_icon_photo_on" alt="photo icon" src="https://voyagin.sslcs.cdngc.net/assets/common/spacer-c93b574ef685bfad5c64039d95393f23.png"/>
              </span>
              <span className="dis-i-b">Photos</span>
            </li>
          </ul>
        </div>

        <div id="photos">
          <div id="gallery" className="gallery">
            <div className="loader"></div>
            <div className="panel"><img src={detailInfo.img.src} />
            </div>
            <div className="pointer"></div>
          </div>
        </div>

        <div className="tag-list">
          <ul>
            <li className="area-tag"><a href="/things_to_do/japan/tokyo">Tokyo</a></li>
            <li className="area-tag"><a href="/things_to_do/japan/roppongi">Roppongi</a></li>
            <li><a href="/things_to_do/japan/tokyo/159-unique_escapades">Unique Escapades</a></li>
            <li><a href="/things_to_do/japan/tokyo/231-special_offer">Special Offer</a></li>
            <li><a href="/things_to_do/japan/tokyo/170-under_us_50">Under US $50</a></li>
          </ul>
        </div>

        <div className="text-affiliate-pr">
          <p>
            ONLY for Voyagin guests! 15% OFF Mobile Wifi Service when you travel in Japan! (Click <a title="Ninja WiFi" target="_blank" href="/pages/ninja_wifi">here</a> for more details)
          </p>
        </div>
      </div>
    </section>
    <div className="stopper"></div>
  </div>

ItemDetailContentL.propTypes = {
  detailInfo: PropTypes.shape({
    img: PropTypes.object.isRequired,
  }).isRequired,
}

export default ItemDetailContentL