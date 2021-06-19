'use strict';
import React from 'react';
import axios from 'axios';
import Weather from './Weather';
import Movie from './Movie';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locationData: '',
      errorMessage: '',
      displayErrMes: false,
      displayImg: false,
      cData: '',
      displayWeather: false,
      movieData: [],
      movieERR: false,
      displayMovie: false
    }
  }
  getLoc = async (event) => {
    event.preventDefault();
    let search = event.target.search.value;
    console.log(search);
    let locationUrl = `https://us1.locationiq.com/v1/search.php?key=pk.005b36a82b2d0a1ca8e0cba89b50a48d&q=${search}&format=json`;
    try {
      let result = await axios.get(locationUrl);
      // console.log(result);
      this.setState({
        locationData: result.data[0],
        displayImg: true
      })
    }
    catch {
      this.setState({
        errorMessage: 'you may inter wrong location',
        displayErrMes: true
      })

    }
  }
  getMovie = async (event) => {
    event.preventDefault();
    let search = event.target.search.value;
    let movieUrl = `${process.env.REACT_APP_WEATHERURL}/movies?query=${search}`;
    axios.get(movieUrl).then((item) => {
      console.log(item.data);
      this.setState({
        movieData: item.data,
        movieERR: true,
        displayMovie: true
      })
    }).catch(
      this.setState({
        movieERR: false,
        displayMovie: false
      })
    )
    console.log(movieUrl);
  }

  getWeather = async (event) => {
    event.preventDefault();
    let query = event.target.search.value;
    let weatherUrl = `${process.env.REACT_APP_WEATHERURL}/weather?city_name=${query}`;
    // console.log(weatherUrl);
    try {
      let res = await axios.get(weatherUrl);
      this.setState({
        cData: res.data,
        displayWeather: true

      })
      // console.log(res.data)
    }
    catch {
      this.setState({

        errorMessage: 'city not found',
        displayWeather: false
      })
    }
  }

  render() {
    return (
      <div>
        <h1>City Explorer</h1>
        <form onSubmit={(event) => {
          this.getLoc(event);
          this.getWeather(event);
          this.getMovie(event);
        }}>
          <input type='text' placeholder='city name' name='search' />
          <input type='submit' value='Explore!' />
        </form>
        <p>city name :{this.state.locationData.display_name}</p>
        <p>latitude :{this.state.locationData.lat}</p>
        <p>longitude:{this.state.locationData.lon}</p>
        {this.state.displayImg && <img src={`https://maps.locationiq.com/v3/staticmap?key=pk.005b36a82b2d0a1ca8e0cba89b50a48d&center=${this.state.locationData.lat},${this.state.locationData.lon}`} alt='map' />}
        {/* { this.state.displayErrMes&&this.state.errorMessage} */}
        {this.state.displayWeather && 
       <Weather data={this.state.cData}/>}
        {this.state.displayMovie && 
        <Movie data={this.state.movieData}/>}
      </div>
    )
  }
}
export default App;