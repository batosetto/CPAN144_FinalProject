import { useEffect, useState } from "react";

export default function App() {
  const cities = ['Salvador', 'Paris', 'New York', 'Cairo', 'Tokyo', 'Sydney'];
  const [city, setCity] = useState("");
  const [weatherInfo, setWeatherInfo] = useState("");

  useEffect(() => {
    const apiKey = "23e9fdd35c153b245833bbff1cde7b76";
    const url = `http://api.weatherstack.com/current?access_key=${apiKey}&query=${city}&unit=m/`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        setWeatherInfo(data);
      })           
  }, [city]);

  return (
    <div className="App" style={{backgroundColor: "aliceblue", border:"5px double purple", marginLeft:400, marginRight:400, marginTop:50, padding:20}}>
      <h1>Weather Information</h1>

      <select value={city} onChange={(e) => setCity(e.target.value)}>
        <option value="">Select a city</option>
        {cities.map((city) => (
          <option key={city} value={city}>{city}</option>
        ))}
      </select>

      <br />

      <div>
        {weatherInfo && (
          <div>
            <h2>{weatherInfo.location?.name}, {weatherInfo.location?.country}</h2>
            <div>Time: {weatherInfo.current?.observation_time}</div>
            <div>Temperature: {weatherInfo.current?.temperature}°C</div>
            <div>
             <img style={{width:"30px", height:"30px"}} src={weatherInfo.current?.weather_icons[0]} alt="img" />
             {weatherInfo.current?.weather_descriptions[0]}
            </div>
            <div>Feels Like: {weatherInfo.current?.feelslike}°C</div>
            <div>Wind speed: {weatherInfo.current?.wind_speed} km/h</div>
            <div>Humidity: {weatherInfo.current?.humidity}%</div>            
          </div>
        )}
      </div>
    </div>
  );
}