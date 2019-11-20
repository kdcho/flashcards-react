import styled from 'styled-components/macro'

export default styled.div`
  position: absolute;
  border: 14px solid ${props => (props.active ? 'red' : 'yellow')};
  border-bottom-color: transparent;
  top: -5px;
  right: 30px;
  width: 0;
`
