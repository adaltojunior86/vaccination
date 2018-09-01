import React from "react";
import ReactDOM from 'react-dom';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import Home from './pages/home';
import AddVaccine from './pages/addVaccine';
import client from "./apolloClient";

const App = () => {
  return (
    <ApolloProvider client={client}>
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/addvaccine" component={AddVaccine} />
        </Switch>
      </HashRouter>
    </ApolloProvider>
  );
}

ReactDOM.render(<App />, document.getElementById('App'))