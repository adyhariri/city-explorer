import React from 'react';


class Movies extends React.Component{
    render(){
        return(
            <>
            <p>{this.props.title}</p>
            <p>{this.props.overview}</p>
            <p>{this.props.average_votes}</p>
            <p>{this.props.total_votes}</p>
            <img src={this.props.image_url} alt='' />
            <p>{this.props.popularity}</p>
            <p>{this.props.released_on}</p>
            </>

        )
    }
}
export default Movies;