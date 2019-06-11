import React, { Component } from 'react'

import style from './style.less'
import Wrapped from './Wrapped'
import operateProps from './HighOrder'
const NewComponent = operateProps(Wrapped)({valule: 123, title: 'test'})

class TestHOCCom extends Component{
    constructor(props){
        super(props)
        this.state = {
        }
    }
    componentDidMount() {
        // this.props.dispatch({type: 'change_prop', text: 123})
        // console.log(this.props, 77777)
        this.NewComponent = operateProps(Wrapped)(this.props)
    }
    getComponent = _ => {
        console.log(this.refs.child.getWrappedInstance(), 'HOC')
    }
    render() {
        // const NewComponent = this.NewComponent ? <this.NewComponent ref="child"/> : null
        return (
            <div className={style.container}>
                <input type="button" className={style.field} />
                <p>顶层容器</p>
                <NewComponent ref="child" />
                <button onClick={this.getComponent}>get ref</button>
                {/*<this.NewComponent />*/}
                {/*<Wrapped />*/}
                {/*{operateProps(Wrapped)}*/}
            </div>
        )
    }
}

export default TestHOCCom


// import React, { Component } from 'react'
// import Wrapped from './Wrapped'
//
// function HOC(WrappedComponent){
//     return class HOC extends Component {
//         render(){
//             const newProps = {type:'HOC'};
//             return <WrappedComponent {...this.props} {...newProps}/>
//         }
//     }
//     // return function newRender(props){
//     //     return <WrappedComponent />
//     // }
// }
//
// class OriginComponent extends Component {
//     render(){
//         return <div>这是原始组件</div>
//     }
// }
//
// const NewComponent = HOC(OriginComponent)
//
// class TestHOCCom extends Component{
//     constructor(){
//         super()
//         this.state = {
//         }
//     }
//     render() {
//         // console.log(NewComponent, 9999999)
//         return (
//             <div>
//                 <p>顶层容器</p>
//                 <NewComponent />
//             </div>
//         )
//     }
// }
// export default TestHOCCom
