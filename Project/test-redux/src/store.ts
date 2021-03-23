import {
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
// import { AnyAction, Dispatch } from 'redux';
import createSagaMiddleware from '@redux-saga/core';
import reducer from './reducers';
import rootSaga from './sagas';

// const customMiddle = () => (next: Dispatch<AnyAction>) => (action: AnyAction): void => {
//   console.log('here is store in custom middleWare')
//   next(action);
// };

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer,
  middleware: [sagaMiddleware,...getDefaultMiddleware()]
});

sagaMiddleware.run(rootSaga)

export default store;
