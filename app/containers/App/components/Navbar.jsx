import React from 'react'

import styled from 'styled-components'

const Bar = styled.nav`
  position: fixed;
  top: 0px;
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--main-orange-dark);
`
const Placeholder = styled.div`
  height: 80px;
`

const NavButton = props => {
  return (
    <button
      style={{
        visibility: props.title ? 'visible' : 'hidden',
        minWidth: '100px',
      }}
      onClick={() => {
        if (props.onClick) {
          props.onClick()
        }
      }}>
      {props.title}
    </button>
  )
}

export function Navbar(props) {
  const { leftNav, rightNav, titleClick, title } = props
  return (
    <>
      <Placeholder />
      <Bar>
        <NavButton {...leftNav} />
        {titleClick ? <NavButton {...{ onClick: titleClick, title }} /> : title}
        <NavButton {...rightNav} />
      </Bar>
    </>
  )
}

export default Navbar
