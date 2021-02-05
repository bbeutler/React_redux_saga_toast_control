import types from '../../actions/actionTypes'
import { delay } from 'redux-saga'
import { all, put, takeEvery } from 'redux-saga/effects'
import { ShowToastMessageAction } from '../../actions/toast'

function* show() {
  yield takeEvery(types.SHOW_TOASTER, toastQueue)
}

function* toastQueue(action: ShowToastMessageAction) {
  yield put({
    type: types.PUSH_TOASTER_TO_QUEUE,
    toast: action.toast,
  })

  yield delay(3500)

  yield put({
    type: types.SHIFT_TOASTER_FROM_QUEUE,
  })
}

export default function* data() {
  yield all([show()])
}
