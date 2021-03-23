import {combineReducers} from 'redux';
import userSlice from '../features/userSlice'

const reducer=combineReducers({
  user: userSlice.reducer,
})

export default reducer;
