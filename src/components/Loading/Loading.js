import React from 'react'
import DotLoader from 'react-spinners/DotLoader'

const Loading = () => {
    return (
        <div style={{position: "fixed", top: '50%',left:'50%', transform: "translate(-50%,-50%)"}}>
            <DotLoader 
                size={100}
                color={"#000"}
                // loading={this.state.loading}
            />
        </div>
    )
}

export default Loading
