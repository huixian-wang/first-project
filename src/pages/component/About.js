import React, { Component } from 'react'
import getJSON from '../../fetch.js'

// const testR = require('../../components/test')
// import testImport, * as testI from '../../components/test'
// import testImport, { extra } from '../../components/test'
import style from '../style.less'

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
        // setTimeout(console.log("test count of require after 1000ms", testR.extra), 1000);
        // getJSON('/profile', {id: 1})
        //     .then(data => {
        //             // console.log(data, 99999999);
        //         if(data){
        //             this.setState({ pageInfo: data.text })
        //         }
        //     })
        //     .catch(err => console.log(err))
        this.ws = new WebSocket("ws://localhost:3000")
        this.ws.onopen = event => {
            console.log('连接已建立')
            this.ws.send('data from client')
        }
        this.ws.onmessage = event => {
            var data = event.data
            // if(data.indexOf('close') !== -1){
            //     // this.ws.onclose()
            // }
            this.setState({ pageInfo: data })
        }
        this.ws.onerror = event => {
            console.log(event, 'error happened')
        }
        this.ws.onclose = event => {
            this.ws.close()
            console.log('socket has closed')
        }
    }
    uploadFile = e => {
        // console.log(e.target.value, fetch)
        // var input = document.querySelector('input[type="file"]')
        // const data = new FormData()
        // data.append('file', input.files[0])
        // data.append('name', 'jartto')
        // fetch("")
    }
    render() {
        const { pageInfo,  } = this.state
        return (
            <div>
                {pageInfo || 'empty message'}
                <div style={{borderStyle: 'solid', borderWidth: 2, borderColor: 'pink', width: 100, height: 100, padding: 20}}>
                    <div style={{height: '100%', width: '100%', border: '1px solid cyan'}}></div>
                </div>
                <div>
                    <p>only this paragraph will get the style :)</p>
                    <div className={style['BFC-container']}>
                        <div className={style['BFC-box']} style={{ float: 'left' }}>
                            我是一个左浮动的元素
                        </div>
                        <div style={{width: 'auto', height: 'auto', background: 'red', overflow: 'auto', fontSize: '1.5em', padding: '1.5em'}}>
                            我是一个没有设置浮动,
                            也没有触发 BFC 元素, width: 200px; height:200px; background: #eee;
                        </div>
                    </div>
                    <div style={{background: 'red', border: '1px solid black'}}>
                        <div style={{width: 100, height: 100, background: 'cyan', float: 'left'}}></div>
                    </div>
                    <div>
                        <input type="file" onChange={this.uploadFile} id="upload"/>
                    </div>
                </div>
            </div>
        )
    }
}
export default About
