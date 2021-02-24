import React from 'react'
import styled from 'styled-components/macro'

export default function Input({ labelText, placeholder, name }) {
  return (
    <Label>
      {labelText}
      <LabelInput name={name} placeholder={placeholder} type="text" />
    </Label>
  )
}

const Label = styled.label`
  display: grid;
  gap: 4px;
`
const LabelInput = styled.input`
  border: 0;
  border-bottom: 1px solid #bbb;
  margin-top: 8px;
  width: 100%;
`
