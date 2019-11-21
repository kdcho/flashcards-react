import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Home from './Home.js'
import saveData from './services.js'
import GlobalStyle from './GlobalStyle.js'
import Form from './Form.js'

function App() {
  let cardData =
    JSON.parse(localStorage.savedData || null) || require('./Cards.json')
  const [cards, setCards] = useState(cardData)
  const [showBookmarked, setShowBookmarked] = useState(false)
  saveData(cards)

  return (
    <Router>
      <>
        <GlobalStyle />
        <nav>
          <Link to="/">Home</Link>
          <Link to="/create">Create Form</Link>
        </nav>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/create">
            <Form addCard={addNewCard} />
          </Route>
          <Route exact path="/">
            <Home
              cards={cards}
              toggleBookmark={toggleBookmark}
              filterBookmarked={filterBookmarked}
              addNewCard={addNewCard}
              showBookmarked={showBookmarked}
            />
          </Route>
        </Switch>
      </>
    </Router>
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
    console.log('hierher', cards)
  }
}
export default App
