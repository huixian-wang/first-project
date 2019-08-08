import React from 'react'

class Content extends React.PureComponent{
    render(){
        const { time } = this.props
        return (
            <div>
                content: {time}
            </div>
        )
    }
}
export default Content

// function Content(){
//     console.log('child is rendering');
//     return (
//         <div>
//             content
//         </div>
//     )
// }

// export default React.memo(Content)