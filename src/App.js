import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from 'react';
import Weather from './components/Weather'

function App() {
  const [city, setCity] = useState("London");
  const [data, setData] = useState();
  const getWeatherAPI = async () => {
    let baseURL = 'http://api.weatherapi.com/v1/forecast.json?key=';
    let APIkey = '2d2b35d0320249fb939152037211203';
    let queryCity = `&q=${city}`;
    let response = await (await fetch(baseURL + APIkey + queryCity)).json();
    setData(response);
  }

  useEffect(() => {
    getWeatherAPI();
  }, [city])
  return (
    <div className="App">
      <br></br>
      <input type='text' value={city} onChange={e => setCity(e.target.value)} placeholder='Enter City Name'></input>
      {data.error ? <h3>Search for a city</h3> : 
      <Weather key={data.location.name}
      name={data.location.name} 
      country={data.location.country} 
      actualTemp={data.current.temp_c} 
      feelslike_temp={data.current.feelslike_c}
      conditionIcon={data.current.condition.icon}
      averageTemp={data.forecast.forecastday[0].day.avgtemp_c}
      dayLow={data.forecast.forecastday[0].day.mintemp_c}
      dayHigh={data.forecast.forecastday[0].day.maxtemp_c}
      dayCondition={data.forecast.forecastday[0].day.condition.text}
      dayIcon={data.forecast.forecastday[0].day.condition.icon}
      ></Weather> 
    }
    </div>
  );
}

export default App;
