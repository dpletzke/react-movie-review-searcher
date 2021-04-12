import React, { useState } from 'react'

import styled from 'styled-components'

const Card = styled.article`
  background-color: var(--grey-100);
  display: flex;
  flex-direction: column;
  box-shadow: 0 2px 5px 0px var(--grey-400);
  border-radius: 10px;
  overflow-x: hidden;
  width: 100%;
  margin-top: 1rem;
  @media (min-width: 536px) {
    p {
      font-size: var(--font-size);
      margin-right: auto;
    }
  }
`

const CardImage = styled.img`
  object-fit: cover;
  border-radius: 10px 0px 0px 0px;
  max-height: 200px;
  height: ${p => `${p.height - 50}px`};
  @media (min-width: 536px) {
    height: ${p => `${p.height}px`};
  }
`
const CardBody = styled.section`
  margin: 0px;
  padding: 0px;
  margin-left: 10px;
  padding-right: 10px;
  padding-bottom: 10px;
  p {
    margin-left: 1rem;
    font-size: var(--font-size-small);
    font-weight: var(--font-weight-semibold);
  }
`
const Flex = styled.div`
  display: flex;
`
const CardDetails = styled.section`
  margin-left: 10px;
  margin-right: 10px;
  width: 90%;
`
const CardAction = styled.button`
  width: 95%;
  @media (min-width: 536px) {
    max-width: 100%;
  }
`
export function Critic(props) {
  const [open, setOpen] = useState(false)
  const {
    display_name,
    bio,
    multimedia,
    totalReviews,
    totalPicks,
  } = props.critic
  const imageLink = multimedia
    ? multimedia.resource.src
    : 'https://www.fillmurray.com/g/163/220'
  return (
    <Card>
      <Flex>
        <CardImage src={imageLink} width={160} height={220} />
        <CardBody>
          <h2>{`${display_name}`}</h2>
          <p>{`Total Reviews: ${
            totalReviews !== undefined ? totalReviews : 'N/A'
          }`}</p>
          <p>{`Total Picks: ${
            totalPicks !== undefined ? totalPicks : 'N/A'
          }`}</p>
        </CardBody>
      </Flex>
      {bio && (
        <CardAction
          className="button dark"
          onClick={() => setOpen(prev => !prev)}>
          Open Bio {open ? '-' : '+'}
        </CardAction>
      )}
      {bio && open && (
        <CardDetails>
          {bio.split(/<br\/><br\/>/g).map((p, i) => {
            return <p key={i}>{p}</p>
          })}
        </CardDetails>
      )}
    </Card>
  )
}

export default Critic
