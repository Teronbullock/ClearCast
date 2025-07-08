'use server';

import { WeatherApiClient } from '@lib/WeatherApiClient';

export const fetchWeatherAction = async (position: {
  lat: number;
  lon: number;
}) => {
  const res = await new WeatherApiClient('geo', {
    lat: position.lat,
    lon: position.lon,
  }).getData();

  return res;
};
