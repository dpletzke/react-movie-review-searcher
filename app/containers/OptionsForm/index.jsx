import React from 'react'
import styled from 'styled-components'

import OptionItemList from './OptionItemList'
import mapClickHandlersToSettings from './optionsHelpers'

import { settings } from './settings'

const SettingsContainer = styled.div`
  width: 100%;
  h1 {
    font-size: 2em;
    text-align: center;
  }
`

function OptionsForm({ setters, filter }) {
  const optionGroups = mapClickHandlersToSettings(settings, setters).map(
    elm => {
      const { label, optionsList, clickHandler, paramsKey } = elm
      return (
        <OptionItemList
          key={label}
          selected={filter[paramsKey]}
          label={label}
          optionsList={optionsList}
          clickHandler={clickHandler}
        />
      )
    }
  )

  return <SettingsContainer>{optionGroups}</SettingsContainer>
}

export default OptionsForm
