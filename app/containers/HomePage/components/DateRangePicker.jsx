import React, { forwardRef } from 'react'
import DatePicker from 'react-datepicker'

import styled from 'styled-components'

const Category = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  align-items: center;
  p {
    font-size: var(--font-size-small);
    margin-right: 0px;
  }
  @media (min-width: 536px) {
    flex-direction: row;
    p {
      font-size: var(--font-size);
      margin-right: auto;
    }
  }
`

const Options = styled.div`
  display: flex;
  justify-content: space-evenly;
`

const StartDateInput = forwardRef(({ value, onClick }, ref) => {
  return (
    <input
      className="option-item option-date"
      onClick={onClick}
      ref={ref}
      placeholder={'Start Date'}
      value={value}
    />
  )
})
StartDateInput.displayName = 'StartDateInput'

const EndDateInput = forwardRef(({ value, onClick }, ref) => {
  return (
    <input
      className="option-item option-date"
      onClick={onClick}
      ref={ref}
      placeholder={'End Date'}
      value={value}
    />
  )
})
EndDateInput.displayName = 'EndDateInput'

export function DateRangePicker(props) {
  const { filter, setters } = props
  const { startDate, endDate } = filter
  const { setStartDate, setEndDate } = setters
  const changeStartDate = date => {
    setStartDate(date)
  }

  const changeEndDate = date => {
    setEndDate(date)
  }

  return (
    <Category>
      <p>Date Published</p>
      <Options>
        <DatePicker
          selected={startDate}
          onChange={changeStartDate}
          selectsStart
          isClearable
          startDate={startDate}
          endDate={endDate}
          customInput={<StartDateInput />}
        />
        <DatePicker
          selected={endDate}
          onChange={changeEndDate}
          isClearable
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
          customInput={<EndDateInput />}
        />
      </Options>
    </Category>
  )
}

export default DateRangePicker
