import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Home from './Home.js'
import saveData, {
  getCards,
  postCard,
  patchCard,
  patchBookmark
} from './services.js'
import GlobalStyle from './GlobalStyle.js'
import Form from './Form.js'
import { uid } from 'react-uid'

function App() {
  //let cardData = JSON.parse(localStorage.savedData || null) || []
  const [cards, setCards] = useState([])

  useEffect(() => {
    getCards().then(setCards)
  }, [])

  const [showBookmarked, setShowBookmarked] = useState(false)
  saveData(cards)

  /*   useEffect(() => {
    console.log('this is called on every change')
  }) */

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

  function toggleBookmark(id) {
    const index = cards.findIndex(card => card._id === id)
    const card = cards[index]
    patchBookmark(card).then(patchedCard => {
      setCards([
        ...cards.slice(0, index),
        patchedCard,
        ...cards.slice(index + 1)
      ])
    })
  }

  function addNewCard(card) {
    postCard(card).then(() =>
      setCards([...cards, card, { ...card, id: uid(card) }])
    )
  }
}
export default App
