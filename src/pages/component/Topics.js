import React, { Component } from 'react'
import About from './About'

// const num = localStorage.clickCount
class Topics extends Component{
    constructor(){
        super()
        this.state={
            num: sessionStorage.clickCount
        }
    }
    handleClick = _ => {
        if(Storage){
            // if(localStorage.clickCount){
            //     localStorage.clickCount = localStorage.clickCount + 1
            // }else{
            //     localStorage.clickCount = 0
            // }
            // this.setState({num: localStorage.clickCount})
            if(sessionStorage.clickCount){
                sessionStorage.clickCount = sessionStorage.clickCount + 1
            }else{
                sessionStorage.clickCount = 0
            }
            this.setState({num: sessionStorage.clickCount})
        }
        console.log(sessionStorage.clickCount, 9999999)
    }

    render() {
        // console.log(this.props, 8888888888)
        const { num } = this.state
        return (
             <div>
                 <button onClick={this.handleClick}>点击</button>
                 <span>{num}</span>
                 <iframe src="../../html/upload.html" frameBorder="0"></iframe>
            </div>
        )
    }
}

// const Topics = React.createClass({
//     render() {
//         return (
//             <h1>Topics</h1>
//         )
//     }
// })

export default Topics
