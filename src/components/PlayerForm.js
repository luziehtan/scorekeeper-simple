import React from 'react'
import styled from 'styled-components/macro'

export default function PlayerForm({ onAddPlayer }) {
  return (
    <Form onSubmit={handleSubmit}>
      <label>
        Add player:
        <br />
        <FormInput name="player" placeholder="Player name" />
      </label>
    </Form>
  )

  function handleSubmit(event) {
    event.preventDefault()
    const form = event.target
    const input = form.elements.player
    const name = input.value
    onAddPlayer(name)
    form.reset()
    input.focus()
  }
}

const Form = styled.form`
  background: #eee;
  padding: 15px;
  border-radius: 8px;
`

const FormInput = styled.input`
  border: 0;
  border-bottom: 1px solid #bbb;
  margin-top: 8px;
  width: 100%;
`
