import React, { Component } from 'react'
import style from '../style.less'

class Animate extends Component{
    constructor(){
        super()
        this.state={
        }
    }

    render() {
        return (
            <div>
                <div className={style.animation}>
                    <div style={{width: 100, height: 100, background: 'lightBlue'}} className={style.move}></div>
                </div>
                <div className={style.hidden}>一杯敬朝阳 一杯敬月光</div>
            </div>
        )
    }
}

export default Animate
