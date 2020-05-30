import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import './App.css';

import Home from './components/Home'
import NavBar from './components/NavBar'

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/about">
          <div>about</div>
        </Route>
        <Route path="/users">
          <div>users</div>
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
