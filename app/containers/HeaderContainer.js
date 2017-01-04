import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { getCartItemNum } from '../reducers/cart'
import Header from '../components/Header'

const HeaderContainer = ({ cartItemNum }) =>
  <Header cartItemNum={cartItemNum}/>

HeaderContainer.propTypes = {
  cartItemNum: PropTypes.number
}

const mapStateToProps = (state) => ({
  cartItemNum: getCartItemNum(state.cart)
})

export default connect(
  mapStateToProps,
)(HeaderContainer)