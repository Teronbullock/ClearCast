'use client';

import { useEffect, useState } from 'react';
import { getPosition } from '@/lib/getPosition';
import { fetchWeatherAction } from '@actions/fetchWeatherAction';
import { mapWeatherData } from '@/lib/mapWeatherData';
import { WeatherDataType } from '@app-types/weatherDataTypes';

export const useGetWeatherData = () => {
  const [weatherData, setWeatherData] = useState<WeatherDataType | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const position = await getPosition();

        if (position.success === true) {
          const rawWeatherData = await fetchWeatherAction({
            lat: position.lat,
            lon: position.lon,
          });
          const weatherData = mapWeatherData(rawWeatherData);
          if (!weatherData) {
            throw new Error('WeatherContext useEffect error');
          }
          console.log('mapped weather', weatherData);
          setWeatherData(weatherData);
        }
      } catch (error) {
        console.error('WeatherContext useEffect error', error);
      }
    })();
  }, []);

  return {
    weatherData,
    setWeatherData,
  };
};
