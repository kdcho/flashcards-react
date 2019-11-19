import React, { useState } from 'react'
import styled from 'styled-components/macro'

export default function Bookmark() {
  const [isBookmarked, setIsBookmarked] = useState(false)
  return (
    <BookmarkStyle
      color={isBookmarked ? 'yellow' : 'red'}
      onClick={() => setIsBookmarked(!isBookmarked)}
    />
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
