import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet' // Header Generator
import { compose } from 'redux'
import { connect } from 'react-redux'
import { Switch, Route, useHistory, useParams } from 'react-router-dom'

import { getMovieReviews } from 'resources/reviews/reviews.actions'

import PageContentWrapper from '../App/components/PageContentWrapper'
import ReviewDetails from './components/ReviewDetails'
import Navbar from '../App/components/Navbar'

export function ReviewPage(props) {
  const { review } = props

  const history = useHistory()

  /**
   * if no Review is passed in it probably means the
   * review page was attempted to be accessed directly through the address bar
   * in which case, load reviews into the store
   */
  useEffect(() => {
    if (!props.review) {
      props.getMovieReviews()
    }
  }, [])

  const navProps = {
    leftNav: {
      title: 'Back',
      onClick: () => {
        history.push('/')
      },
    },
    title: review
      ? `${review.display_title} (${review.mpaa_rating || 'Unrated'})`
      : 'Review',
  }

  return (
    <>
      <Helmet>
        <meta name="Review of " content="Review" />
      </Helmet>
      <main>
        <Navbar {...navProps} />
        <PageContentWrapper>
          {review && <ReviewDetails review={review} />}
        </PageContentWrapper>
      </main>
    </>
  )
}

const mapStateToProps = (state, ownProps) => {
  const { id } = ownProps.match.params
  //TODO validate params
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
