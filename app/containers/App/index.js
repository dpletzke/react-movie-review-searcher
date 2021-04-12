/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react'
import { Helmet } from 'react-helmet' // Header Generator
import { Switch, Route } from 'react-router-dom'

import HomePage from 'containers/HomePage/HomePage'
import ReviewPage from 'containers/ReviewPage/ReviewPage'
import CriticsPage from 'containers/CriticsPage/CriticsPage'

import '../../styles/styles.scss'

export default function App(props) {
  return (
    <div className="app-wrapper">
      <Helmet defaultTitle="Movie Picks and Ditches">
        <meta name="Demo app for React/Redux" content="Movie Reviews" />
      </Helmet>

      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/home" component={HomePage} />
        <Route path="/reviews/:id" component={ReviewPage} />
        <Route path="/critics" component={CriticsPage} />
      </Switch>
      <footer />
    </div>
  )
}
