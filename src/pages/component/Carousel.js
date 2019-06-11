import React, { Component } from 'react'
import style from '../style.less'
import test1 from '../../images/img.jpg'
import test2 from '../../images/test.jpg'
import test3 from '../../images/2.jpg'
import test4 from '../../images/3.jpg'

let timer = null
    class Carousel extends Component{
    constructor(){
        super()
        this.state={
        }
    }
    componentDidMount (){
        // const
        // if()
        this.movePicture()
        // timer = setTimeout(_ => this.movePicture(), 3)
    }

    componentWillUnmount() {
        // clearTimeout(this.timer)
    }

    movePicture = _ => {
        // console.log('enter')
        // const imgBox = document.getElementById("imgBox")
        // const imgList = document.getElementById("imgList")
        // const boxP = imgBox.offsetLeft
        // const startP = imgList.offsetLeft
        // const endP = parseInt(imgList.style.width) + startP
        // if(parseInt(endP) < boxP){
        //     imgList.style.left = '0px'
        // }else{
        //     imgList.style.left = `${imgList.offsetLeft - 300}px`
        // }
        // timer = setTimeout(_ => this.movePicture(), 1000)
    }

    render() {
        return (
            <div>
                <div className={style['picBox']} id="imgBox">
                    <div style={{position: 'absolute', width: 1200, left: 300}} id="imgList">
                        <img src={test1} alt="" className={style.pic} />
                        <img src={test2} alt="" className={style.pic} />
                        <img src={test3} alt="" className={style.pic} />
                        <img src={test4} alt="" className={style.pic} />
                    </div>
                </div>
                <div className={style.cssBox}>
                    <h1 className={style.font}>123232</h1>
                </div>
                <div className={style['background-clip']}>clip</div>
            </div>
        )
    }
}

export default Carousel
