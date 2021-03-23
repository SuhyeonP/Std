import { createSelector, createSlice } from '@reduxjs/toolkit';

interface Init{
  isLoading?:boolean;
  images?:string[];
  error?:MediaError
}

const initialState:Init = {
  isLoading: false,
  images: [],
  error: null
};

const reducers = {
  load: (state) => {
    state.isLoading = true;
  },
  loadSuccess: (state, { payload: images }) => {
    state.isLoading = false;
    state.images = images;
  },
  loadFail: (state, { payload: error }) => {
    state.isLoading = false;
    state.error = error;
  }
}

const name = 'UNSPLASH';

const slice = createSlice({
  name, initialState, reducers
});

const selectAllState = createSelector<Init,boolean, string[], MediaError,Init>(
  state => state.isLoading,
  state => state.images,
  state => state.error,
  (isLoading, images, error) => {
    return { isLoading, images, error };
  }
);

export const unsplashSelector = {
  all: state => selectAllState(state[UNSPLASH])
};

export const UNSPLASH = slice.name;
export const unsplashReducer = slice.reducer;
export const unsplashAction = slice.actions;
