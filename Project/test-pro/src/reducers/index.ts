import { combineReducers } from '@reduxjs/toolkit';
import { test } from '../features/testSlicer';

const rootReducer = combineReducers({
  test : test.reducer,
});

export default rootReducer;
