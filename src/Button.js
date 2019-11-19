import React from 'react'
import styled from 'styled-components/macro'

function Button({ onClick, children }) {
  return <ButtonStyled onClick={onClick}>{children}</ButtonStyled>
}

const ButtonStyled = styled.button`
  position: absolute;
  width: 100%;
  height: 30px;
  bottom: 10px;
  background: coral;
  border: 0;
  padding: 0;
  font: inherit;
  cursor: pointer;
`
export default Button
