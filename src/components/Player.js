import styled from 'styled-components/macro'
import Button from './Button'

const MAX_HUE_VALUE = 120 // green
const MIN_HUE_VALUE = 0 // red

export default function Player({ name, score, onMinus, onPlus }) {
  const maxHue = Math.min(score * 10, MAX_HUE_VALUE)
  const hue = Math.max(maxHue, MIN_HUE_VALUE)
  const color = score === 0 ? 'black' : `hsl(${hue}, 50%, 50%)`

  return (
    <PlayerSection score={score}>
      {name}
      <PlayerScore color={color}>
        <ButtonMinus onClick={onMinus}>-</ButtonMinus>
        <span>{score}</span>
        <ButtonPlus onClick={onPlus}>+</ButtonPlus>
      </PlayerScore>
    </PlayerSection>
  )
}

const PlayerSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const PlayerScore = styled.div`
  display: grid;
  gap: 5px;
  grid-template-columns: repeat(3, 1fr);
  place-items: center;
  color: ${props => props.color || 'black'};
`

const ButtonMinus = styled(Button)`
  color: #c21807;
  padding: 8px 15px;
`

const ButtonPlus = styled(Button)`
  color: green;
  padding: 8px 15px;
`
