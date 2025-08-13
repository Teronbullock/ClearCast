'use server';

import { getWeatherData } from '@/app/actions/getWeatherData';

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
