import React from 'react';
import { AppProps } from 'next/app';
import '../globalStyles.css';

const App = ({ Component, pageProps }: AppProps): JSX.Element => (
  <Component {...pageProps} />
);

export default App;
