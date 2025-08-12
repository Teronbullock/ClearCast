import { getDate } from './getDate';
import { windDir, pressure } from './weatherUtility';
import {
  WeatherRawData,
  HourlyWeatherList,
  HourlyWeather,
} from '@/types/weatherDataTypes';

export const mapWeatherData = (data: {
  current: WeatherRawData;
  hourly: HourlyWeather;
}) => {
  return {
    location: data.current.name,
    currentTemp: `${Math.round(data.current.main.temp)}°`,
    highTemp: `${Math.round(data.current.main.temp_max)}°`,
    lowTemp: `${Math.round(data.current.main.temp_min)}°`,
    realFeel: `${Math.round(data.current.main.feels_like)}°`,
    pressure: `${pressure(data.current.main.pressure)} in`,
    humidity: `${data.current.main.humidity}%`,
    weatherCondition: data.current.weather[0].main,
    weatherTypeDes: data.current.weather[0].description,
    weatherIcon: data.current.weather[0].icon,
    sunrise: data.current.sys.sunrise,
    sunset: data.current.sys.sunset,
    wind: `${windDir(data.current.wind.deg)} ${data.current.wind.speed}mph `,
    hourlyWeather: data.hourly.list
      .slice(0, 4)
      .map((list: HourlyWeatherList, index: number) => {
        return {
          id: index.toString(),
          time: getDate(null, list.dt),
          weatherIcon: list.weather[0].icon,
          temp: `${Math.round(list.main.temp)}°`,
        };
      }),
  };
};
