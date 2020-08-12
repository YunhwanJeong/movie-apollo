import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';

import Home from '../routes/Home';
import Detail from '../routes/Detail';
import { client } from '../index';

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Route path="/" exact component={Home}></Route>
        <Route path="/:id" component={Detail}></Route>
      </Router>
    </ApolloProvider>
  );
};

export default App;
