import React from 'react';




export default  function Weather(props) {
    return (
        <div>
            <div>
                <h2>Current Forcast</h2>
                Location: {props.name}, {props.country} <br></br>
                Current Temperature: {props.actualTemp}&#176;C <br></br>
                Feels-like: {props.feelslike_temp}&#176;C
            </div>
            <img src={props.conditionIcon} alt={props.condition}></img>
            <div>
                <h2>Day Forecast</h2>
                Average Temp: {props.averageTemp} <br></br>
                Low/High: {props.dayLow}/{props.dayHigh}&#176;C <br></br>
                What it will look like today: {props.dayCondition}
            </div>
            <img src={props.dayIcon} alt={props.dayCondition}></img>

        </div>
    )
}