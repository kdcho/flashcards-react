export default function saveData(cards) {
  let savedData = cards
  localStorage.savedData = JSON.stringify(savedData)
}

export function getCards() {
  return fetch('/cards').then(res => res.json())
}

export function postCard(card) {
  return fetch('/cards', {
    method: 'POST',
    body: JSON.stringify(card),
    headers: {
      'content-type': 'application/json'
    }
  }).then(res => res.json())
}

export function patchCard(card) {
  return fetch('/cards/' + card._id, {
    method: 'PATCH',
    body: JSON.stringify(card),
    headers: {
      'content-type': 'application/json'
    }
  }).then(res => res.json())
}

export function deleteCard(id) {
  return fetch('/cards/' + id, {
    method: 'DELETE'
  }).then(res => res.json())
}

export function patchBookmark(card) {
  card = { _id: card._id, isBookmarked: !card.isBookmarked }
  return fetch('/cards/' + card._id, {
    method: 'PATCH',
    body: JSON.stringify(card),
    headers: {
      'content-type': 'application/json'
    }
  }).then(res => res.json())
}
