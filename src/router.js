import React, { Component } from 'react'
import { Router, Route, IndexRoute, Redirect, hashHistory, browserHistory, Lifecycle } from 'react-router'
import Home from './components/Home'

class AppRouter extends Component {
    componentDidMount() {
    }
    routerWillLeave(nextLocation) {
    }
    render() {
        return (
             <Router history={hashHistory}>
                <Route path='/' component={Home}>
                </Route>
            </Router>
        )
    }
}

export default AppRouter