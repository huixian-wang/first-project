import React, { Component } from 'react'
import { Router, Route, IndexRoute, Redirect, hashHistory, browserHistory, Lifecycle } from 'react-router'
// import {  } from 'react-router'
import Page from './pages/Page'
import About from './pages/component/About'
import Topics from './pages/component/Topics'
import Home from './pages/component/Home'
import Animate from './pages/component/Animate'
import Carousel from './pages/component/Carousel'
import Debugger from './pages/component/Debugger'
import TestHOCCom from './pages/highOrderCom/TestHOCCom'
import Wrapped from './pages/container/Wrapped'
import Houdini from './pages/houdini/Index'

import Skeleton from './pages/skeleton/Index'

import TestHttp from './pages/component/TestHttp'
import DiffText from './pages/component/DiffText'

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
                    {/*<IndexRoute component={Skeleton} />*/}
                    {/*<Route path='about' component={Houdini} />*/}
                    {/*<Route path='animate' component={Animate} />*/}
                    {/*<Route path='topics' component={Topics} />carousel*/}
                    {/*<Route path='carousel' component={Carousel} />*/}
                    {/*<Route path='debugger' component={Debugger} />*/}
                    {/*<Route path='wrapped' component={TestHOCCom} />*/}
                    {/*<Route path='highOrder' component={Wrapped} />*/}
                    {/*<Route path='houdini' component={Houdini} />*/}
                    {/*<Redirect from='about' to='topics' />*/}

                    {/*<Route path='skeleton' component={Skeleton} />*/}

                    <Route path='testhttp' component={TestHttp} />
                    <Route path='diffText' component={DiffText} />
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