import React, { Component } from 'react'

import { connect } from 'react-redux'
import { createSelector } from 'reselect'
import action from "../../action/page";
// import style from './style.less'


class Wrapped extends Component{
    constructor(props){
        super(props)
        this.state = {
        }
    }
    componentDidMount() {
        // console.log(this.props, 8888888)

    }
    render() {
        return (
            <div>
                被包裹的组件
            </div>
        )
    }
}
export default Wrapped
