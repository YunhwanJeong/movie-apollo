import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache()
});

ReactDOM.render(<App />, document.getElementById('root'));

