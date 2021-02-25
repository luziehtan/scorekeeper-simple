import styled from 'styled-components/macro'
import Header from './Header'
import Player from './Player'
import Button from './Button'

export default function GamePage({
  nameOfGame,
  players,
  handlePlus,
  handleMinus,
  resetScores,
  endGame,
}) {
  return (
    <GameWrapper>
      <Header>{nameOfGame}</Header>
      {players.map(({ name, score }, index) => (
        <Player
          key={name}
          name={name}
          score={score}
          onPlus={() => handlePlus(index)}
          onMinus={() => handleMinus(index)}
        />
      ))}
      <ResetScoresButton onClick={resetScores}>Reset scores</ResetScoresButton>
      <EndGameButton onClick={endGame}>End game</EndGameButton>
    </GameWrapper>
  )
}

const GameWrapper = styled.div`
  display: grid;
  gap: 10px;
`

const ResetScoresButton = styled(Button)`
  border: 2px solid #c21807;
  color: #c21807;
`

const EndGameButton = styled(Button)`
  background: #c21807;
  border: 2px solid transparent;
`
