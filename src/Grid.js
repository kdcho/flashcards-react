import React from 'react'
import styled from 'styled-components/macro'

export default function Grid({ children }) {
  return <GridStyle>{children}</GridStyle>
}

const GridStyle = styled.div`
  display: grid;
  gap: 20px;
`
