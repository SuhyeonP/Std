import React, { ReactNode } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { MainTitle } from '@/component/styles';
import { Container } from './styles';

type Props = {
  children: ReactNode
  title: string
}

const DefaultLayout = ({ children, title }:Props):JSX.Element => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
    <Container>
      <Link href='/'>
        <a><MainTitle>귀멸의 칼날 MBTI</MainTitle></a>
      </Link>
      {children}
    </Container>
  </>
);

export default DefaultLayout;
