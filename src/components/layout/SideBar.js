// @flow
import React /* Component */ from 'react'
import styled from 'styled-components'
import styles from '../../styles'
import MenuList from './MenuList'

const Aside = styled.aside`
  position: absolute;
  top: ${styles.size.headerHeight};
  left: 0;
  width: ${styles.size.sideBarWidth};
  min-height: 100vh;
  border-right: 1px solid #ccc;
  padding: 1rem;
`

const SideBar = () => {
  return (
    <Aside>
      <MenuList />
    </Aside>
  )
}

export default SideBar
