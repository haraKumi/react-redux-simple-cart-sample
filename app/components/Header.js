import React, { PropTypes } from 'react'
import { Link } from 'react-router'

const Header = ({ cartItemNum }) =>
  <header id="header" className="header-container l-header">
    <div className="header__primary clearfix">
      <h1 id="logo" className="logo f-l">
        <a className="over" href="/">
          <img width="150" height="45" alt="voyagin" src="https://voyagin.sslcs.cdngc.net/assets/common/logo-d9606888c6b8795a7f970887ec8675ca.svg"/>
        </a>
      </h1>
      <div className="element f-r">
        <span className="v-m lh1">Help</span>
        <div className="drop-down">
          <ul>
            <li><a href="/faq">FAQ</a></li>
            <li><a href="/contact">Call Us</a></li>
            <li><a href="/about_us">About Us</a></li>
          </ul>
          <span className="drop-down__arrow"></span>
        </div>
      </div>
      <div className="element f-r">
        <Link to={"/cart"} className="cart">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11 9h2V6h3V4h-3V1h-2v3H8v2h3v3zm-4 9c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-9.83-3.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.86-7.01L19.42 4h-.01l-1.1 2-2.76 5H8.53l-.13-.27L6.16 6l-.95-2-.94-2H1v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.13 0-.25-.11-.25-.25z"/></svg>
          <span className="quantity">{cartItemNum}</span>
        </Link>
      </div>
    </div>
  </header>

export default Header