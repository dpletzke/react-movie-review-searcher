import React, { useEffect } from 'react'
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
import DateRangePicker from './components/DateRangePicker'

import useFilter from '../../hooks/useFilter'

export function HomePage(props) {
  const history = useHistory()
  const initalFilter = props.filter
  const [filter, filterSetters] = useFilter(initalFilter)

  useEffect(() => {
    props.setUiFilter(filter)
  }, [filter])

  useEffect(() => {
    if (!props.reviews.length) {
      props.getMovieReviews()
    }
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

  /**
   * @param {Object[]} reviews stream of review data from JSON
   * @returns filtered array based on filter helper checks
   */
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
