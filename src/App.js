import React from 'react';
import axios from 'axios';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      locationData:'',
      errorMessage:'',
      displayErrMes:false,
      displayImg:false
    }
  }
  getLoc= async (event)=>{
    event.preventDefault();
    let search=event.target.search.value;
    console.log(search);
    let locationUrl =`https://us1.locationiq.com/v1/search.php?key=pk.005b36a82b2d0a1ca8e0cba89b50a48d&q=${search}&format=json`;
    try{
      let result= await axios.get(locationUrl);
      // console.log(result);
      this.setState({
        locationData:result.data[0],
        displayImg:true
      })
    }
    catch{
      this.setState({
        errorMessage:'you may inter wrong location',
        displayErrMes:true
      })
      
    }

  }
  render(){
    return(
      <div>
        <h1>City Explorer</h1>
        <form onSubmit={this.getLoc}>
          <input type='text' placeholder='city name' name='search' />
          <input type='submit' value='Explore!' />
        </form>
        <p>city name :{this.state.locationData.display_name}</p>
        <p>latitude :{this.state.locationData.lat}</p>
        <p>longitude:{this.state.locationData.lon}</p>
        { this.state.displayErrMes&&this.state.errorMessage}
        {this.state.displayImg&&<img src={`https://maps.locationiq.com/v3/staticmap?key=pk.005b36a82b2d0a1ca8e0cba89b50a48d&center=${this.state.locationData.lat},${this.state.locationData.lon}`}alt='map'/>}
      </div>
    )
  }
}
export default App;