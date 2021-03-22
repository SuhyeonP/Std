import {
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import { AnyAction, Dispatch } from 'redux';
import rootReducer from './reducers/index';
import createSagaMiddleware from '@redux-saga/core';
import rootSaga from './saga/rootSaga';

const customMiddle = () => (next: Dispatch<AnyAction>) => (action: AnyAction): void => {
  console.log('custom middleware')
  next(action);
};
const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer:  rootReducer,
  middleware: [...getDefaultMiddleware({ thunk: false }), customMiddle, sagaMiddleware ],
  devTools: process.env.NODE_ENV !== 'production',
});

sagaMiddleware.run(rootSaga)

export default store;
