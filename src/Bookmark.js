import React, { useState } from 'react'
import styled from 'styled-components/macro'

export default function Bookmark({ onClick, isBookmarked }) {
  return (
    <BookmarkStyle color={isBookmarked ? 'yellow' : 'red'} onClick={onClick} />
  )
}

const BookmarkStyle = styled.div`
  position: absolute;
  border: 14px solid ${props => props.color};
  border-bottom-color: transparent;
  top: -5px;
  right: 30px;
  width: 0;
`
