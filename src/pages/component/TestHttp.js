import React, { Component } from 'react'
import getJSON from '../../fetch.js'
const serverUrl = 'http://172.16.63.201:3001'
class TestHttp extends Component{
    constructor(props){
        super(props)
        this.state = {
            list: [],
            name: 'epmty'
        }
    }
    componentDidMount = _ => {
        console.log('enter')
        const url = `${serverUrl}/getAnimal`
        getJSON(url, 'POST')
            .then(data => {
                this.setState({ list: JSON.parse(data) })
            })
            .catch(err => console.log(err))
    }
    render(){
        const { list } = this.state
        return (
            <div id="test" style={{ width: '100%', height: '100%' }}>
                {list.map(item =>
                    <p key={item.id}>{item.name}</p>
                )}
            </div>
        )
    }
}

export default TestHttp