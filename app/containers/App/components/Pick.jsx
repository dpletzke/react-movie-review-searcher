import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons'

export function Pick(props) {
  const { isPick } = props
  return (
    <>
      <FontAwesomeIcon
        icon={isPick ? faCheckCircle : faTimesCircle}
        color={isPick ? 'green' : 'red'}
      />
      {isPick ? ' Pick!' : ' Ditch'}
    </>
  )
}

export default Pick
