import { combineReducers } from '@reduxjs/toolkit';
import { test,testSlicer } from '../features/testSlicer';

const rootReducer = combineReducers({
  test : test.reducer,
});

export default rootReducer;
