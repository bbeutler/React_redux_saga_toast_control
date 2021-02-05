// @flow
import * as React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import styled from 'styled-components'
// import * as actions from '../actions/name';
import ToastMessage from './ToastMessage'
import { Toast } from '../models/toast'
import TransitionGroup from 'react-transition-group/TransitionGroup'
import FadeIn from '../wrapper/FadeIn'

const Container = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0);
  top: 10px;
  right: 10px;
`

type Props = {}
type State = {}

class ToasterContainer extends React.PureComponent {
  props: Props
  state: State

  static defaultProps = {}

  constructor(props: Props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <Container>
        <TransitionGroup appear>
          {this.props.toastQueue.map((toast: Toast, i) =>
            <FadeIn keyProp={i} key={i} duration={300}>
              <ToastMessage title={toast.title} content={toast.content} />
            </FadeIn>,
          )}
        </TransitionGroup>
      </Container>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  toastQueue: state.getIn(['toast', 'queue']),
})

const mapDispatchToProps = (dispatch: Function) =>
  bindActionCreators(
    Object.assign(
      {},
      // actions,
    ),
    dispatch,
  )

export default connect(mapStateToProps, mapDispatchToProps)(ToasterContainer)
