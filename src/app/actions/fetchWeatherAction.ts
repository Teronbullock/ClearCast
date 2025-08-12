'use server';

import { getWeatherData } from '@lib/getWeatherData';

export const fetchWeatherAction = async (position: {
  lat: number;
  lon: number;
}) => {
  const res = await getWeatherData('geo', {
    lat: position.lat,
    lon: position.lon,
  });

  return res;
};
