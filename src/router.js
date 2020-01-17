import React, { Component } from 'react'
import { Router, Route, IndexRoute, Redirect, hashHistory, browserHistory, Lifecycle } from 'react-router'
import Home from './components/Home'
import TestContext from './components/testContext/Index.js'

class AppRouter extends Component {
    componentDidMount() {
    }
    routerWillLeave(nextLocation) {
    }
    render() {
        return (
             <Router history={hashHistory}>
                <Route path='/' component={Home} />
                <Route path='/context' component={TestContext} />
            </Router>
        )
    }
}

export default AppRouter