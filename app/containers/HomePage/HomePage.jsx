import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet' // Header Generator
import { compose } from 'redux'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { getMovieReviews } from 'resources/reviews/reviews.actions'
import { setUiFilter } from 'resources/ui/ui.actions'

import Navbar from '../App/components/Navbar'
import PageContentWrapper from '../App/components/PageContentWrapper'
import Review from './components/Review'
import OptionsForm from '../OptionsForm'
import SearchBox from './components/SearchBox'
import DropDown from './components/DropDown'

import useFilter from '../../hooks/useFilter'
import DateRangePicker from './components/DateRangePicker'

export function HomePage(props) {
  const history = useHistory()
  const initalFilter = props.filter
  const [filter, filterSetters] = useFilter(initalFilter)

  useEffect(() => {
    props.setUiFilter(filter)
  }, [filter])

  useEffect(() => {
    props.getMovieReviews()
  }, [])

  const navProps = {
    leftNav: null,
    title: 'Movie Picks and Ditches',
    rightNav: {
      title: 'Critics List',
      onClick: () => {
        history.push('/critics')
      },
    },
  }

  /**
   * check helper functions for filter
   * checks return true if filter option not defined
   */
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
    isInDateRange: published => {
      const pubDate = new Date(published)
      const checkStart = !filter.startDate || filter.startDate <= pubDate
      const checkEnd = !filter.endDate || filter.endDate >= pubDate

      return checkStart && checkEnd
    },
  }

  const applyFilter = reviews => {
    return reviews
      .filter(review => {
        return (
          check.title(review.display_title) &&
          check.rating(review.mpaa_rating) &&
          check.isPick(review.critics_pick) &&
          check.isInDateRange(review.publication_date)
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
        <PageContentWrapper>
          <SearchBox title={filter.title} setTitle={filterSetters.setTitle} />
          <DropDown>
            <OptionsForm filter={filter} setters={filterSetters} />
            <DateRangePicker filter={filter} setters={filterSetters} />
          </DropDown>
          {applyFilter(props.reviews).map(review => {
            return <Review key={review.id} review={review} />
          })}
        </PageContentWrapper>
      </main>
    </>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    reviews: state.resources.reviews.data,
    filter: state.resources.ui.filter,
  }
}

const mapDispatchToProps = dispatch => ({
  getMovieReviews: () => dispatch(getMovieReviews()),
  setUiFilter: filter => dispatch(setUiFilter(filter)),
})

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(HomePage)
