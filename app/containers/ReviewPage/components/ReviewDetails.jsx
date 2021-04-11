import { useHistory } from 'react-router-dom'
import React from 'react'

import styled from 'styled-components'

import Pick from '../../App/components/Pick'

const Card = styled.article`
  color: inherit;
  display: flex;
  border: 1px solid black;
  border-radius: 10px;
  overflow-x: hidden;
`

const CardImage = styled.img`
  border-radius: '0px 0px 10px 10px';
`
const CardBody = styled.section`
  margin-left: 10px;
  margin-right: auto;
`

export function ReviewDetails(props) {
  const history = useHistory()

  const {
    id,
    critics_pick,
    display_title,
    mpaa_rating,
    multimedia,
    publication_date,
    summary_short,
    link,
  } = props.review

  return (
    <Card>
      <CardImage src={multimedia.src} />
      <CardBody>
        <h2>{`${display_title} (${mpaa_rating || 'Unrated'})`}</h2>
        <Pick isPick={critics_pick} />
        <p>{publication_date}</p>
        <p>{summary_short}</p>
        <a href={link.url} target="_blank" rel="noreferrer">
          Link To Article
        </a>
      </CardBody>
    </Card>
  )
}

export default ReviewDetails
