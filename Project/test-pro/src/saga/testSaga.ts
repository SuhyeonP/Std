import { createAction, PayloadAction } from '@reduxjs/toolkit';
import { changeText, endTest, loginAction, testSlicer,testing } from '../features/testSlicer';
import { all, AllEffect, ForkEffect, takeLatest, put, call, fork } from '@redux-saga/core/effects';

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

function* watchLoginUser() {
  //console.log('asdf')
  yield takeLatest(loginAction, loginUser);
}
function testF(){
  console.log()
  return "test"
}

function * testG(){
  console.log('testG')
  const result=yield call(testF);
  try{
    console.log(result,"here is saga")
    yield put(testing())
  }catch(err){
    console.error(err)
  }
}

function * testSlice(){
  console.log('test Slice saga')
  yield takeLatest('testSlicer/testing',testG)
}

export default function* testSaga():Generator<AllEffect<ForkEffect<void>>,void,unknown>{
  yield all([
    fork(watchLoginUser),
    fork(testSlice),
  ])
}
