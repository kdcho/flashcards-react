import React from 'react'
//import data from './Cards.json'
import Card from './Card.js'
import GlobalStyle from './GlobalStyle.js'
import Grid from './Grid.js'
import styled from 'styled-components/macro'
import Form from './Form.js'

export default function Home({
  cards,
  toggleBookmark,
  filterBookmarked,
  addNewCard,
  showBookmarked
}) {
  return (
    <div>
      <GlobalStyle />
      <Grid>
        <Form addCard={addNewCard} />
        <Filter onClick={filterBookmarked}>
          {showBookmarked ? 'Show Bookmarked' : 'Show All'}
        </Filter>
        {cards.map((card, index) =>
          !showBookmarked ? (
            <Card
              key={index}
              question={card.question}
              answer={card.answer}
              onToggleBookmark={() => toggleBookmark(index)}
              isBookmarked={card.isBookmarked}
            />
          ) : (
            card.isBookmarked && (
              <Card
                key={index}
                question={card.question}
                answer={card.answer}
                onToggleBookmark={() => toggleBookmark(index)}
                isBookmarked={card.isBookmarked}
              />
            )
          )
        )}
      </Grid>
    </div>
  )
}

const Filter = styled.button`
  position: absolute;
  height: 30px;
  width: 120px;
  top: 15px;
  left: 15px;
`
