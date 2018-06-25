// React、ReactDom
import React, { Component } from 'react';
import { render } from 'react-dom';
import { Link, IndexLink } from 'react-router'
import { connect } from 'react-redux'
import { createSelector } from 'reselect'

import style from './style.less'
import Home from './component/Home'
import About from './component/About'
import Topics from './component/Topics'

const getState = (state) => {
    return {
        ...state.page
    }
}

const selectors = createSelector(
    [getState],
    (state) => {
        return state
    }
)

class Page extends Component {
    render() {
        // console.log(this.props, 77777777)
        const { text } = this.props
        return (
            <div className={style.container}>
                <h3>HomePage-{text}</h3>
                <ul>
                    <li><IndexLink to="/" activeClassName={style.active}>Home</IndexLink></li>
                    <li><Link to="/about" activeClassName={style.active}>About</Link></li>
                    <li><Link to="/topics" activeClassName={style.active}>Topics</Link></li>
                </ul>
                {this.props.children}
            </div>
        )
    }
}
Page = connect(getState)(Page)
export default Page
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