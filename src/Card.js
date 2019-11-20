import React, { useState } from 'react'
import styled from 'styled-components/macro'
import Button from './Button'
import Bookmark from './Bookmark'

export default function Card({
  question,
  answer,
  onToggleBookmark,
  isBookmarked
}) {
  const [toggleState, setToggleState] = useState(true)
  return (
    <CardStyled className={!toggleState ? 'active' : ''}>
      <Bookmark onClick={onToggleBookmark} active={isBookmarked} />
      <p>{question}</p>
      {
        <AnswerStyled className={!toggleState ? 'active' : ''}>
          {answer}
        </AnswerStyled>
      }
      <Button onClick={() => setToggleState(!toggleState)}>
        {!toggleState ? 'Hide Answer' : 'Show Answer'}
      </Button>
    </CardStyled>
  )
}
const AnswerStyled = styled.code`
  margin: 15px;
  opacity: 0;
  transition: all 1s;

  &.active {
    opacity: 1;
  }
`

const CardStyled = styled.section`
  display: grid;
  position: relative;
  grid-template-rows: 55px auto;
  width: 380px;
  height: 120px;
  background: cornflowerblue;
  color: black;
  border-radius: 5px;
  padding: 20px;
  box-shadow: 0px 5px 8px #010101;
  transition: all 1s;

  &.active {
    height: 190px;
  }
  > p {
    margin: 5px;
  }
`
