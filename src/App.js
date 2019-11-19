import React, { useState } from 'react'
import Cards from './Cards.json'
import Card from './Card.js'
import GlobalStyle from './GlobalStyle.js'
import Grid from './Grid.js'
import styled from 'styled-components/macro'

function App() {
  const [cards, setCards] = useState(Cards)
  const [bookmarked, setBookmarked] = useState('Show Bookmarked')

  return (
    <div>
      <GlobalStyle />
      <Grid>
        <Filter onClick={filterBookmarked}>
          {bookmarked ? 'Show Bookmarked' : 'Show All'}
        </Filter>
        {Cards.map((card, index) =>
          !bookmarked ? (
            <Card
              question={card.question}
              answer={card.answer}
              toggleBookmark={() => toggleBookmark(index)}
              isBookmarked={card.isBookmarked}
            />
          ) : (
            card.isBookmarked && (
              <Card
                question={card.question}
                answer={card.answer}
                isBookmarked={card.isBookmarked}
              />
            )
          )
        )}
      </Grid>
    </div>
  )

  function filterBookmarked() {
    setBookmarked(!bookmarked)
  }

  function toggleBookmark(index) {
    const card = cards[index]
    return setCards([
      ...cards.slice(0, index),
      { ...card, isBookmarked: !card.isBookmarked },
      ...cards.slice(index + 1)
    ])
  }
}

const Filter = styled.button`
  position: absolute;
  height: 30px;
  width: 120px;
  top: 15px;
  left: 15px;
`

export default App
