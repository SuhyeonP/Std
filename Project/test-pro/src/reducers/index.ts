import { combineReducers, createSlice } from '@reduxjs/toolkit';

const test = createSlice({
  name: 'test',
  initialState: {
    text: 'hello world',
  },
  reducers: {
    changeText(state: any, action: any): void {
      console.log(action.payload)
    },
  },
});

export const { changeText } = test.actions

// const { changeText }: any = test.reducer;
const rootReducer = combineReducers({
  test : test.reducer,
});

export default rootReducer;
