import { useHistory } from 'react-router-dom'
import React from 'react'

import styled from 'styled-components'

import Pick from '../../App/components/Pick'

const Card = styled.article`
  background-color: var(--grey-100);
  display: flex;
  flex-direction: column;
  box-shadow: 0 2px 5px 0px var(--grey-400);
  border-radius: var(--border-radius);
  overflow-x: hidden;
  width: 100%;
  margin-top: 1rem;
  @media (min-width: 536px) {
    flex-direction: row;
    p {
      font-size: var(--font-size);
      margin-right: auto;
    }
  }
`
const CardImage = styled.img`
  border-radius: '0px 0px 10px 10px';
  width: 100%;
  height: 150px;
  object-fit: cover;
  object-position: top;
  @media (min-width: 536px) {
    max-width: 150px;
  }
`
const CardBody = styled.section`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  margin-right: auto;
  justify-content: space-evenly;
  * {
    /* margin: 1rem 0px 0px 0px; */
    padding: 0px;
  }
  @media (min-width: 536px) {
    * {
      margin: 0px;
    }
  }
`
const CardAction = styled.button`
  width: 95%;

  @media (min-width: 536px) {
    max-width: 115px;
  }
`

export function Review(props) {
  const history = useHistory()

  const {
    id,
    critics_pick,
    display_title,
    mpaa_rating,
    multimedia,
    publication_date,
  } = props.review

  const seeDetails = () => {
    history.push(`/reviews/${id}`)
  }

  return (
    <Card>
      <CardImage src={multimedia.src} />
      <CardBody>
        <h3>{`${display_title} (${mpaa_rating || 'Unrated'})`}</h3>
        <Pick isPick={critics_pick} />
        <p>Published: {publication_date}</p>
      </CardBody>
      <CardAction className="dark button" onClick={seeDetails}>
        {`Read Review`}
      </CardAction>
    </Card>
  )
}

export default Review
