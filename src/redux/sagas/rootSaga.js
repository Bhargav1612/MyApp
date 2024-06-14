// src/redux/sagas/index.js
import { all } from 'redux-saga/effects';
import authSaga from './authSaga';
import applicationSaga from './applicationSaga';

export default function* rootSaga() {
  yield all([
    authSaga(),
    applicationSaga(),
  ]);
}
