import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet' // Header Generator
import { compose } from 'redux'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { getMovieReviews } from 'resources/reviews/reviews.actions'
import { getCritics } from 'resources/critics/critics.actions'

import PageContentWrapper from '../App/components/PageContentWrapper'
import Navbar from '../App/components/Navbar'
import Critic from './components/Critic'

export function CriticsPage(props) {
  const history = useHistory()

  useEffect(() => {
    if (!props.critics.data.length) {
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
    title: 'Critics',
    rightNav: null,
  }
  return (
    <>
      <Helmet>
        <meta name="description" content="Home" />
      </Helmet>
      <main>
        <Navbar {...navProps} />
        <PageContentWrapper>
          {props.critics.data.map(critic => {
            const reviewHistory =
              props.reviews.criticsReviewTracker[
                critic.display_name.toUpperCase()
              ]
            const passCritic = { ...critic, ...reviewHistory }
            return <Critic key={critic.sort_name} critic={passCritic} />
          })}
        </PageContentWrapper>
      </main>
    </>
  )
}

const mapStateToProps = (state, ownProps) => {
  return { critics: state.resources.critics, reviews: state.resources.reviews }
}

const mapDispatchToProps = dispatch => ({
  getCritics: () => dispatch(getCritics()),
  getMovieReviews: () => dispatch(getMovieReviews()),
})

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(CriticsPage)
