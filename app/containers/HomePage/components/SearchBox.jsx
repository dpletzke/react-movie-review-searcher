import React, { useEffect, useState, useCallback } from 'react'

import styled from 'styled-components'

export function SearchBox(props) {
  const { title, setTitle } = props
  const [formTitle, setFormTitle] = useState(title)
  let debouceTimer

  const debouncedSetTitle = useCallback(value => {
    clearTimeout(debouceTimer)
    debouceTimer = setTimeout(() => {
      setTitle(value)
      clearTimeout(debouceTimer)
    }, 500)
  }, [])

  const changeTitle = e => {
    const { value } = e.target
    setFormTitle(value)
    debouncedSetTitle(value)
  }

  useEffect(() => {
    return () => {
      clearTimeout(debouceTimer)
    }
  }, [])

  return (
    <input
      name="title"
      type="text"
      placeholder="Movie Title"
      value={formTitle}
      onChange={changeTitle}
    />
  )
}

export default SearchBox
