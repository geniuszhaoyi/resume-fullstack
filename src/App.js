import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import './App.css';

import Home from './components/Home'
import NavBar from './components/NavBar'
import Resume from './components/Resume'
import ColorfulResume from './components/ColorfulResume'
import About from './components/About'

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/color">
          <ColorfulResume />
        </Route>
        <Route path="/resume">
          <Resume />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
