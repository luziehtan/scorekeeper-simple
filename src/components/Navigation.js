import React from 'react'
import { NavLink } from 'react-router-dom'

import Button from './Button'
import styled from 'styled-components/macro'

export default function Navigation({ onNavigate, currentPage }) {
  return (
    <Nav>
      <Button as={NavLink} exact to="/">
        Play
      </Button>
      <Button as={NavLink} to="/history">
        History
      </Button>
    </Nav>
  )
}

const Nav = styled.nav`
  display: flex;
  gap: 5px;
`
