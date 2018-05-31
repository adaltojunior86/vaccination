import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import logo from './logo.svg';
import './App.css';

const HomePage =() => <div>Home Page</div>
const UsersPage = () => <div>Users Page</div>

class App extends Component {
  render() {
    return (
      <div className="primary-layout">
      <header>
        Our React Router 4 App
      </header>
      <main>
        <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/users" component={UsersPage} />
        </Switch>
      </main>
    </div>
    );
  }
}

export default App;
