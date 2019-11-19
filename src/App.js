import React, { useState } from 'react'
import Cards from './Cards.json'
import Card from './Card.js'
import GlobalStyle from './GlobalStyle.js'
import Grid from './Grid.js'
import styled from 'styled-components/macro'

function App() {
  const [cards, setCards] = useState(Cards)
  const [filter, setFilter] = useState('Show Bookmarked')

  return (
    <div>
      <GlobalStyle />
      <Grid>
        <Filter onClick={() => setFilter(!filter)}>
          {filter ? 'Show Bookmarked' : 'Show All'}
        </Filter>
        {Cards.map(card => (
          <Card question={card.question} answer={card.answer} />
        ))}
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

export default App
