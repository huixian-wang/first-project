import React, { Component } from 'react'

// const num = localStorage.clickCount
class Debug extends Component{
    constructor(){
        super()
        this.state={
            text: "hello",
            test: "initial"
        }
    }
    handleClick = _ => {
        // this.setState({ text: "hello world"})
        console.log(this)
        let a = 1
        const arr = [1,2,3,4]
        arr.forEach(item => {
            if(item % 2 === 0){
                a++
            }
        })
        // throw new Exception()
        // try{
        //     throw new Exception()
        // }catch(e){
        //     console.log(e)
        // }
        this.changeText(a)

        // this.testClosure()()
    }

    changeText = time => {
        this.setState({ text: "hello world" + time})
    }

    testKeyPress() {
        this.changeText()
        console.log('enter')
    }
    testKeyPress2() {
        console.log('enter')
    }

    createDom = _ => {
        const box = document.getElementById("domBox")
        const child = document.createElement('div')
        child.innerHTML = "new"
        box.appendChild(child)
    }

    testClosure = _ => {
        const text = "closure"
        return () => {
            console.log(text)
        }
    }


    render() {
        // console.log(this.props, 8888888888)
        const { text } = this.state
        return (
             <div>
                <button onClick={this.handleClick}>点击</button><br/>
                <span>{text}</span><br/>
                <input type="text" onKeyPress={this.testKeyPress}/><br/>
                <input type="text" onKeyPress={this.testKeyPress2}/><br/>
                <button onClick={this.createDom}>新建节点</button><br/>
                <div id="domBox"></div>
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

export default Debug
