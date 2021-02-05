// @flow
import * as React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Header from '../components/layout/Header'
import { MainWidthHeaderSiderBar } from '../components/layout/Main'
import SideBar from '../components/layout/SideBar'
// import * as actions from '../actions/name';
import styled from 'styled-components'
import { showToastMessage } from '../actions/toast'
import moment from 'moment'
import ToastContainer from '../components/ToastContainer'

const Button = styled.button`
  padding: 0.5rem;
  margin: 1rem 0;
  border: none;
  border-radius: 4px;
  background-color: palevioletred;
  color: #fff;
  font-weight: bold;

  &:hover {
    cursor: pointer;
  }
`

type Props = {}
type State = {}

class Home extends React.Component {
  props: Props
  state: State

  static defaultProps = {}

  constructor(props: Props) {
    super(props)
    this.state = {}
  }

  showToastMessage() {
    this.props.showToastMessage({
      title: 'current time',
      content: moment().format('YYYY-MM-DD HH:mm:ss'),
    })
  }

  render() {
    return (
      <div>
        <Header />
        <SideBar />
        <ToastContainer />
        <MainWidthHeaderSiderBar>
          <Button onClick={this.showToastMessage.bind(this)}>
            click to see current time
          </Button>
        </MainWidthHeaderSiderBar>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  // toastQueue: state.getIn(['toast', 'queue']),
})

const mapDispatchToProps = (dispatch: Function) =>
  bindActionCreators(
    Object.assign(
      {},
      {
        showToastMessage,
      },
    ),
    dispatch,
  )

export default connect(mapStateToProps, mapDispatchToProps)(Home)
