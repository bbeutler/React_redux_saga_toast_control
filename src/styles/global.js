import { injectGlobal } from 'styled-components'
import { normalize } from 'polished'
import { baseFontSize, baseLineHeight } from './typography'

const drawOutline = () => {
  let isDebug
  // isDebug = true
  return process.env.NODE_ENV !== 'production' && isDebug
    ? `
      * {
        outline: 1px solid palevioletred;
      }
    `
    : ''
}

// eslint-disable-next-line
injectGlobal`
  ${drawOutline()}
  ${normalize()}

  html {
    font-size: ${baseFontSize};
    line-height: ${baseLineHeight};
  }

  * {
    box-sizing: border-box;
  }

  body {
    position: relative;
    margin: 0;
    padding: 0;
    background-color: #fafafa;
  }

  ol,
  ul {
    margin: 0;
  }

  li {
    list-style: none;
  }

  input[type=text] {
    ime-mode: desativated; ${/* 한글 자판 표시 */ ''}
  }

  input[type=passwrod] {
    ime-mode: auto;
  }

  button {
    background: none;
    border: none;
  }


`