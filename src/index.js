// require('./style.css')
// // require('./images/test.jpg')
// document.onload = _ => {
//     const app = document.getElementById('app')
//     // app.
//     console.log(app);
// }
// console.log('enter')
// console.log('hahhahahhaha')
// console.log('heieheiheiei')

import React, { Component } from 'react';
import { render } from 'react-dom';
import { createLogger } from 'redux-logger';
// import { createLogger } from 'redux-logger';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Route, hashHistory, Provider, browserHistory } from 'react-redux';
import { routerReducer } from 'react-router-redux'
import Page1 from './pages/Page'
import reducers from './reducer/index'
import AppRouter from './router'
import action from './action/page.js'
// import todo from './components/Todo.js'
// export default class App extends Component {
//     render() {
//         return (
//             <div>Hello React!</div>
//         )
//     }
// }

const store = createStore(
    reducers,
    applyMiddleware(createLogger()),
    // combineReducers({ reducers, routerReducer }),
    // { test: "" },
    // enhancer,
)
// console.log(store, 'store')
// 封装dispatch --test
// let next = store.dispatch
// store.dispatch = action => {
//     console.log(action)
//     next(action)
//     console.log(store.getState())
// }


// let unsubscribe = store.subscribe(() =>
//   console.log(store.getState(), 9999999)
// )
// unsubscribe()
// store.subscribe(() =>
//     console.log(store.getState(), 8888888)
// )
// store.subscribe(() =>
//     console.log(store.getState(), 777777)
// )


// store.dispatch(action.changeText('test for redux-action'))
// store.dispatch(action.changeText('test for redux-action will stop'))
// console.log(store.getState(), 99999999)
render(
    <Provider store={store}>
        <AppRouter history={browserHistory} />
    </Provider>,
    // <Page1 />,
    // <AppRouter history={browserHistory}/>,
    document.getElementById('app')
);