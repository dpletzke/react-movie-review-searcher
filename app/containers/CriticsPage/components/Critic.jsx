import { useHistory } from 'react-router-dom'
import React from 'react'

import styled from 'styled-components'

const Card = styled.article`
  color: inherit;
  display: flex;
  border: 1px solid black;
  border-radius: 10px;
  overflow-x: hidden;
`

const CardImage = styled.img`
  border-radius: '0px 0px 10px 10px';
  width: ${p => `${p.width}px`};
  height: ${p => `${p.height}px`};
`
const CardBody = styled.section`
  margin-left: 10px;
  margin-right: auto;
`

export function Critic(props) {
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
      <CardImage src={imageLink} width={160} height={220} />
      <CardBody>
        <h2>{`${display_name}`}</h2>
        <h6>{`Total Reviews: ${
          totalReviews !== undefined ? totalReviews : 'N/A'
        }`}</h6>
        <h6>{`Total Picks: ${
          totalPicks !== undefined ? totalPicks : 'N/A'
        }`}</h6>
        {bio &&
          bio.split(/<br\/><br\/>/g).map((p, i) => {
            return <p key={i}>{p}</p>
          })}
      </CardBody>
    </Card>
  )
}

export default Critic
