import React from 'react';
import Movies from './Movies';

class  Movie extends React.Component {
    render(){
        return(
            <>
            {this.props.data.map((item)=>(
                
                <Movies title={item.title} overview={item.overview} average_votes={item.average_votes} total_votes={item.total_votes} image_url={item.image_url} popularity={item.popularity} released_on={item.released_on}/>
            ))}
            </>
        )
    }
}
export default Movie;