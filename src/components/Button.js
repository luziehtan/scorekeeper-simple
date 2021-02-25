import styled from 'styled-components/macro'

export default styled.button`
  background-color: ${props => (props.isActive ? '#333' : 'lightgray')};
  ${props => props.isActive && 'color: white;'}
  padding: 10px;
  text-decoration: none;
  color: #ccc;
  text-align: center;
  border: none;
  border-radius: 8px;
  background: #eee;
  width: 100%;

  &.active {
    border: 1px dashed #333;
    color: #333;
  }
`
