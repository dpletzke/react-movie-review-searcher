import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet' // Header Generator
import { compose } from 'redux'
import { connect } from 'react-redux'
import { Switch, Route, useHistory, useParams } from 'react-router-dom'

import { getMovieReviews } from 'resources/reviews/reviews.actions'

import ReviewDetails from './components/ReviewDetails'

export function ReviewPage(props) {
  const { review } = props
  console.log('reviewpage', props)

  const history = useHistory()

  /**
   * if no Review is passed in it probably means the
   * review page was attempted to be accessed directly
   */
  useEffect(() => {
    if (!props.review) {
      props.getMovieReviews()
      history.push(props.location.pathname)
    }
  }, [])

  return (
    <div>
      <Helmet>
        <meta name="Review of " content="Review" />
      </Helmet>
      <main>{review && <ReviewDetails review={review} />}</main>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  const { id } = ownProps.match.params
  const review = state.resources.reviews.data[Number(id)]
  return { review }
}

const mapDispatchToProps = dispatch => ({
  getMovieReviews: () => dispatch(getMovieReviews()),
})

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(ReviewPage)
