import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from 'react';
import Weather from './components/Weather'

function App() {
  const [city, setCity] = useState("");
  const [data, setData] = useState(null);
  const getWeatherAPI = async () => {
    let baseURL = 'http://api.weatherapi.com/v1/forecast.json?key=';
    let APIkey = '2d2b35d0320249fb939152037211203';
    let queryCity = `&q=${city}`;
    let response = await (await fetch(baseURL + APIkey + queryCity)).json();
    if (!response.error) {
      setData(response);
    }
  }

  useEffect(() => {
    getWeatherAPI();
  }, [city])
  console.log('current data', data); 
  return (
    <div className="App">
      <br></br>
      <input type='text' value={city} onChange={e => setCity(e.target.value)} placeholder='Enter City Name'></input>
      {data !== null ?<Weather key={data.location.name}
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
        ></Weather>  :  <h2> Search for a City</h2>}

      {/* {data === 'undefined' || data === undefined ? <h2>Search for a city</h2> :
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
      
      } */}
      
    
    </div>
  );
}

export default App;
