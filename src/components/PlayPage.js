import styled from 'styled-components/macro'
import Header from './Header'
import GameForm from './GameForm'

export default function PlayPage({ createGame }) {
  return (
    <div>
      <AppHeader>Games App</AppHeader>
      <GameForm onCreateGame={createGame} />
    </div>
  )
}

const AppHeader = styled(Header)`
  background: #aaa;
  border: 1px solid black;
  margin: 0 0 10px 0;
  font-family: 'Major Mono Display', monospace;
  font-size: 2em;
`
