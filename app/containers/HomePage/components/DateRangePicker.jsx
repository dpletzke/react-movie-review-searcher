import React, { useEffect, useState, useCallback } from 'react'
import DatePicker from 'react-datepicker'

import styled from 'styled-components'

export function DateRangePicker(props) {
  const { filter, setters } = props
  const { startDate, endDate } = filter
  const { setStartDate, setEndDate } = setters
  console.log(props)
  const changeStartDate = date => {
    setStartDate(date)
  }

  const changeEndDate = date => {
    setEndDate(date)
  }

  return (
    <>
      <DatePicker
        selected={startDate}
        onChange={changeStartDate}
        selectsStart
        isClearable
        startDate={startDate}
        endDate={endDate}
        placeholderText="Start Date"
      />
      <DatePicker
        selected={endDate}
        onChange={changeEndDate}
        isClearable
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
        placeholderText="End Date"
      />
    </>
  )
}

export default DateRangePicker
