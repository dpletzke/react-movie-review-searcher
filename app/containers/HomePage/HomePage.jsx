import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet' // Header Generator
import { compose } from 'redux'
import { connect } from 'react-redux'
import { Switch, Route, useHistory } from 'react-router-dom'

import { getMovieReviews } from 'resources/reviews/reviews.actions'

import Review from './components/Review'

export function HomePage(props) {
  useEffect(() => {
    props.getMovieReviews()
  }, [])

  return (
    <>
      <Helmet>
        <meta name="description" content="Home" />
      </Helmet>
      <main>
        {props.reviews.data.map(review => {
          return <Review key={review.id} review={review} />
        })}
      </main>
    </>
  )
}

const mapStateToProps = (state, ownProps) => {
  return state.resources
}

const mapDispatchToProps = dispatch => ({
  getMovieReviews: () => dispatch(getMovieReviews()),
})

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(HomePage)
