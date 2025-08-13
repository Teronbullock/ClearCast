'use server';

import axios from 'axios';

export const getWeatherData = async (
  localType: string,
  inputValue: { string?: string; lat?: number; lon?: number }
) => {
  const apiKey = process.env.WEATHER_API_KEY;
  const baseUrl = 'https://api.openweathermap.org/data/2.5/';
  const zip = `?zip=${inputValue.string},us&units=imperial&appid=${apiKey}`;
  const city = `?q=${inputValue.string},us&units=imperial&appid=${apiKey}`;
  const geo = `?lat=${inputValue.lat}&lon=${inputValue.lon}&units=imperial&appid=${apiKey}`;
  let endingUrl = '';

  switch (localType) {
    case 'zip':
      endingUrl = zip;
      break;
    case 'city':
      endingUrl = city;
      break;
    case 'geo':
      endingUrl = geo;
      break;
    default:
      throw new Error(`Invalid localType: ${localType}`);
  }

  try {
    // Get weather data
    const [currentRes, hourlyRes] = await Promise.all([
      axios.get(`${baseUrl}weather${endingUrl}`),
      axios.get(`${baseUrl}forecast${endingUrl}`),
    ]);

    // console.log('Weather Res object:', {
    //   current: currentRes.data,
    //   hourly: hourlyRes.data,
    // });

    return {
      current: currentRes.data,
      hourly: hourlyRes.data,
    };
  } catch (err) {
    console.error(`Error in obtaining weather data: ${err}`);
    throw err;
  }
};
