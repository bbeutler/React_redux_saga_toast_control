// @flow
import * as React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

type Props = {}

const Container = styled.ul`padding: 0;`

const MenuLink = styled(NavLink)`
  display: block;
  margin-bottom: 0.5rem;
  list-style: none;
  font-size: 1.2rem;
  color: #222;
`

const activeMenuStyle = {
  fontWeight: 'bold',
  color: 'tomato',
}

function MenuList(props: Props) {
  return (
    <Container>
      <MenuLink exact to="/" activeStyle={activeMenuStyle}>
        Home
      </MenuLink>
    </Container>
  )
}

export default MenuList
