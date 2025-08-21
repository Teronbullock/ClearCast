export interface BaseWeather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface BaseWeatherResponse {
  id: number;
  name: string;
  coord: {
    lat: number;
    lon: number;
  };
  timezone: number;
}

export interface BaseMain {
  temp: number;
  feels_like: number;
  pressure: number;
  humidity: number;
  temp_min: number;
  temp_max: number;
  sea_level?: number;
  grnd_level?: number;
  temp_kf?: number;
}

export interface Wind {
  speed: number;
  deg: number;
  gust: number;
}

export interface HourlyForecastItem {
  dt: number;
  time: number;
  max: number;
  min: number;
  main: BaseMain;
  weather: BaseWeather[];
  clouds: {
    all: number;
  };
  wind: Wind;
  visibility: number;
  pop: number;
  sys: {
    pod: string;
  };
}

export interface CurrentWeatherResponse extends BaseWeatherResponse {
  weather: BaseWeather[];
  base: string;
  main: BaseMain;
  visibility: number;
  wind: Wind;
  rain: {
    '1h': number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  cod: number;
}

export interface City extends BaseWeatherResponse {
  country: string;
  population: number;
  sunrise: number;
  sunset: number;
}

export interface HourlyForecastResponse {
  cod: string;
  message: number;
  cnt: number;
  list: HourlyForecastItem[];
  city: City;
}

export interface WeatherModel {
  currentTemp: string;
  highTemp: string;
  hourlyWeather: {
    id: string;
    time: string;
    weatherIcon: string;
    temp: string;
  }[];
  humidity: string;
  location: string;
  lowTemp: string;
  pressure: string;
  realFeel: string;
  sunrise: number;
  sunset: number;
  weatherCondition: string;
  weatherIcon: string;
  weatherTypeDes: string;
  wind: string;
}

export interface CombinedWeatherResponse {
  current: CurrentWeatherResponse;
  hourly: HourlyForecastResponse;
}

export interface WeatherState {
  status: 'idle' | 'loading' | 'success' | 'error';
  weatherData: WeatherModel | null;
  error?: string | null;
}
