import React, { Component } from 'react'

class Home extends Component{
    componentDidMount() {
         const tState = {
            channelList: [{
                "id": 1,
                "channelName": "天网侠"
            }, {
                "id": 2,
                "channelName": "sop"
            }, {
                "id": 3,
                "channelName": "新频道"
            }]
         }
         const action = {
            channelId: 3,
            channelContentList: {
                records: [12,23,34]
            }
         }
        const result = this.test(tState, action)
        console.log(result.channelList[2].contentList)
    }
    test = (tState, action) => {
        // const channelList = cloneDeep(tState.channelList)
        const { channelList } = tState
        const { channelId, channelContentList: { records } } = action
        channelList.forEach(item => {
            if (item.id === channelId) {
                item.contentList = records
            }
        })
        return tState
        // return { ...tState, channelList }
    }
    render() {
        return (
             <div>
                Home{localStorage.clickCount}
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
