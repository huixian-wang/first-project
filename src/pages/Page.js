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
import action from "../action/page";

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
    componentDidMount(){
        // console.log(this.props.dispatch)
        // this.props.dispatch({type: CHANGE_TEXT, text: "test"})
        this.props.dispatch({type: 'CHANGE_TEXT', text: 123})
        // this.props.dispatch(action.changeText('test for redux-action will stop'))
        // console.log(this.props, 77777777)
    }
    render() {
        const { text } = this.props
        return (
            <div className={style.container}>
                <h3>HomePage-{text}</h3>
                <ul>
                    {/*<li><IndexLink to="/" activeClassName={style.active}>HomePage</IndexLink></li>*/}
                    {/*<li><Link to="/about" activeClassName={style.active}>About</Link></li>*/}
                    {/*<li><Link to="/topics" activeClassName={style.active}>Iframe</Link></li>*/}
                    {/*<li><Link to="/animate" activeClassName={style.active}>Animate</Link></li>*/}
                    {/*<li><Link to="/carousel" activeClassName={style.active}>Carousel</Link></li>*/}
                    {/*<li><Link to="/debugger" activeClassName={style.active}>testDebug</Link></li>*/}
                    {/*<li><Link to="/highOrder" activeClassName={style.active}>TestHOCom</Link></li>*/}
                    {/*<li><Link to="/wrapped" activeClassName={style.active}>Wrapped</Link></li>*/}
                    {/*<li><Link to="/houdini" activeClassName={style.active}>Houdini</Link></li>*/}
                    {/* <li><Link to="/skeleton" activeClassName={style.active}>骨架屏</Link></li>*/}
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