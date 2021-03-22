import { all, AllEffect, call, fork, ForkEffect, put, takeLatest } from '@redux-saga/core/effects';
import { createAction, PayloadAction } from '@reduxjs/toolkit';
import {changeText} from '../reducers/index'
function testPromise(){
  console.log("promise!")
  return new Promise(((resolve, reject) => setTimeout(()=>{resolve(true)}, 1000)))
}
function* loginUser(
  action: PayloadAction<{ text: string }>
) {
  const result = yield call(testPromise);
  console.log("saga!")
  try {
    yield put(changeText("hello"));
  } catch (err) {
    console.error(err);
  }
}

export const loginAction = createAction('createAction');

function* watchLoginUser() {
  yield takeLatest(loginAction, loginUser);
}

export default function* rootSaga(): Generator<
  AllEffect<ForkEffect<void>>,
  void,
  unknown
  > {
  yield all([fork(watchLoginUser)]);
}
