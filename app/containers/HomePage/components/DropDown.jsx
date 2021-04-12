import React, { useEffect, useState, useCallback } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import styled from 'styled-components'

const DropWrapper = styled.div`
  width: 100%;
  max-width: var(--content-width-sm);
`
const Divider = styled.hr`
  width: 100%;
  color: var(--font-color-secondary);
  margin-top: 1rem;
`
const Flex = styled.div`
  display: flex;
  width: 100%;
`
export function DropDown(props) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Flex>
        <Divider />
        <div className="dropdown" onClick={() => setOpen(prev => !prev)}>
          {`${open ? '-' : '+'} Settings`}
        </div>
      </Flex>
      {open && <DropWrapper>{props.children}</DropWrapper>}
    </>
  )
}

export default DropDown
