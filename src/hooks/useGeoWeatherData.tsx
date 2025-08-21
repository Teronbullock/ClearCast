'use client';

import { Dispatch, SetStateAction, useEffect } from 'react';
import { getPosition } from '@lib/getPosition';
import { getWeatherData } from '@actions/getWeatherData';
import { mapWeatherData } from '@lib/mapWeatherData';
import { WeatherState } from '@app-types/weatherDataTypes';

/**
 * A custom Hook to fetch weather data based on geolocation and updates the provided state.
 *
 */
export const useGeoWeatherData = (
  setWeatherState: Dispatch<SetStateAction<WeatherState>>
) => {
  useEffect(() => {
    (async () => {
      try {
        setWeatherState({
          status: 'loading',
          weatherData: null,
        });

        const position = await getPosition();

        if (position.success === true) {
          const rawWeatherData = await getWeatherData('geo', {
            lat: position.lat,
            lon: position.lon,
          });
          const weatherData = mapWeatherData(rawWeatherData);
          if (!weatherData) {
            throw new Error('WeatherContext useEffect error');
          }

          setWeatherState({
            status: 'success',
            weatherData: weatherData,
          });
          return;
        } else {
          setWeatherState({
            status: 'error',
            weatherData: null,
            error: position.reason,
          });
          console.error(position.reason);
        }
      } catch (error) {
        console.error('WeatherContext useEffect error', error);
      }
    })();
  }, [setWeatherState]);
};
