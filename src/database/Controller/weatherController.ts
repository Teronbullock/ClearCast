import { dbConnect } from '@db/dbConnection';
import { weatherModel } from '@db/Model/weatherCacheModel';
import { cache } from 'react';
import { WeatherModel } from '@app-types/weatherDataTypes';

export const createWeather = cache(async (data: WeatherModel) => {
  await dbConnect();
  console.log('data', data);
  try {
  } catch (error) {}
});
