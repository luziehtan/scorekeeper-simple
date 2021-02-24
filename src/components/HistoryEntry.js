import React from 'react'
import styled from 'styled-components/macro'

export default function HistoryEntry({ nameOfGame, players }) {
  return (
    <HistorySection>
      <HistoryEntryGame>{nameOfGame}</HistoryEntryGame>
      {players.map((player, index) => (
        <HistoryEntryPlayer key={index}>
          <span>{player.name}</span>
          <span>{player.score}</span>
        </HistoryEntryPlayer>
      ))}
    </HistorySection>
  )
}

const HistorySection = styled.section`
  display: grid;
  gap: 10px;
`

const HistoryEntryPlayer = styled.div`
  display: flex;
  justify-content: space-between;
`

const HistoryEntryGame = styled.div`
  font-style: bold;
  text-align: center;
  background: #eee;
  border-radius: 8px;
  padding: 10px;
  margin: 5px;
`
