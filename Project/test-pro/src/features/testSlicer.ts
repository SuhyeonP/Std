import { createAction, createSlice } from '@reduxjs/toolkit';

export const test = createSlice({
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

export const loginAction = createAction('createAction');

export const testSlicer=createSlice({
  name:'test create slice',
  initialState:{
    text:'this is test slicer'
  },
  reducers:{
    testing(){
      console.log("here is testing slicer")
    },
    endTest(state,action){
      console.log("endTest",action.payload)
    }
  }
})

export const { endTest, testing }=testSlicer.actions

export const { changeText } = test.actions
