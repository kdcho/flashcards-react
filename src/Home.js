import React from 'react'
import Card from './Card.js'
import Grid from './Grid.js'
import styled from 'styled-components/macro'

export default function Home({
  cards,
  toggleBookmark,
  filterBookmarked,
  showBookmarked
}) {
  return (
    <>
      <Grid>
        <Filter onClick={filterBookmarked}>
          {showBookmarked ? 'Show Bookmarked' : 'Show All'}
        </Filter>
        {cards
          .filter(card => {
            return showBookmarked ? card.isBookmarked : true
          })
          .map(card => (
            <Card
              key={card._id}
              question={card.question}
              answer={card.answer}
              onToggleBookmark={() => toggleBookmark(card._id)}
              isBookmarked={card.isBookmarked}
            />
          ))}
      </Grid>
    </>
  )
}

const Filter = styled.button`
  position: absolute;
  height: 30px;
  width: 150px;
  top: 15px;
  left: 15px;
`
