import { getWeatherData } from '@/app/actions/getWeatherData';
import { mapWeatherData } from '@lib/mapWeatherData';
import { WeatherState } from '@/types/weatherDataTypes';

export const fetchWeather = async (
  type: 'zip' | 'city',
  query: string
): Promise<WeatherState> => {
  try {
    const rawWeatherData = await getWeatherData(type, { string: query });
    const weatherData = mapWeatherData(rawWeatherData);

    if (!weatherData) {
      throw new Error('Weather data mapping failed');
    }

    return {
      status: 'success',
      weatherData,
    };
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : 'Unknown error';
    console.error('Weather fetch error:', errorMessage);
    alert('There was an error obtaining your weather data, please try again');

    return {
      status: 'error',
      weatherData: null,
      error: errorMessage,
    };
  }
};
