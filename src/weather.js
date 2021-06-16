import React from 'react';


class weather extends React.Component{
    render(){
        return(
            <>
            <p>{this.props.date}</p>
            <br/>
            <p>{this.props.des}</p>
            </>
        )
    }
}
export default weather;