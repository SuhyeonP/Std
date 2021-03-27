import { combineReducers } from 'redux';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { recipesSlice } from './recipe';

const reducer = combineReducers({
  recipe:recipesSlice.reducer
});

const store = configureStore({
  reducer,
  middleware: [...getDefaultMiddleware()],
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof reducer>;
export default store;
