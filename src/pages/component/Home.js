import React, { Component } from 'react'
import test from '../../images/img.jpg'
import style from '../style.less'

class Home extends Component{
    constructor() {
        super()
        this.state = {
            coords: {},
            img_url: '',
        }
    }
    componentDidMount() {
         // const action = {
         //    channelId: 3,
         //    channelContentList: {
         //        records: [12,23,34]
         //    }
         // }
        // const result = this.test(tState, action)
        // console.log(result.channelList[2].contentList)
        document.body.addEventListener('dragover', e => {
            e.preventDefault()
        })
        document.body.addEventListener('drop', e => {
            // debugger
            const offset = e.dataTransfer.getData("text/plain").split(',')
            console.log(e.clientX, e.clientY, 99999999)
            const origin = document.getElementById('drag1')
            origin.style.left = `${parseInt(e.clientX)}px`
            origin.style.top = `${parseInt(e.clientY)}px`
            origin.style.position = 'absolute'
            // origin.style.left = `${parseInt(offset[0])}px`
            // origin.style.top = `${parseInt(offset[1])}px`
            e.preventDefault()
        })

        // const img = document.getElementById("drag1")
        // console.log(img, 999999)
        this.drawCanvas()
    }
    getLocation = _ => {
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(this.showPosition)
        }else{
            alert("该浏览器不支持获取地理位置。")
        }
    }
    showPosition = position => {
        const latlon = `${position.coords.latitude},${position.coords.longitude}`
        this.setState({
            coords: position.coords,
            // img_url: `http://maps.googleapis.com/maps/api/staticmap?center=${latlon}&zoom=${14}&size=400x300&sensor=${false}`
        })
    }
    getFullSreen = e => {
        // html5全屏幕
        // if(document.fullscreenEnable||document.webkitFullscreenEnabled||
        //     document.mozFullScreenEnabled||document.msFullscreenEnabled){
        //     const img = document.getElementById("picture")
        //     // console.log(img)
        //     // 此处仅适用webkitRequestFullscreen
        //     if (img.webkitRequestFullscreen) {
        //         img.webkitRequestFullscreen()
        //     }
        // }
        // console.log(e.target.src, 99999999)
        // this.setState
        this.setState({ showFullPicture: true, img_url: e.target.src })
    }
    dragStart = e => {
        // console.log(document.body)
        // 单项拖拽
        // e.dataTransfer.setData('Text',e.target.id);

        // 随处拖拽
        const style = window.getComputedStyle(e.target, null)
        // console.log(style.getPropertyValue('left'), 99999999)
        // console.log(style.getPropertyValue('top'), style.getPropertyValue('left'), 99999999)
        e.dataTransfer.setData('text/plain', `${parseInt(e.clientX)},${parseInt(e.clientY)}`)
        // e.dataTransfer.setData('text/plain', `${parseInt(style.getPropertyValue('left'))},${parseInt(style.getPropertyValue('top'))}`)
        // e.dataTransfer.setData('text/plain', `${parseInt(style.getPropertyValue('left')) - e.clientX},${parseInt(style.getPropertyValue('top')) - e.clientY}`)
        // console.log(e.clientY, 99999999)
    }
    drop = e => {
        // 单项拖拽
        // e.preventDefault();
        // var data=e.dataTransfer.getData("Text");
        // console.log(document.getElementById(data).src, 999999990)
        // const test = document.createElement('img')
        // test.style.width = '400px'
        // test.style.height = '300px'
        // e.target.appendChild(test);
        // test.src = document.getElementById(data).src
        // // e.target.appendChild(document.getElementById(data));

        // 随处拖拽
        debugger
        const offset = e.dataTransfer.getData("text/plain").split(',')
        console.log(offset, 99999999)
        const origin = document.getElementById('drag1')
        origin.style.left = `${parseInt(offset[0]) + e.clientX}px`
        origin.style.top = `${parseInt(offset[1]) + e.clientY}px`
        e.preventDefault()

    }
    allowDrop = e => {
        e.preventDefault()
    }
    drawCanvas = _ => {
        const canvas = document.getElementById("canvasBox")
        const ctx = canvas.getContext('2d')
        // 矩形
        ctx.beginPath()
        const grd = ctx.createLinearGradient(0, 0, 200, 0)
        grd.addColorStop(0, 'red')
        // grd.addColorStop(0.66, 'green')
        grd.addColorStop(1, 'white')

        const grd1 = ctx.createRadialGradient(100,100, 20, 100, 100, 100)
        grd1.addColorStop(0, 'blue')
        grd1.addColorStop(1, 'orange')

        // ctx.fillStyle = grd
        ctx.fillStyle = grd1
        // ctx.fillStyle = "pink"
        ctx.fillRect(0,0,200,200);
        ctx.closePath()

        // 线条
        ctx.beginPath()
        ctx.moveTo(0, 0)
        ctx.lineTo(200, 200)
        ctx.stroke()

        // 圆形
        ctx.beginPath()
        ctx.strokeStyle = "#FFFFFF"
        ctx.arc(100, 100, 100, 0, 2*Math.PI)
        ctx.stroke()
        ctx.closePath()

        // 字体
        ctx.beginPath()
        ctx.strokeStyle = "cyan"
        ctx.font="30px Arial green"
        ctx.strokeText("Hello World", 20, 100)
        ctx.closePath()
        setTimeout(_ => {
            const canvas1 = document.getElementById("canvasBox1")
            const ctx1 = canvas1.getContext('2d')

            const img = document.getElementById("drag1")
            // const img = new Image()
            // img.src = "../../images/img.jpg"
            console.log(img, 999999)
            ctx1.drawImage(img, 0, 0, 300, 200)
        }, 1000)
    }
    render() {
        const { coords: { latitude, longitude }, img_url, showFullPicture } = this.state
        // console.log(img_url, 99999999)
        return (
             <div style={{ width: '100%', height: '100%' }}>
                 <div className={style.donut}></div>
                 <p>Home{localStorage.clickCount}</p>
                <button onClick={this.getLocation}>获取地理位置</button>
                <p>经度<span>{latitude}</span></p>
                <p>维度<span>{longitude}</span></p>
                {/*<img src={img_url} />*/}
                <img src={test} style={{width: 300, height: 200}} id="picture" onClick={this.getFullSreen}/>
                <img src={test} style={{width: 300, height: 200}} id="picture" onClick={this.getFullSreen}/>
                {showFullPicture ?
                    <div className={style['box-full']} onClick={_ => this.setState({ showFullPicture: false})}>
                        <img src={img_url} />
                    </div>
                    :
                    null
                }
                <br/>
                <br/>
                <img src={test} style={{width: 300, height: 200, left: 0, top: 500}} id="drag1" onDragStart={this.dragStart} draggable={true}/>
                <canvas id="canvasBox" width={200} height={200} style={{ border: '1px solid #000000'}}></canvas>
                <br/>
                <canvas id="canvasBox1" width={300} height={200} style={{ border: '1px solid #000000'}}></canvas>
                 {/*<div style={{width:400,height:300, background: 'red'}} onDrop={this.drop} onDragOver={this.allowDrop}>
            </div>*/}
            </div>
        )
    }
}

// const Home = React.createClass({
//     render() {
//         return (
//             <h1>Home</h1>
//         )
//     }
// })

export default Home
