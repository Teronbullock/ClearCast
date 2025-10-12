import { models, model, Schema } from 'mongoose';

export const hourlyWeatherSchema = new Schema({
  id: {
    type: String,
    required: true,
  },
  time: {
    type: Date,
    required: true,
  },
  temp: {
    type: String,
    required: true,
  },
  max: {
    type: String,
    required: true,
  },
  min: {
    type: String,
    required: true,
  },
  weatherIcon: {
    type: String,
    required: true,
  },
  wind: {
    type: String,
    required: true,
  },
});

export const hourlyWeather =
  models.hourlyWeather || model('HourlyWeather', hourlyWeatherSchema);
