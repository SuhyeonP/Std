import { all, AllEffect, fork, ForkEffect } from '@redux-saga/core/effects';
import testSaga from './testSaga';


export default function* rootSaga(): Generator<
  AllEffect<ForkEffect<void>>,
  void,
  unknown
  > {
  yield all([
    fork(testSaga)
  ]);
}
