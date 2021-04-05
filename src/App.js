import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from "@apollo/react-hooks";
import Navbar from './components/NavComponent';
import { PokeListContainer } from './containers/PokeListContainer';
import PokeDetailContainer from './containers/PokeDetailContainer';
import { MyPokeContainer, Loop } from './containers/MyPokeContainer';


function App() {
  const client = new ApolloClient({
    uri: 'https://graphql-pokeapi.vercel.app/api/graphql'
  });

  if(localStorage.getItem("owned")) {
  }
  else {
    localStorage.setItem("owned", 0);
  }

  return (
    <ApolloProvider client={client}>
    <main>
      <Router>
        <Navbar />
          <Switch>
            <Route exact path="/poke">
              <Redirect to="/poke-list-container" />
            </Route>
            <Route exact path="/poke-list-container" component={PokeListContainer} />
            <Route exact path="/poke-detail-container" component={PokeDetailContainer} />
            <Route exact path="/my-poke-container" component={MyPokeContainer} />
          </Switch>
      </Router>
    </main>
    </ApolloProvider>
  );
}

export default App;
