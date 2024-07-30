import axios from 'axios';
import { windDir, pressure } from './weatherUtility';
import getDate from './getDate';

interface HourlyWeatherList {
  clouds: object;
  dt: number;
  dt_txt: string;
  main: {
    feels_like: number;
    grnd_level: number;
    humidity: number;
    pressure: number;
    sea_level: number;
    temp: number;
    temp_kf: number;
    temp_max: number;
    temp_min: number;
  };
  pop: number;
  rain: object;
  sys: object;
  visibility: number;
  weather: [
    {
      description: string;
      icon: string;
      id: number;
      main: string;
    }
  ];
  wind: object;
}

// Configs api call
export default class GetApi {
  localType: string;
  apiKey: string | undefined;
  baseUrl: string;
  zip: string;
  city: string;
  geo: string;
  endingUrl: string;
  apiInput: { lat: string; lon: string };

  constructor(localType: string, apiInput: { lat: string; lon: string }) {
    this.localType = localType;
    this.apiInput = apiInput;
    this.apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
    this.baseUrl = 'https://api.openweathermap.org/data/2.5/';
    this.zip = `?zip=${apiInput},us&units=imperial&appid=${this.apiKey}`;
    this.city = `?q=${apiInput},us&units=imperial&appid=${this.apiKey}`;
    this.geo = `?lat=${apiInput.lat}&lon=${apiInput.lon}&units=imperial&appid=${this.apiKey}`;
    this.endingUrl = '';
  }

  // send the axios request
  async getData() {
    if (this.localType === 'zip') {
      this.endingUrl = this.zip;
    } else if (this.localType === 'city') {
      this.endingUrl = this.city;
    } else if (this.localType === 'geo') {
      this.endingUrl = this.geo;
    }

    try {
      // Get current weather data
      const currentWeatherRes = await axios
        .get(this.baseUrl + 'weather' + this.endingUrl)
        .then(res => {
          console.log('Res:', res.data);
          return {
            location: res.data.name,
            currentTemp: `${Math.round(res.data.main.temp)}°`,
            highTemp: `${Math.round(res.data.main.temp_max)}°`,
            lowTemp: `${Math.round(res.data.main.temp_min)}°`,
            realFeel: `${Math.round(res.data.main.feels_like)}°`,
            pressure: `${pressure(res.data.main.pressure)} in`,
            humidity: `${res.data.main.humidity}%`,
            weatherCondition: res.data.weather[0].main,
            weatherTypeDes: res.data.weather[0].description,
            weatherIcon: res.data.weather[0].icon,
            sunrise: res.data.sys.sunrise,
            sunset: res.data.sys.sunset,
            wind: `${windDir(res.data.wind.deg)} ${res.data.wind.speed}mph `,
          };
        });

      // Get hourly weather data
      const hourlyWeatherRes = await axios
        .get(this.baseUrl + 'forecast' + this.endingUrl)
        .then(res => {
          const data = res.data.list
            .slice(0, 4)
            .map((list: HourlyWeatherList, index: number) => {
              return {
                time: getDate(null, list.dt),
                weatherIcon: list.weather[0].icon,
                temp: `${Math.round(list.main.temp)}°`,
                id: index.toString(),
              };
            });

          return {
            hourlyWeatherData: {
              ...data,
            },
          };
        });

      console.log('currentWeatherRes:', currentWeatherRes);
      console.log('hourlyWeatherRes:', hourlyWeatherRes);

      return {
        ...currentWeatherRes,
        ...hourlyWeatherRes,
      };
    } catch (err) {
      console.error(`Error in obtaining weather data: ${err}`);
      throw err;
    }
  }
}
