import { createAsyncThunk } from '@reduxjs/toolkit'

export const delay = (time:number, value:any) => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(value);
  }, time);
});

export const logIn = createAsyncThunk('user/logIn',async()=>{
  return await delay(500,{
    userId:1,
    nickname:'test'
  })
})
