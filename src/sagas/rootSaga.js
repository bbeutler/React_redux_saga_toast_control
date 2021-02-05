import { all } from 'redux-saga/effects'
import toast from './toast'

// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([toast()])
}
