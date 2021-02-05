// @flow
import * as React from 'react'
import styled from 'styled-components'
import styles from '../styles'

type Props = {}

const Container = styled.div`
  width: ${styles.size.toastWidth};
  padding: 0.7rem 1rem;
  font-size: 1rem;
  letter-spacing: -1px;
  background-color: #fefefe;
  border-radius: 4px;
  margin-bottom: 1rem;
  box-shadow: 0.5px 0.5px 5px rgba(0, 0, 0, 0.3);
`

const Title = styled.div`
  font-weight: bold;
  font-size: 1em;
`

const Content = styled.div`font-size: 0.9em;`

function ToastMessage(props: Props) {
  const { title, content } = props
  return (
    <Container>
      {title &&
        <Title>
          {title}
        </Title>}
      <Content>
        {content}
      </Content>
    </Container>
  )
}

export default ToastMessage
