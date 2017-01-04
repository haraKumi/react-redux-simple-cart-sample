import React, { PropTypes } from 'react'

const ActivityList = ({ children }) =>
  <ul id="discover-ul" className="clearfix mb15">{children}</ul>

ActivityList.propTypes = {
  children: PropTypes.node.isRequired
}

export default ActivityList