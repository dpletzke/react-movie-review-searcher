import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons'

import styled from 'styled-components'

const ColorText = styled.span`
  color: ${p => p.color};
`

export function Pick(props) {
  const { isPick } = props
  return (
    <div>
      <FontAwesomeIcon
        icon={isPick ? faCheckCircle : faTimesCircle}
        color={isPick ? 'var(--main-green-dark)' : 'var(--main-red-dark)'}
      />
      <ColorText color={isPick ? 'green' : 'red'}>
        {isPick ? ' Pick!' : ' Ditch'}
      </ColorText>
    </div>
  )
}

export default Pick
