import { formatDateTime } from '@lib/dateUtils';
import { windDir, pressure } from './weatherUtility';
import {
  CombinedWeatherResponse,
  HourlyForecastItem,
} from '@app-types/weatherDataTypes';
import { getDailyAverages } from '@lib/getDailyAverages';

export const mapWeatherData = (data: CombinedWeatherResponse) => {
  const { current, hourly } = data;
  console.log('Maps: Data', data);

  return {
    location: current.name,
    currentTemp: `${Math.round(current.main.temp)}°`,
    highTemp: `${Math.round(current.main.temp_max)}°`,
    lowTemp: `${Math.round(current.main.temp_min)}°`,
    realFeel: `${Math.round(current.main.feels_like)}°`,
    pressure: `${pressure(current.main.pressure)} in`,
    humidity: `${current.main.humidity}%`,
    weatherCondition: current.weather[0].main,
    weatherTypeDes: current.weather[0].description,
    weatherIcon: current.weather[0].icon,
    sunrise: current.sys.sunrise,
    sunset: current.sys.sunset,
    wind: `${windDir(current.wind.deg)} ${current.wind.speed}mph `,
    hourlyWeather: hourly.list
      .slice(0, 9)
      .map((list: HourlyForecastItem, index: number) => {
        return {
          id: index.toString(),
          time: formatDateTime('time12hr', list.dt, current.timezone),
          temp: `${Math.round(list.main.temp)}°`,
          max: `${Math.round(list.main.temp_max)}`,
          min: `${Math.round(list.main.temp_min)}`,
          weatherIcon: list.weather[0].icon,
          wind: `${windDir(list.wind.deg)} ${list.wind.speed}mph `,
        };
      }),
    dailyAvg: getDailyAverages(hourly.list),
  };
};
