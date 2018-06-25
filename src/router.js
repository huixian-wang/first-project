import React, { Component } from 'react'
import { Router, Route, IndexRoute, Redirect, hashHistory, browserHistory, Lifecycle } from 'react-router'
// import {  } from 'react-router'
import Page from './pages/Page'
import About from './pages/component/About'
import Topics from './pages/component/Topics'
import Home from './pages/component/Home'

// const AppRouter = props => {
//     // <Router history={hashHistory}>
//     console.log(props)
//     return (
//     <Router history={props.history}>
//         <Route path='/' component={Page}>
//             <Route path='/about' component={About} />
//             <Route path='/topics' component={Topics} />
//         </Route>
//     </Router>
// )
// }


class AppRouter extends Component {
    componentDidMount() {
        // console.log(sessionStorage)
    }
    routerWillLeave(nextLocation) {
        // console.log(nextLocation, 9999999)
    }
    render() {
        return (
             <Router history={hashHistory}>
                <Route path='/' component={Page}>
                    <IndexRoute component={Home} />
                    <Route path='about' component={About} />
                    <Route path='topics' component={Topics} />
                    <Redirect from='about' to='topics' />
                </Route>
            </Router>
        )
        // return (
        //     <div>
        //         <div className={style.wrapper}>
        //             <div className={style.left}>
        //                 0
        //             </div>
        //             <div className={style.right}>
        //                 1
        //             </div>
        //             <div className={style.left}>
        //                 0
        //             </div>
        //             <div className={style.left}>
        //                 0
        //             </div>
        //             <div className={style.right}>
        //                 1
        //             </div>
        //             <div className={style.left}>
        //                 0
        //             </div>
        //             <div className={style.left}>
        //                 0
        //             </div>
        //             <div className={style.right}>
        //                 1
        //             </div>
        //             <div className={style.left}>
        //                 0
        //             </div>
        //         </div>
        //     </div>
        // )
        // return (
        //     <div className={style.container}>
        //         <div className={style.box}>
        //             123
        //         </div>
        //         浮动，这是一个非常有意思的东西，在布局中被广泛的应用。最初，设计浮动时，其实并不是为了布局的，而是为了实现文字环绕的特效，如图：
        //     </div>
        // )
    }
}

export default AppRouter