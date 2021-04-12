import React from 'react'
import styled from 'styled-components'

import OptionItem from './OptionItem'

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

function OptionItemList({ optionsList, clickHandler, label, selected }) {
  const list = optionsList.map((item, index) => {
    return (
      <OptionItem
        key={index + 1}
        selected={selected}
        clickHandler={clickHandler}>
        {item}
      </OptionItem>
    )
  })
  return (
    <Category>
      <p>{label}</p>
      <Options>{list}</Options>
    </Category>
  )
}

export default OptionItemList
