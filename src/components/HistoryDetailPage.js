import React from 'react'
import styled from 'styled-components/macro'
import { useParams } from 'react-router-dom'

import Header from './Header'
import HistoryEntry from './HistoryEntry'

export default function HistoryDetailPage({ history }) {
  const { nameOfGame } = useParams()
  const games = history.filter(entry => entry.nameOfGame === nameOfGame)

  return (
    <Wrapper>
      <Header>{nameOfGame}</Header>
      {games.map((game, index) => (
        <HistoryEntry
          nameOfGame={`Game ${index + 1}`}
          players={game.players}
          isNameALink={false}
        />
      ))}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  gap: 10px;
`
