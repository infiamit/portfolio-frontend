import React, { Component } from 'react';
import './App.css';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { InMemoryCache } from "apollo-boost";
import { Home } from './pages/index'
import styled from 'styled-components';

const client = new ApolloClient({
  uri: 'https://portfolio-backendv2.herokuapp.com/public-graphql',
  cache: new InMemoryCache(),
});

const Container = styled.div`
  width:100%; 
  height: calc(100vh - 69px);
`
class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Container>

          < Home />

        </Container>

      </ApolloProvider>
    );
  }
}
export default App;