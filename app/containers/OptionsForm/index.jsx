import React, { useState, useEffect } from 'react'
import OptionItemList from './OptionItemList'
// import "./index.scss";
import combineSetterAndSettings from './optionsHelpers'

import { settings } from './settings'

function OptionsForm({ setters, filter }) {
  const optionGroups = combineSetterAndSettings(settings, setters).map(elm => {
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
  })

  return <div className="settings-container">{optionGroups}</div>
}

export default OptionsForm
