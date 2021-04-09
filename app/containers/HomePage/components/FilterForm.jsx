import React from 'react'

import styled from 'styled-components'

export function FilterForm(props) {
  const { filter, setFilter } = props
  const setFilterField = fieldName => {
    return e => {
      console.log(e)
      setFilter(prev => ({ ...prev, [fieldName]: e.target.value }))
    }
  }
  const change = {
    title: setFilterField('title'),
    displayAmount: setFilterField('displayAmount'),
    rating: setFilterField('rating'),
    dateStart: setFilterField('dateStart'),
    dateEnd: setFilterField('dateEnd'),
    isPick: setFilterField('isPick'),
  }
  return (
    <>
      <input name="title" value={filter.title} onChange={change.title} />
    </>
  )
}

export default FilterForm
