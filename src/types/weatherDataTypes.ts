export interface WeatherDataType {
  currentTemp: string;
  highTemp: string;
  hourlyWeather: {
    id: number;
    time: string;
    weatherIcon: string;
    temp: number;
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
