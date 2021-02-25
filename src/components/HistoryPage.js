import styled from 'styled-components/macro'
import HistoryEntry from './HistoryEntry'

export default function HistoryPage({ history }) {
  return (
    <HistoryWrapper>
      {history.map(({ nameOfGame, players }) => (
        <HistoryEntry
          key={nameOfGame + JSON.stringify(players)}
          nameOfGame={nameOfGame}
          players={players}
        />
      ))}
    </HistoryWrapper>
  )
}

const HistoryWrapper = styled.div`
  display: grid;
  gap: 10px;
`
