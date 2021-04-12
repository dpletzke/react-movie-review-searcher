import React from 'react'
import classNames from 'classnames'

function OptionItem({ children, clickHandler, label, selected }) {
  let isSelected = selected === children

  const className = classNames('option-item', {
    'option-item--selected': isSelected,
  })

  return (
    <div
      id={label}
      onClick={() => clickHandler(children)}
      className={className}>
      <span>{children}</span>
    </div>
  )
}

export default OptionItem
