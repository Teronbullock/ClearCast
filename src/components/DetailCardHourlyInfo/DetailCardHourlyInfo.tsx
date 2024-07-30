import { useContext } from 'react';
import { WeatherContext } from '../../contexts/WeatherContext';



export default function DetailCardHourlyInfo () {

  const { weatherData } = useContext(WeatherContext);

  return (
    <>
      <div className="hourly-weather flex justify-center items-center min-h-[90px]">
        <div className="hourly-weather__item w-full">
          <p className="hourly-weather__text m-0 text-base md:text-lg">Now</p>
          <img
            className="hourly-weather__img w-[35px] h-[35px]"
            alt="Weather Icon"
            src={weatherData === null || weatherData === false ? null : `http://openweathermap.org/img/wn/${weatherData.weatherIcon}@2x.png`}
          />
          <p className="hourly-weather__text m-0 text-base md:text-lg">
            {weatherData === null || weatherData === false ? null : 
            weatherData.currentTemp}
          </p>
        </div>

        {weatherData === null || weatherData === false ? null : Object.values(weatherData.hourlyWeatherData).map(list => (
          <div key={list.id} className="hourly-weather__item w-full">
            <p className="hourly-weather__text m-0 text-base md:text-lg">{list.time}</p>
            <img
              className="hourly-weather__img w-[35px] h-[35px]"
              alt="Weather Icon"
              src={`http://openweathermap.org/img/wn/${list.weatherIcon}@2x.png`}
            />
            <p className="hourly-weather__text m-0 text-base md:text-lg">{list.temp}</p>
          </div>
        ))}
      </div>
    </>
  );
};
