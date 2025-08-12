export interface WeatherDataType {
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

export interface WeatherRawData {
  base: string;
  clouds: {
    all: number;
  };
  cod: number;
  coord: {
    lat: number;
    lon: number;
  };
  dt: number;
  id: number;
  main: {
    feels_like: number;
    grnd_level?: number;
    humidity: number;
    pressure: number;
    sea_level?: number;
    temp: number;
    temp_max: number;
    temp_min: number;
  };
  name: string;
  sys: {
    country: string;
    id: number;
    sunrise: number;
    sunset: number;
    type: number;
    timezone: number;
    visibility: number;
  };
  weather: {
    id: number;
    main: string;
    icon: string;
    description: string;
  }[];
  wind: {
    speed: number;
    deg: number;
  };
}

export interface HourlyWeatherList {
  dt: number;
  main: {
    temp: number;
  };
  weather: {
    icon: string;
  }[];
}

export interface HourlyWeather {
  list: HourlyWeatherList[];
}
