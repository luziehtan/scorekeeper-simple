import styled from 'styled-components/macro'

export default styled.button`
  background-color: ${props => (props.isActive ? '#333' : 'lightgray')};
  ${props => props.isActive && 'color: white;'}
  padding: 5px;
  border: none;
  border-radius: 8px;
  background: #eee;
`
