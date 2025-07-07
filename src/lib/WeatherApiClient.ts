import axios from 'axios';

// Configs api call
export class WeatherApiClient {
  localType: string;
  apiKey: string | undefined;
  baseUrl: string;
  zip: string;
  city: string;
  geo: string;
  endingUrl: string;
  inputValue: { string?: string; lat?: number; lon?: number };

  constructor(
    localType: string,
    inputValue: { string?: string; lat?: number; lon?: number }
  ) {
    this.localType = localType;
    this.inputValue = inputValue;
    this.apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
    this.baseUrl = 'https://api.openweathermap.org/data/2.5/';
    this.zip = `?zip=${inputValue.string},us&units=imperial&appid=${this.apiKey}`;
    this.city = `?q=${inputValue.string},us&units=imperial&appid=${this.apiKey}`;
    this.geo = `?lat=${inputValue.lat}&lon=${inputValue.lon}&units=imperial&appid=${this.apiKey}`;
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
        .get(`${this.baseUrl}weather${this.endingUrl}`)
        .then(res => res.data);

      // Get hourly weather data
      const hourlyWeatherRes = await axios
        .get(`${this.baseUrl}forecast${this.endingUrl}`)
        .then(res => res.data);

      console.log('Weather Res object:', {
        current: currentWeatherRes,
        hourly: hourlyWeatherRes,
      });

      return {
        current: currentWeatherRes,
        hourly: hourlyWeatherRes,
      };
    } catch (err) {
      console.error(`Error in obtaining weather data: ${err}`);
      throw err;
    }
  }
}
