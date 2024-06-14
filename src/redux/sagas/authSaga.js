// import { takeLatest, put } from 'redux-saga/effects';
// import { LOGIN_USER, loginSuccess, loginFailure } from '../actions/authActions';

// function* handleLogin(action) {
//   try {
//     const { username, password, userType } = action.payload;
//     // Simulate API call
//     if ((userType === 'admin' && username === 'Admin' && password === '123') || userType === 'user') {
//       yield put(loginSuccess({ username, userType }));
//     } else {
//       throw new Error('Invalid credentials');
//     }
//   } catch (error) {
//     yield put(loginFailure(error.message));
//   }
// }

// function* authSaga() {
//   yield takeLatest(LOGIN_USER, handleLogin);
// }

// export default authSaga;

import { takeLatest, put } from 'redux-saga/effects';
import { LOGIN_USER, loginSuccess, loginFailure } from '../actions/authActions';

function* handleLogin(action) {
  try {
    const { username, password, userType } = action.payload;
    // Simulate API call
    if (userType === 'admin' && username === 'Admin' && password === '123') {
      yield put(loginSuccess({ username, userType }));
    } else if (userType === 'user' && username.length >= 6 && password.length >= 3 && password.length <= 5) {
      yield put(loginSuccess({ username, userType }));
    } else {
      throw new Error('Invalid credentials');
    }
  } catch (error) {
    yield put(loginFailure(error.message));
  }
}

function* authSaga() {
  yield takeLatest(LOGIN_USER, handleLogin);
}

export default authSaga;
