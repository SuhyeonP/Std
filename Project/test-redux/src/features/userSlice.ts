import {createSlice} from '@reduxjs/toolkit';
import { logIn } from './user'

interface UserData{
  userId:string
}


interface Init{
  isLoggingIn?:boolean;
  data?:any;
  error?:any;
  user?:UserData
}

const initialState: Init = {
  isLoggingIn: false,
  data: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logOut(state, action) {
      console.log(state, typeof state)
      state.data = null;
    },
    logInn(state,action) {
      state.data=action.payload
    },
    logInSuccess(state,action) {
      state.user=action.payload
    }
  },
  extraReducers: (builder) => builder
    .addCase(logIn.pending, (state, action) => {
      state.data = null;
      state.isLoggingIn = true;
    })
    .addCase(logIn.fulfilled, (state, action) => {
      state.data = action.payload;
      state.isLoggingIn = false;
    })
    .addCase(logIn.rejected, (state, action) => {
      state.error = action.payload;
    })
})
export const { logOut, logInn, logInSuccess} = userSlice.actions;

export default userSlice;
