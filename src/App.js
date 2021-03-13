import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from 'react';
import Weather from './components/Weather'

function App() {

  // const createList = arr => {
    
  //   let output = arr.map((item) => <li>{item.room_type}, {item.vacant_rooms}, ${item.price}</li>)
  //   return <ol>{output}</ol>
  // }
  // const [city, setCity] = useState('London');
  // const fooBar = num => {
  //   if (num % 2 === 0) {
  //     console.log('foo');
  //   }
  //   if (num % 7 === 0) {
  //     console.log('bar');
  //   }

  //   if (num % 14 === 0) {
  //     console.log("foobar")
  //   }

  //   else {
  //     console.log(num);
  //   }
  // }

  // let rooms = [
  //   { room_type: "Queen", vacant_rooms: 5, price: 100 },
  //   { room_type: "Double", vacant_rooms: 3, price: 75 },
  //   { room_type: "Twin", vacant_rooms: 8, price: 60 }
  // ];
  const [city, setCity] = useState("London");
  const [data, setData] = useState();
  const getWeatherAPI = async () => {
    let baseURL = 'http://api.weatherapi.com/v1/forecast.json?key=';
    let APIkey = '2d2b35d0320249fb939152037211203';
    let queryCity = `&q=${city}`;
    let response = await (await fetch(baseURL + APIkey + queryCity)).json();
    // console.log(response);
    setData(response);
  }

  useEffect(() => {
    getWeatherAPI();
    console.log('my api response data: ', data);

  }, [city])
  // getWeatherAPI();
  return (
    <div className="App">
      {/* {createList(rooms)}
      {fooBar(28)} */}
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
