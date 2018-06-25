import React, { Component } from 'react'
import getJSON from '../../fetch.js'

const testR = require('../../components/test')
// import testImport, * as testI from '../../components/test'
// import testImport, { extra } from '../../components/test'

class About extends Component{
    constructor(){
        super()
        this.state = {
            pageInfo: '',
        }
        this.xhr = ''
    }
    componentDidMount() {
        // extra = "234"
        // setTimeout(console.log("test count of import after 1000ms", extra), 1000);
        setTimeout(console.log("test count of require after 1000ms", testR.extra), 1000);
        getJSON('/profile', {id: 1})
            .then(data => {
                    // console.log(data, 99999999);
                if(data){
                    this.setState({ pageInfo: data.text })
                }
            })
            .catch(err => console.log(err))
    }
    render() {
        const { pageInfo,  } = this.state
        return (
            <div>
                {pageInfo || 'empty message'}
            </div>
        )
    }
}
export default About
