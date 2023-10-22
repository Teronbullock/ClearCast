import { useContext } from 'react';
import { WeatherContext } from '../../contexts/WeatherContext';
import './DetailCardHourlyInfo.scss';


export default function DetailCardHourlyInfo () {

  const { weatherData } = useContext(WeatherContext);

  return (
    <>
      <div className="hourly-weather">
        <div className="hourly-weather__item">
          <p className="hourly-weather__text">Now</p>
          <img
            className="hourly-weather__img"
            alt="Weather Icon"
            src={weatherData === null || weatherData === false ? null : `http://openweathermap.org/img/wn/${weatherData.weatherIcon}@2x.png`}
          />
          <p className="hourly-weather__text">
            {weatherData === null || weatherData === false ? null : 
            weatherData.currentTemp}
          </p>
        </div>

        {weatherData === null || weatherData === false ? null : Object.values(weatherData.hourlyWeatherData).map(list => (
          <div key={list.id} className="hourly-weather__item">
            <p className="hourly-weather__text">{list.time}</p>
            <img
              className="hourly-weather__img"
              alt="Weather Icon"
              src={`http://openweathermap.org/img/wn/${list.weatherIcon}@2x.png`}
            />
            <p className="hourly-weather__text">{list.temp}</p>
          </div>
        ))}
      </div>
    </>
  );
};
