import React, { useEffect } from 'react';
import {
  BrowserRouter, Link, Route, Switch,
} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import RspImg from './components/RspImg';
import { createAction } from '@reduxjs/toolkit';
import { loginAction} from './saga/rootSaga';

const App = (): JSX.Element => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loginAction());
  }, [dispatch])
  return (
    <BrowserRouter>
      <>
        <div>
          <Link to='/rsp'>rock</Link>
          <Link to='/rsp/rspCode?rspCode=1'>paper</Link>
          <Link to='/rsp/rspCode?rspCode=2'>scissor</Link>
        </div>
      </>
      <>
        <Switch>
          <Route exact path='/rsp' component={RspImg} />
          <Route path='/rsp/:rspCode' render={(): JSX.Element => <RspImg />} />
        </Switch>
      </>
    </BrowserRouter>
  );
};

export default App;
