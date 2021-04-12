import React from 'react'

import styled from 'styled-components'

const Page = styled.section`
  max-width: var(--content-width-md);
  width: 95%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export function PageContentWrapper(props) {
  return <Page>{props.children}</Page>
}

export default PageContentWrapper
