import React, { useState } from 'react'
//import data from './Cards.json'
import Card from './Card.js'
import GlobalStyle from './GlobalStyle.js'
import Grid from './Grid.js'
import styled from 'styled-components/macro'
import saveData from './services.js'
import Form from './Form.js'

export default function Home() {
  let cardData = JSON.parse(localStorage.savedData || null) || []
  const [cards, setCards] = useState(cardData)
  const [showBookmarked, setShowBookmarked] = useState(false)
  saveData(cards)

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
  function filterBookmarked() {
    setShowBookmarked(!showBookmarked)
  }

  function toggleBookmark(index) {
    const card = cards[index]
    setCards([
      ...cards.slice(0, index),
      { ...card, isBookmarked: !card.isBookmarked },
      ...cards.slice(index + 1)
    ])
  }

  function addNewCard(card) {
    setCards([...cards, card])
  }
}

const Filter = styled.button`
  position: absolute;
  height: 30px;
  width: 120px;
  top: 15px;
  left: 15px;
`
