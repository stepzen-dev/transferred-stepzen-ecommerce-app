import React from 'react';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ReactDOM from 'react-dom';

import Category from './pages/Category';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Product from './pages/Product';
import Search from './pages/Search';

import './global.scss';

const { REACT_APP_GRAPHQL_API_KEY, REACT_APP_GRAPHQL_ENDPOINT } = process.env;

const client = new ApolloClient({
  headers: {
    Authorization: `Apikey ${REACT_APP_GRAPHQL_API_KEY}`,
  },
  uri: REACT_APP_GRAPHQL_ENDPOINT,
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Router>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/category/:categoryId" component={Category} exact />
          <Route path="/product/:productId" component={Product} exact />
          <Route path="/search" component={Search} exact />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
