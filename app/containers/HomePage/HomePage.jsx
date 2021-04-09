import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet' // Header Generator
import { compose } from 'redux'
import { connect } from 'react-redux'
import { Switch, Route, useHistory } from 'react-router-dom'

import { getMovieReviews } from 'resources/reviews/reviews.actions'

import Navbar from '../App/components/Navbar'
import Review from './components/Review'

export function HomePage(props) {
  const history = useHistory()
  useEffect(() => {
    props.getMovieReviews()
  }, [])

  const navProps = {
    leftNav: null,
    title: 'Movie Picks and Ditches',
    rightNav: {
      title: 'See Critics',
      onClick: () => {
        history.push('/critics')
      },
    },
  }

  return (
    <>
      <Helmet>
        <meta name="description" content="Home" />
      </Helmet>
      <main>
        <Navbar {...navProps} />
        {props.reviews.map(review => {
          return <Review key={review.id} review={review} />
        })}
      </main>
    </>
  )
}

const mapStateToProps = (state, ownProps) => {
  return { reviews: state.resources.reviews.data }
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
