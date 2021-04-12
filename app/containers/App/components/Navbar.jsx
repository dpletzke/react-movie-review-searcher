import React from 'react'

import styled from 'styled-components'

const Bar = styled.nav`
  position: fixed;
  top: 0px;
  height: var(--header-height);
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 99;
  span {
    text-align: center;
    color: var(--primary-color-light);
    font-family: var(--fancy-font);
    font-size: var(--font-size-large);
  }
  @media (min-width: 536px) {
    span {
      font-size: var(--font-size-xl);
    }
  }
`
const Placeholder = styled.div`
  height: var(--header-height);
  margin-bottom: 1rem;
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
        <span>{title}</span>
        <NavButton {...rightNav} />
      </Bar>
    </>
  )
}

export default Navbar
