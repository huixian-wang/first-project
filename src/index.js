import React, { Component } from 'react';
import { render } from 'react-dom';
import { createLogger } from 'redux-logger';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Route, hashHistory, Provider, browserHistory } from 'react-redux';
import { routerReducer } from 'react-router-redux'

import reducers from './reducer/index'
import AppRouter from './router'
import action from './action/page.js'

const store = createStore(
    reducers,
    applyMiddleware(createLogger()),
)
render(
    <Provider store={store}>
        <AppRouter history={browserHistory} />
    </Provider>,
    document.getElementById('app')
);