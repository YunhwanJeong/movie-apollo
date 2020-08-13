import React from 'react';
import { Route } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

import Home from './routes/Home';
import Detail from './routes/Detail';
import client from './graphql/apollo';

const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing:border-box;
  }

  html {
    font-size: 62.5%;
    font-family: 'Open Sans', sans-serif;
  }

  a {
    text-decoration:none;
    color:inherit;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <ApolloProvider client={client}>
          <Route path="/" exact component={Home}></Route>
          <Route path="/:id" component={Detail}></Route>
      </ApolloProvider>
    </>
  );
};

export default App;
