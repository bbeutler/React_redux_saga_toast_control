// @flow
import types from '../../actions/actionTypes'
import { fromJS, Map } from 'immutable'
import { Toast } from '../../models/toast'
import { ShowToastMessageAction } from '../../actions/toast'

const initialState = fromJS({
  queue: [],
})

type Actions = ShowToastMessageAction

const toast = (state: Map = initialState, action: Actions) => {
  switch (action.type) {
    case types.PUSH_TOASTER_TO_QUEUE:
      return pushToast(state, action.toast)

    case types.SHIFT_TOASTER_FROM_QUEUE:
      return shiftToast(state)

    default:
      return state
  }
}

const pushToast = (state, toast) => {
  const q = state.get('queue')
  return state.set('queue', q.push(new Toast(toast)))
}

const shiftToast = (state, toast) => {
  const q = state.get('queue')
  return state.set('queue', q.shift())
}

export default toast
