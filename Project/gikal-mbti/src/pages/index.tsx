import React from 'react';
import { MainImg, GoTest, Spacer } from '@/component/styles';
import DefaultLayout from '../component/Layout/DefaultLayout';

const Home = ():JSX.Element => (
  <DefaultLayout title='귀멸의 칼날'>
    <MainImg src='/images/main.png' alt='main img' />
    <Spacer />
    <GoTest href='/question'>Lets check</GoTest>
  </DefaultLayout>
);

export default Home;
