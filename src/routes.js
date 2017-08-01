import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './App'
import About from './components/About'
import Repos from './components/Repos'
import Home from './components/Home'

module.exports = (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="/chuyennha" component={Home}/>
    <Route path="/chuyenvp" component={Repos}/>
    <Route path="/vantai" component={About}/>
  </Route>
);
