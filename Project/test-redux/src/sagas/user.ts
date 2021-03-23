import { all, fork, put, takeLatest, call } from 'redux-saga/effects';
import {delay} from '../features/user';
import userSlice from '../features/userSlice';
import {logInSuccess} from '../features/userSlice'
function login(data:object){
  return delay(500,data);
}

function * loginUser(action:{payload: any, type: string}){
  console.log('is it come saga?')
  try{
    // @ts-ignore
    const result=yield call(login, action.payload)
    console.log(result , 'it is result saga')
    // yield put(userSlice.actions.logInSuccess(result.userId))
    yield put(logInSuccess(result.userId))
  }catch(err){
    console.error(err)
  }

}

function * watchUserLogin(){
  console.log('is it come saga1?')
  yield takeLatest(userSlice.actions.logInn,loginUser)
}

export default function* userSaga() {
  yield all([
    fork(watchUserLogin)
  ]);
}
