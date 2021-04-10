import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet' // Header Generator
import { compose } from 'redux'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { getMovieReviews } from 'resources/reviews/reviews.actions'

import Navbar from '../App/components/Navbar'
import Review from './components/Review'
import OptionsForm from '../OptionsForm'
import SearchBox from './components/SearchBox'

import useFilter from '../../hooks/useFilter'
import { defaults } from '../OptionsForm/settings'

export function HomePage(props) {
  const history = useHistory()
  const [filter, filterSetters] = useFilter({ ...defaults, title: '' })

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

  const check = {
    title: title => {
      if (!filter.title.length) return true
      return new RegExp(filter.title, 'i').test(title)
    },
    rating: rating => {
      if (!filter.rating.length) return true
      if (rating === '') {
        return filter.rating === 'Unrated'
      }
      return filter.rating === rating
    },
    isPick: isPick => {
      if (!filter.isPick.length) return true
      return (
        (filter.isPick.includes('Pick') && isPick) ||
        (filter.isPick.includes('Ditch') && !isPick)
      )
    },
  }

  const applyFilter = (filter, reviews) => {
    return reviews
      .filter(review => {
        return (
          check.title(review.display_title) &&
          check.rating(review.mpaa_rating) &&
          check.isPick(review.critics_pick)
        )
      })
      .slice(0, filter.displayAmount)
  }
  return (
    <>
      <Helmet>
        <meta name="description" content="Home" />
      </Helmet>
      <main>
        <Navbar {...navProps} />
        <SearchBox title={filter.title} setTitle={filterSetters.setTitle} />
        <OptionsForm setters={filterSetters} filter={filter} />
        {applyFilter(filter, props.reviews).map(review => {
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
