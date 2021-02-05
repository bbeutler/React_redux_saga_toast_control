import React, { Component } from 'react'
import { Transition } from 'react-transition-group'

const defaultDuration = 400

const defaultStyle = {
  transition: `opacity ${defaultDuration}ms ease-in-out`,
  opacity: 0,
}

const transitionStyles = {
  entering: { opacity: 0 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
}

type Props = {
  in: boolean,
  keyProp: string,
  duration: number,
  style: any,
}
type State = {}

class FadeIn extends Component {
  props: Props
  state: State
  static defaultProps = {}

  constructor(props: Props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <Transition
        key={this.props.keyProp}
        in={this.props.in}
        timeout={this.props.duration || defaultDuration}
        appear
        unmountOnExit>
        {status =>
          <div
            style={{
              ...defaultStyle,
              ...this.props.style,
              ...transitionStyles[status],
            }}>
            {this.props.children}
          </div>}
      </Transition>
    )
  }
}

export default FadeIn
