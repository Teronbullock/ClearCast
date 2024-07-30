import axios from 'axios';
import { windDir, pressure } from './weatherUtility';
import getDate from './getDate';


// Configs api call
export default class GetApi {
  constructor(localType, apiInput) {
    this.localType = localType;
    this.apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY; 
    this.baseUrl = 'https://api.openweathermap.org/data/2.5/';
    this.zip = `?zip=${apiInput},us&units=imperial&appid=${this.apiKey}`;
    this.city = `?q=${apiInput},us&units=imperial&appid=${this.apiKey}`;
    this.geo = `?lat=${apiInput.lat}&lon=${apiInput.lon}&units=imperial&appid=${this.apiKey}`;
    this.endingUrl = '';
  }
  
  // send the axios request
  async getData() {
    console.log('GetApi', process.env);
    
    if (this.localType === 'zip') {
      this.endingUrl = this.zip;
    } else if (this.localType === 'city') {
      this.endingUrl = this.city;
    } else if (this.localType === 'geo') {
      this.endingUrl = this.geo;
    }


    try {
      let currentWeatherRes = await axios.get(this.baseUrl + 'weather' + this.endingUrl).then(res => {
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
          wind: `${windDir(res.data.wind.deg)} ${res.data.wind.speed} mph `,
        };
      });

      let hourlyWeatherRes = await axios.get(this.baseUrl + 'forecast' + this.endingUrl).then( res => {
      
        const data = res.data.list.slice(0, 4).map((list, index) => {
          return {
            time: getDate('time','',list.dt ),
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
      throw new TypeError(err.response.data.message);
    }

  }

}


