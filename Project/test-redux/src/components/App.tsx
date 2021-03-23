import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logIn } from '../features/user';
import userSlice from '../features/userSlice';

const App = (): JSX.Element => {
  // @ts-ignore
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [userData,setUserData]=useState<string>('')

  const Logout=useCallback(()=>{
    // @ts-ignore
    dispatch(userSlice.actions.logOut());
  },[])

  const LogINN=useCallback(()=>{
    // @ts-ignore
    // dispatch(logIn({
    //   userId:'hi'
    // }))
    dispatch(userSlice.actions.logInn({
      userId:'hi test'
    }))
  },[])

  useEffect(()=>{
    if(user.data){
      setUserData(user.data.userId)
    }
  },[user])

  return (
    <div>
      {user.data
        ?
        <div>
          now {userData} login
          <br/>
          <button type='button' onClick={Logout}>logout</button>
        </div>
        :
        <div>
          <button type="button" onClick={LogINN}>login</button>
        </div>
      }
    </div>
  );
};

export default App;
