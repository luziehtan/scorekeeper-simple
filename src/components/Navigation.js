import React from 'react'
import Button from './Button'
import styled from 'styled-components/macro'

export default function Navigation({ onNavigate, currentPage }) {
  return (
    <Nav>
      <PlayButton
        isActive={currentPage === 'play'}
        onClick={() => onNavigate('play')}
      >
        Play
      </PlayButton>
      <HistoryButton
        isActive={currentPage === 'history'}
        onClick={() => onNavigate('history')}
      >
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
  width: 100%;
`

const HistoryButton = styled(Button)`
  width: 100%;
`
