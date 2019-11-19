import { createGlobalStyle } from 'styled-components/macro'

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
}

body {
  font-family: sans-serif;
  margin: 0;
  height: 100vh;
  display: grid;
  justify-content:center;
}
`

export default GlobalStyle
