

import React from 'react';
import WeatherDay from './WeatherDay';


class Weather extends React.Component {
    render() {
        return (
            <>
               { this.props.data.map((item) => (

                <WeatherDay des={item.des} date={item.date} />

                ))}
            </>
        )
    }
}
export default Weather;