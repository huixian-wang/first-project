import React, { Component } from 'react'

import style from './style.less'
import ContentLoader, { Facebook } from 'react-content-loader'

const MyLoader = _ => <ContentLoader />
const MyFacebookLoader = _ => <Facebook />
class Skeleton extends Component{
    constructor(props){
        super(props)
        this.state = {
        }
    }
    componentDidMount() {
    }
    render() {
        console.log(ContentLoader)
        return (
            <div className={style.container}>
                {/*{MyLoader()}*/}
                {/*{MyFacebookLoader()}*/}
                <ContentLoader>
                    <div>haha</div>
                </ContentLoader>
            </div>
        )
    }
}

export default Skeleton

