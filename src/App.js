import React from 'react';
import axios from 'axios';
class App extends React.Component{
  render(){
    return(
      <div>
        <form>
          <input type='text' placeholder='city name' name='searchQuery' />
          <input type='submit' value='Explore!' />
        </form>
      </div>
    )
  }
}
export default App;