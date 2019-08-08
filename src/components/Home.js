import React from 'react'
import ReactDom from 'react-dom'
import moment from 'moment'
import { connect } from 'react-redux'

import Content from './Content'
import WrapperButton from './WrapperButton.js'
import WrapperForm from './WrapperForm.js'

class Home extends React.Component{
    state = {
        time: moment().format('YYYY-MM-DD HH:mm:ss'),
    }
    componentDidMount = _ => {
        this.interval = setInterval(_ => {
            this.setState({ time: moment().format('YYYY-MM-DD HH:mm:ss') })
        }, 1000)
        // const parent = ReactDom.findDOMNode(this)
        // const child = parent.querySelector('p')
        // parent.addEventListener('click', this.clickDomContainer, false)
        // child.addEventListener('click', this.clickDomChild, false)
    }
    componentWillUnMount = _ => {
        clearInterval(this.interval)
    }
    clickDomContainer = e => {
        // console.log('click dom container')
        console.log('capture: click dom container')
    }
    clickDomChild= e => {
        e.stopProagation()
        // console.log(e)
        console.log('bubble: click dom child')
    }
    clickContainer = e => {
        console.log('capture: click react container')
    }
    clickChild= e => {
        // console.log(e, e.nativeEvent)
        console.log('bubble: click react child')
    }
    render(){
        const [ date, time ] = this.state.time.split(' ')
        return (
            <div>
                <p>{date}</p>
                <Content time={time} />
                <br />
                <br />
                <br />
                <br />
                <WrapperButton />
                <WrapperForm />
            </div>
        )
    }
}

export default Home
// export default connect(
//     state => state.Home
// )(Home)