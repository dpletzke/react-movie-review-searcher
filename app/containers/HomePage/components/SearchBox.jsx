import React, { useEffect, useState, useCallback } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import styled from 'styled-components'

const SearchInput = styled.input`
  width: 100%;
`
const SearchWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(53, 2, 6, 0.05);
`

export function SearchBox(props) {
  const { title, setTitle } = props
  const [formTitle, setFormTitle] = useState(title)
  let debouceTimer

  const debouncedSetTitle = useCallback(value => {
    clearTimeout(debouceTimer)
    debouceTimer = setTimeout(() => {
      setTitle(value)
      clearTimeout(debouceTimer)
    }, 100)
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
    <SearchWrapper>
      <FontAwesomeIcon
        icon={faSearch}
        style={{ marginLeft: '0.5rem', marginRight: '0.5rem' }}
        color="#350206"
      />
      <SearchInput
        name="title"
        type="text"
        placeholder={`Search Movie Titles`}
        value={formTitle}
        onChange={changeTitle}
      />
    </SearchWrapper>
  )
}

export default SearchBox
