import React, {useState, useEffect} from 'react'
import fetchWeather from '../../assets/api/weather';
import { location } from '../../assets/api/data';
import './Cuaca.css'

const Cuaca = () => {

    const [query, setQuery] = useState('Denpasar');
    const [weather, setWeather] = useState([]);

    
    const search = async (e) => {
        if(e.key === 'Enter'){
          const data = await fetchWeather(query);
          setWeather(data);
          setQuery('');
        }
    }

    const defaultCuaca = async (e) => {
        const data = await fetchWeather(location.city);
        setWeather(data);
        setQuery('');
      }

    useEffect(()=>{
        defaultCuaca()
    },[])
  return (
    <>
        <input type='text' className='search' placeholder='Enter your TimeZone Place' value={query} onChange={(e)=> setQuery(e.target.value)} onKeyPress={search}>
        </input>
        {weather.main && (
        <div className="city">
            <div className="city-info">
                <h2 className="city-name">
                    <span>{weather.name}</span>
                    <sup>{weather.sys.country}</sup>
                </h2>
                <div className="city-temp">
                    {Math.round(weather.main.temp)}
                    <sup>&deg;C</sup>
                </div>
            </div>
            <div className="weather-icon">
                <img className="city-icon" src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].desccription}>
                </img>
                <p>{weather.weather[0].description}</p>
            </div>
        </div>
        )}
        
    </>
  )
}

export default Cuaca