import React, { Component } from 'react'

import style from './style.less'
function operateProps(WrappedComponent){
    return function newRender(props){
        return class HOC extends Component {
            constructor(){
                super()
                this.state={
                    dom: 'init'
                }
                this.wrappedInstance = null
            }
            componentDidMount(){
                // this.getRef()
            }
            getWrappedInstance = () => {
                return this.wrappedInstance
            }
            setWrappedInstance = dom => {
                this.wrappedInstance = dom
            }
            render(){
                const { value, ...otherProps } = props
                return <WrappedComponent {...otherProps} ref={this.setWrappedInstance}/>
            }
        }
    }
}

export default operateProps
