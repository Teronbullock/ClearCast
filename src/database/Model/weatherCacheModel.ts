import { Schema, model, models } from 'mongoose';
import { hourlyWeatherSchema } from '@db/Model/hourlyWeatherModel';
import { dailyAvgSchema } from '@db/Model/dailyAvgModel';

export const weatherCacheSchema = new Schema({
  location: {
    type: Number,
    require: true,
  },
  currentTemp: {
    type: String,
    required: true,
  },
  highTemp: {
    type: String,
    required: true,
  },
  lowTemp: {
    type: String,
    required: true,
  },
  realFeel: {
    type: String,
    required: true,
  },
  pressure: {
    type: String,
    required: true,
  },
  humidity: {
    type: String,
    required: true,
  },
  weatherCondition: {
    type: String,
    required: true,
  },
  weatherTypeDes: {
    type: String,
    required: true,
  },
  weatherIcon: {
    type: String,
    required: true,
  },
  sunrise: {
    type: Number,
    required: true,
  },
  sunset: {
    type: Number,
    required: true,
  },
  wind: {
    type: String,
    required: true,
  },
  hourlyWeather: [hourlyWeatherSchema],
  dailyAvg: [dailyAvgSchema],
});

export const hourlyWeatherCache =
  models.weatherCache || model('WeatherCache', weatherCacheSchema);
