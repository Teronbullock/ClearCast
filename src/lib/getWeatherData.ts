import { WeatherApiClient } from '@/lib/WeatherApiClient';

/**
 * -- getWeatherData --
 * This function is used to get the weather data from the OpenWeatherMap API.
 *
 * @returns
 */
export const getWeatherData = async (position: {
  lat: number;
  lon: number;
}) => {
  try {
    // const position = await getPosition();
    // return the current weather data
    return await new WeatherApiClient('geo', position).getData();
  } catch (error) {
    const err = new Error('Get Weather Data Error: ' + error);
    console.error(err);
    throw err;
  }
};
