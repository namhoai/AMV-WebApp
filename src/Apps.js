/**
 * Created by namvh on 28/07/2017.
 */
import React from 'react'
import { render } from 'react-dom'
import { IndexRoute, Route, browserHistory } from 'react-router'
import App from './App'
import About from './components/About'
import Repos from './components/Repos'
import Repo from './components/Repo'
import Home from './components/Home'

export default React.createClass({
    render() {
        return (
            <Route path="/" component={App}>
                <IndexRoute component={Home}/>
                <Route path="/repos" component={Repos}>
                    <Route path="/repos/:userName/:repoName" component={Repo}/>
                </Route>
                <Route path="/about" component={About}/>
            </Route>
        );
    }
})
