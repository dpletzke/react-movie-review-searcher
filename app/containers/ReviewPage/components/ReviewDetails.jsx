import React from 'react'

import styled from 'styled-components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'

import Pick from '../../App/components/Pick'

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
    /* flex-direction: row; */
    p {
      font-size: var(--font-size);
      margin-right: auto;
    }
  }
`
const CardImage = styled.img`
  width: 100%;
  height: 100px;
  object-fit: cover;
  object-position: top;
  @media (min-width: 536px) {
    height: 200px;
    max-width: 250px;
  }
`
const Flex = styled.div`
  width: 100%;
  @media (min-width: 536px) {
    display: flex;
  }
`
const CardBody = styled.section`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  margin-right: auto;
  justify-content: space-evenly;
  * {
    padding: 0px;
  }
  @media (min-width: 536px) {
    * {
      margin: 0px;
    }
  }
`
const CardDetails = styled.p`
  margin-left: 10px;
  margin-right: 10px;
`
const Form = styled.form`
  width: 100%;
  display: grid;
  place-items: center;
`
const CardAction = styled.button`
  width: 95%;
  @media (min-width: 536px) {
    max-width: 100%;
  }
`

export function ReviewDetails(props) {
  const {
    id,
    headline,
    byline,
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
      <Flex>
        <CardImage src={multimedia.src} />
        <CardBody>
          <h2>{`${headline}`}</h2>
          <span>{byline}</span>
          <span>Published: {publication_date}</span>
          <Pick isPick={critics_pick} />
        </CardBody>
      </Flex>
      <CardDetails>{summary_short}</CardDetails>
      <Form action={link.url}>
        <CardAction
          className="dark button"
          href={link.url}
          target="_blank"
          rel="noreferrer">
          Link To Article &nbsp;
          <FontAwesomeIcon icon={faExternalLinkAlt} />
        </CardAction>
      </Form>
    </Card>
  )
}

export default ReviewDetails
