import React, { Component } from 'react'

import style from './style.less'
import { CheckerboardPainter } from './paint'

class Houdini extends Component{
    constructor(props){
        super(props)
        this.state = {
        }
    }
    componentDidMount() {
        console.log(CSS.paintWorklet)
        // CSS.paintWorklet.addModule(CheckerboardPainter)
    }
    render() {
        return (
            <div className={style.container}>
            </div>
        )
    }
}

export default Houdini

