import React from 'react'
import Button from './Button'
import styled from 'styled-components/macro'

export default function Navigation({ onNavigate, activeIndex }) {
  return (
    <Nav>
      <PlayButton isActive={activeIndex === 0} onClick={() => onNavigate(0)}>
        Play
      </PlayButton>
      <HistoryButton isActive={activeIndex === 1} onClick={() => onNavigate(1)}>
        History
      </HistoryButton>
    </Nav>
  )
}

const Nav = styled.nav`
  display: flex;
  gap: 5px;
`
const PlayButton = styled(Button)`
  border: 2px solid green;
  color: green;
  width: 100%;
`

const HistoryButton = styled(Button)`
  border: 2px solid transparent;
  width: 100%;
`
