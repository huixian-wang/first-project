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
import { createStore, combineReducers } from 'redux';
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
    reducers
    // combineReducers({ reducers, routerReducer }),
    // { test: "" },
    // enhancer,
)
// const unsubscribe = store.subscribe(() =>
//   console.log(store.getState())
// )
store.dispatch(action.changeText('test for redux-action'))
store.dispatch(action.changeText('test for redux-action will stop'))
// unsubscribe()
// console.log(store.getState(), 99999999)
render(
    <Provider store={store}>
        <AppRouter history={browserHistory} />
    </Provider>,
    // <Page1 />,
    // <AppRouter history={browserHistory}/>,
    document.getElementById('app')
);