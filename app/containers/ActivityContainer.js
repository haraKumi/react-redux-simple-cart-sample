import React, { Component, PropTypes } from 'react'
import { browserHistory } from 'react-router'
import { connect } from 'react-redux'
import ActivityList from '../components/activity/ActivityList'
import ActivityItem from '../components/activity/ActivityItem'
import { showItemDetail } from '../actions'
import { getVisibleItem } from '../reducers/items'

const ActivityContainer = ({ items, showItemDetail }) =>
  <ActivityList>
    {items.map(item =>
      <ActivityItem
        key={item.id}
        item={item}
        onShowItemDetail={(e) =>{
          e.preventDefault()
          showItemDetail(item.id)
          browserHistory.push('/itemDetail/' + item.id)
        }}
      />
    )}
  </ActivityList>

ActivityContainer.propTypes = {
  items: PropTypes.array.isRequired,
  item: PropTypes.object,
  item: PropTypes.shape({
    id: PropTypes.string,
  }),
  showItemDetail: PropTypes.func.isRequired
}

ActivityContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  items: getVisibleItem(state.items)
})

export default connect(
  mapStateToProps,
  { showItemDetail }
)(ActivityContainer)