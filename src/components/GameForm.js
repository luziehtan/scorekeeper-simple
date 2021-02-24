import React from 'react'
import Button from './Button'
import Input from './Input'
import styled from 'styled-components/macro'

export default function GameForm({ onCreateGame }) {
  return (
    <Form onSubmit={handleSubmit}>
      <Input
        name="nameOfGame"
        labelText="Name of game"
        placeholder="e.g. Carcassonne"
      />
      <Input
        name="playerNames"
        labelText="Player names"
        placeholder="e.g. John Doe, Jane Doe"
      />
      <NewGameButton>Create game</NewGameButton>
    </Form>
  )

  function handleSubmit(event) {
    event.preventDefault()
    const form = event.target
    const { nameOfGame, playerNames } = form.elements

    onCreateGame({
      nameOfGame: nameOfGame.value,
      playerNames: playerNames.value.split(',').map(name => name.trim()),
    })
    form.reset()
    nameOfGame.focus()
  }
}

const Form = styled.form`
  display: grid;
  gap: 10px;
  background: #eee;
  padding: 15px;
  border-radius: 8px;
`

const NewGameButton = styled(Button)`
  background: #228b22;
  color: white;
  border: 2px solid transparent;
`
