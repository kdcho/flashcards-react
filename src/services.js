export default function saveData(cards) {
  let savedData = cards
  localStorage.savedData = JSON.stringify(savedData)
}
